"use client";

import { FormEvent, useMemo, useState } from "react";
import { airportTransfers, business, tourPackages } from "../data/siteContent";

type BookingState = {
  service: string;
  name: string;
  whatsapp: string;
  email: string;
  country: string;
  date: string;
  flightNumber: string;
  pickup: string;
  drop: string;
  passengers: string;
  luggage: string;
  vehicle: string;
  packageName: string;
  message: string;
};

const initialState: BookingState = {
  service: "Airport Pickup & Drop",
  name: "",
  whatsapp: "",
  email: "",
  country: "",
  date: "",
  flightNumber: "",
  pickup: "Bandaranaike International Airport",
  drop: "Negombo",
  passengers: "2",
  luggage: "2",
  vehicle: "Car with driver",
  packageName: "Custom Sri Lanka Round Tour",
  message: ""
};

export function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("");

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || business.whatsappNumber;

  const whatsappLink = useMemo(() => {
    const text = [
      `Hello ${business.name}, I want to book or request a price.`,
      `Service: ${form.service}`,
      `Name: ${form.name}`,
      `WhatsApp number: ${form.whatsapp}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Arrival/departure date: ${form.date}`,
      `Flight number: ${form.flightNumber || "Not provided"}`,
      `Pickup location: ${form.pickup}`,
      `Drop location: ${form.drop}`,
      `Passengers: ${form.passengers}`,
      `Luggage count: ${form.luggage}`,
      `Vehicle preference: ${form.vehicle}`,
      `Tour/package: ${form.packageName}`,
      `Notes: ${form.message || "Please send availability and price."}`
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [form, whatsappNumber]);

  function updateField(field: keyof BookingState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Your request is ready. Opening WhatsApp with your details.");
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>
        Service
        <select
          suppressHydrationWarning
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
        >
          <option>Airport Pickup & Drop</option>
          <option>Tour Package</option>
          <option>Vehicle Hire</option>
          <option>Room / Stay</option>
          <option>Custom Travel Planning</option>
        </select>
      </label>
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
        WhatsApp number
        <input
          required
          suppressHydrationWarning
          value={form.whatsapp}
          onChange={(event) => updateField("whatsapp", event.target.value)}
          placeholder="+94..."
        />
      </label>
      <label>
        Email
        <input
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
        Arrival/departure date
        <input
          required
          suppressHydrationWarning
          type="date"
          value={form.date}
          onChange={(event) => updateField("date", event.target.value)}
        />
      </label>
      <label>
        Flight number
        <input
          suppressHydrationWarning
          value={form.flightNumber}
          onChange={(event) => updateField("flightNumber", event.target.value)}
          placeholder="UL / QR / EK..."
        />
      </label>
      <label>
        Pickup location
        <input
          required
          suppressHydrationWarning
          value={form.pickup}
          onChange={(event) => updateField("pickup", event.target.value)}
          placeholder="Airport, hotel, city..."
          list="transfer-routes"
        />
        <datalist id="transfer-routes">
          {airportTransfers.map((route) => (
            <option value={route} key={route} />
          ))}
        </datalist>
      </label>
      <label>
        Drop location
        <input
          required
          suppressHydrationWarning
          value={form.drop}
          onChange={(event) => updateField("drop", event.target.value)}
          placeholder="Negombo, Colombo, Kandy..."
        />
      </label>
      <label>
        Number of passengers
        <input
          min="1"
          required
          suppressHydrationWarning
          type="number"
          value={form.passengers}
          onChange={(event) => updateField("passengers", event.target.value)}
        />
      </label>
      <label>
        Luggage count
        <input
          min="0"
          suppressHydrationWarning
          type="number"
          value={form.luggage}
          onChange={(event) => updateField("luggage", event.target.value)}
        />
      </label>
      <label>
        Vehicle preference
        <select
          suppressHydrationWarning
          value={form.vehicle}
          onChange={(event) => updateField("vehicle", event.target.value)}
        >
          <option>Car with driver</option>
          <option>Van with driver</option>
          <option>Luxury vehicle</option>
          <option>Mini coach / group vehicle</option>
          <option>Please recommend</option>
        </select>
      </label>
      <label className="wide-field">
        Tour package or room request
        <select
          suppressHydrationWarning
          value={form.packageName}
          onChange={(event) => updateField("packageName", event.target.value)}
        >
          {tourPackages.map((tour) => (
            <option key={tour.title}>{tour.title}</option>
          ))}
          <option>Tourist Double Room</option>
          <option>Family Tourist Room</option>
          <option>Transit Stay</option>
        </select>
      </label>
      <label className="wide-field">
        Notes
        <textarea
          suppressHydrationWarning
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell us arrival time, hotel name, room nights, must-see places or budget."
        />
      </label>
      <button className="primary-button wide-field" type="submit" suppressHydrationWarning>
        Send via WhatsApp
      </button>
      {status ? <p className="form-status wide-field">{status}</p> : null}
    </form>
  );
}
