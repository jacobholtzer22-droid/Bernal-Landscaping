"use client";

import { useState } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
      <h3 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
        Get a Free Quote
      </h3>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label htmlFor="quote-name" className="sr-only">
            Name
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none ring-forest/30 transition-shadow placeholder:text-charcoal/40 focus:border-forest focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="quote-email" className="sr-only">
            Email
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none ring-forest/30 transition-shadow placeholder:text-charcoal/40 focus:border-forest focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className="sr-only">
            Phone
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none ring-forest/30 transition-shadow placeholder:text-charcoal/40 focus:border-forest focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="quote-message" className="sr-only">
            Message
          </label>
          <textarea
            id="quote-message"
            name="message"
            required
            rows={5}
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="w-full resize-y rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none ring-forest/30 transition-shadow placeholder:text-charcoal/40 focus:border-forest focus:ring-2"
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
          {status === "loading" ? "Sending…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
