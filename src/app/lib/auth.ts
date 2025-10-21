import db from "@/app/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "session";
const SESSION_TTL_DAYS = 7;

export async function hashPassword(plain: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plain, salt);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

// Ne pose plus le cookie ici : uniquement BDD
export function createSession(userId: number) {
  const token = crypto.randomUUID();
  const expiresAt = Date.now() + SESSION_TTL_DAYS * 24 * 60 * 60 * 1000;
  db.prepare("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)").run(token, userId, expiresAt);
  return { token, expiresAt };
}

// Lecture cookies = asynchrone dans Next 15
export async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const row = db.prepare(`
    SELECT sessions.token, sessions.expires_at, users.id as user_id, users.username
    FROM sessions
    JOIN users ON users.id = sessions.user_id
    WHERE sessions.token = ?
  `).get(token) as { token: string; expires_at: number; user_id: number; username: string } | undefined;

  if (!row) return null;
  if (row.expires_at < Date.now()) {
    db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
    return null;
  }
  return { token: row.token, userId: row.user_id, username: row.username };
}

// Vérification = asynchrone
export async function requireUser() {
  const s = await getSession();
  if (!s) throw new Error("UNAUTHORIZED");
  return s;
}

// Ne supprime plus le cookie ici (fait dans la route)
export function destroySessionToken(token: string) {
  db.prepare("DELETE FROM sessions WHERE token = ?").run(token);
}

export const sessionCookieOptions = {
  httpOnly: true as const,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_TTL_DAYS * 24 * 60 * 60,
};
