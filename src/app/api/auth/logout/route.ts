export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, destroySessionToken } from "@/app/lib/auth";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) destroySessionToken(token);

  const res = NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  res.cookies.delete(SESSION_COOKIE);
  return res;
}
