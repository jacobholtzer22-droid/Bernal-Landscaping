"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Paperclip } from "lucide-react";
import { SERVICES } from "@/lib/services";

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => ({ value: s.slug, label: s.shortTitle })),
  { value: "not-sure", label: "Not Sure / Multiple Services" },
];

type ContactFormProps = {
  /** Anchor id on the surrounding wrapper. Useful for /contact#quote-form links. */
  anchorId?: string;
};

export function ContactForm({ anchorId = "quote-form" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [photoName, setPhotoName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function clearStatus() {
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const formEl = e.currentTarget;
      const file = fileInputRef.current?.files?.[0];

      let res: Response;
      if (file) {
        const fd = new FormData(formEl);
        if (smsConsent) fd.set("smsConsent", "true");
        res = await fetch("/api/contact", {
          method: "POST",
          body: fd,
        });
      } else {
        res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone,
            service,
            message,
            smsConsent,
          }),
        });
      }

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setService("");
        setMessage("");
        setSmsConsent(false);
        setPhotoName(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal/65";
  const inputClass =
    "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal outline-none ring-forest/30 transition-all placeholder:text-charcoal/40 focus:border-forest focus:ring-2";

  return (
    <div
      id={anchorId}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-forest/15 bg-white shadow-xl"
    >
      <div className="bg-gradient-to-r from-forest to-forest-dark px-8 py-7 text-cream md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
          Contact Us
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">
          Get a Quote
        </h2>
        <p className="mt-2 text-sm text-cream/85">
          Send us a message — we&apos;ll get right back to you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-cream px-8 py-8 md:px-10 md:py-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Name <span className="text-terracotta">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearStatus();
              }}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email <span className="text-terracotta">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearStatus();
              }}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone <span className="text-terracotta">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(616) 555-0123"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                clearStatus();
              }}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-service" className={labelClass}>
              Service Type
            </label>
            <select
              id="contact-service"
              name="service"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                clearStatus();
              }}
              className={`${inputClass} appearance-none bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%231A1A1A' opacity='0.6'><path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/></svg>\")",
              }}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, timeline, and any details you'd like us to know."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clearStatus();
            }}
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label
            htmlFor="contact-photo"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-charcoal/25 bg-white px-4 py-3 text-sm text-charcoal/70 transition hover:border-forest hover:bg-forest/5"
          >
            <Paperclip className="h-4 w-4" aria-hidden />
            <span className="flex-1">
              {photoName ?? "Attach a photo (optional)"}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-forest">
              Browse
            </span>
          </label>
          <input
            id="contact-photo"
            name="photo"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              setPhotoName(e.target.files?.[0]?.name ?? null);
              clearStatus();
            }}
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/60 px-4 py-3 text-xs leading-relaxed text-charcoal/70 transition hover:bg-white">
          <input
            type="checkbox"
            checked={smsConsent}
            onChange={(e) => setSmsConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/30 text-forest focus:ring-forest/30"
          />
          <span>
            By checking this box and providing your phone number, you consent
            to receive SMS messages from Bernal Landscape Management. Message
            frequency may vary. Standard message and data rates may apply.
            Reply STOP to opt out. Reply HELP for help. Consent is not a
            condition of purchase.
          </span>
        </label>

        {status === "success" && (
          <div className="flex items-start gap-3 rounded-xl bg-forest/10 px-4 py-3 text-sm font-medium text-forest">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <span>
              Thanks for contacting us! We&apos;ll get right back to you.
            </span>
          </div>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
            Oops, there was an error sending your message. Please try again
            later or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-forest px-6 py-4 text-center text-base font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
