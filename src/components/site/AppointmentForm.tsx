import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Variant = "light" | "dark";

export function AppointmentForm({ variant = "light" }: { variant?: Variant }) {
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        className="rounded-lg p-8 text-center"
        style={{ backgroundColor: dark ? "rgba(255,255,255,0.08)" : "#fff", color: dark ? "#fff" : "var(--charcoal)" }}
      >
        <CheckCircle2 size={40} style={{ color: "var(--teal)" }} className="mx-auto" />
        <h3 className="mt-4 text-[22px]" style={{ color: dark ? "#fff" : "var(--navy)" }}>Thank you</h3>
        <p className="mt-2 text-[15px]" style={{ color: dark ? "#B8C5D6" : "var(--mid)" }}>
          We'll call you within a few hours to confirm your appointment.
        </p>
      </div>
    );
  }

  const labelStyle = { color: dark ? "#E4EAF1" : "var(--charcoal)" };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-[13px] font-medium uppercase tracking-[0.06em]" style={labelStyle}>
          Full Name
        </label>
        <input id="name" name="name" required className="input-field" placeholder="Your full name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-[13px] font-medium uppercase tracking-[0.06em]" style={labelStyle}>
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" required className="input-field" placeholder="+91 99999 99999" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="condition" className="text-[13px] font-medium uppercase tracking-[0.06em]" style={labelStyle}>
          Condition / Complaint
        </label>
        <input id="condition" name="condition" required className="input-field" placeholder="e.g. Lower back pain" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="date" className="text-[13px] font-medium uppercase tracking-[0.06em]" style={labelStyle}>
          Preferred Date
        </label>
        <input id="date" name="date" type="date" className="input-field" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="msg" className="text-[13px] font-medium uppercase tracking-[0.06em]" style={labelStyle}>
          Message (optional)
        </label>
        <textarea id="msg" name="msg" rows={3} className="input-field" placeholder="Anything else we should know" />
      </div>
      <button type="submit" className="btn btn-primary w-full">Request Appointment</button>
      <p className="text-[13px]" style={{ color: dark ? "#8A9AAD" : "var(--mid)" }}>
        Prototype form — no data is sent. Production build wires to Lovable Cloud or email.
      </p>
    </form>
  );
}
