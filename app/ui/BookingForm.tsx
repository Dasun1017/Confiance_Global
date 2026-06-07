"use client";

import { FormEvent, useMemo, useState } from "react";

type BookingState = {
  name: string;
  email: string;
  country: string;
  date: string;
  travelers: string;
  packageName: string;
  message: string;
};

const initialState: BookingState = {
  name: "",
  email: "",
  country: "",
  date: "",
  travelers: "2",
  packageName: "Island Explorer",
  message: ""
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94771234567";

  const whatsappLink = useMemo(() => {
    const text = [
      "Hello Yes Lanka Travels, I want to plan a Sri Lanka tour.",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Travel date: ${form.date}`,
      `Travelers: ${form.travelers}`,
      `Package: ${form.packageName}`,
      `Message: ${form.message || "Please suggest an itinerary."}`
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [form, whatsappNumber]);

  function updateField(field: keyof BookingState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Your request is ready. Opening WhatsApp with your trip details.");
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Full name
        <input
          required
          suppressHydrationWarning
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
        />
      </label>
      <label>
        Email
        <input
          required
          suppressHydrationWarning
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="you@example.com"
        />
      </label>
      <label>
        Country
        <input
          suppressHydrationWarning
          value={form.country}
          onChange={(event) => updateField("country", event.target.value)}
          placeholder="Where are you travelling from?"
        />
      </label>
      <label>
        Travel date
        <input
          required
          suppressHydrationWarning
          type="date"
          value={form.date}
          onChange={(event) => updateField("date", event.target.value)}
        />
      </label>
      <label>
        Travelers
        <input
          min="1"
          suppressHydrationWarning
          type="number"
          value={form.travelers}
          onChange={(event) => updateField("travelers", event.target.value)}
        />
      </label>
      <label>
        Tour style
        <select
          suppressHydrationWarning
          value={form.packageName}
          onChange={(event) => updateField("packageName", event.target.value)}
        >
          <option>Island Explorer</option>
          <option>Wild Sri Lanka</option>
          <option>Honeymoon Coast</option>
          <option>Custom Tour</option>
        </select>
      </label>
      <label className="wide-field">
        Notes
        <textarea
          suppressHydrationWarning
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us your must-see places, hotel level, or budget."
        />
      </label>
      <button className="primary-button wide-field" type="submit" suppressHydrationWarning>
        Send via WhatsApp
      </button>
      {status ? <p className="form-status wide-field">{status}</p> : null}
    </form>
  );
}
