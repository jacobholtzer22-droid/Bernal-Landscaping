import { NextResponse } from "next/server";

/**
 * TODO: Wire up Resend (or similar) to deliver quote requests to salvador@bernallandscape.com
 */
export async function POST(request: Request) {
  try {
    await request.json().catch(() => ({}));
  } catch {
    /* ignore malformed body */
  }
  return NextResponse.json({ ok: true }, { status: 200 });
}
