import { NextResponse } from "next/server";

/**
 * Contact form submission handler.
 *
 * Accepts:
 *   - application/json (used by the homepage QuoteForm)
 *   - multipart/form-data (used by /contact when a photo is attached)
 *
 * TODO: Wire up Resend (or similar) to deliver quote requests + any photo
 *       attachment to salvador@bernallandscape.com. Store/forward the photo
 *       via Resend attachments, S3, UploadThing, etc.
 */
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    if (contentType.includes("multipart/form-data")) {
      const fd = await request.formData();
      const _payload = {
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        address: String(fd.get("address") ?? ""),
        service: String(fd.get("service") ?? ""),
        message: String(fd.get("message") ?? ""),
        smsConsent:
          String(fd.get("smsConsent") ?? "") === "true" ||
          fd.get("smsConsent") === "on",
        photo: fd.get("photo") instanceof File ? (fd.get("photo") as File) : null,
      };
      // TODO: forward _payload (and photo) to email/storage provider
      void _payload;
    } else {
      const _json = await request.json().catch(() => ({}));
      // TODO: forward _json to email provider
      void _json;
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
