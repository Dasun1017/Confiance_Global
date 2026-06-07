"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@yeslankatravels.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Website enquiry - Yes Lanka Travels");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get(
        "message"
      )}`
    );

    setSent(true);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required placeholder="Your name" suppressHydrationWarning />
      </label>
      <label>
        Email
        <input
          name="email"
          required
          type="email"
          placeholder="you@example.com"
          suppressHydrationWarning
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          suppressHydrationWarning
          rows={5}
          placeholder="Ask about transfers, packages, hotels, or custom routes."
        />
      </label>
      <button className="secondary-button" type="submit" suppressHydrationWarning>
        Email Us
      </button>
      {sent ? <p className="form-status">Opening your email app.</p> : null}
    </form>
  );
}
