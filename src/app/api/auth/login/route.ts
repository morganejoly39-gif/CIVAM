export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import db from "@/app/lib/db";
import { verifyPassword, createSession, SESSION_COOKIE, sessionCookieOptions } from "@/app/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: "BAD_REQUEST" }, { status: 400 });
  }

  const user = db.prepare("SELECT * FROM users WHERE username = ?").get(username) as
    | { id: number; username: string; password_hash: string }
    | undefined;

  if (!user) return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });

  const ok = await verifyPassword(password, user.password_hash);
  if (!ok) return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });

  const { token } = createSession(user.id);

  const res = NextResponse.json({ success: true, username: user.username }, {
    headers: { "Cache-Control": "no-store" },
  });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return res;
}
