export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getSession } from "@/app/lib/auth";

export async function GET() {
  const s = await getSession();
  if (!s) return NextResponse.json({ authenticated: false }, { headers: { "Cache-Control": "no-store" } });
  return NextResponse.json({ authenticated: true, username: s.username }, { headers: { "Cache-Control": "no-store" } });
}
