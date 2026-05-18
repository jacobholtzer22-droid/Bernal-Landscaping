"use client";

import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
        res = await fetch("/api/contact", {
          method: "POST",
          body: fd,
        });
      } else {
        res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, message }),
        });
      }

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setPhotoName(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none ring-forest/30 transition-shadow placeholder:text-charcoal/40 focus:border-forest focus:ring-2";

  return (
    <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
      <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
        Send us a Message
      </h2>
      <p className="mt-2 text-sm text-charcoal/70">
        We&apos;ll get back to you within one business day.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearStatus();
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearStatus();
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clearStatus();
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project"
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
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-charcoal/25 bg-cream px-4 py-3 text-sm text-charcoal/70 transition hover:border-forest hover:bg-forest/5"
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

        {status === "success" && (
          <p className="rounded-xl bg-forest/10 px-4 py-3 text-sm font-medium text-forest">
            Thanks — your message was sent. We&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-forest px-6 py-3.5 text-center text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
