import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Dr. [Name] Physiotherapy, Kandivali" },
      { name: "description", content: "Book an appointment with Dr. [Name]. Visit our clinic in Kandivali West, Mumbai or request a home visit. Call, WhatsApp, or email us." },
      { property: "og:title", content: "Contact Dr. [Name] Physiotherapy" },
      { property: "og:description", content: "Book a physiotherapy appointment in Kandivali, Mumbai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your appointment"
        subtitle="Tell us a little about your condition. We'll call back within a few hours to confirm a time that works for you."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff", boxShadow: "var(--shadow-card)" }}>
            <h2 className="text-[26px]" style={{ color: "var(--navy)" }}>Appointment request</h2>
            <p className="mt-1 text-[15px]" style={{ color: "var(--mid)" }}>
              All fields except message are required.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <ContactCard icon={<MapPin size={20} />} title="Visit the clinic">
              Shop No. [00], [Building Name]<br />
              Kandivali West, Mumbai 400067<br />
              <span className="text-[14px]" style={{ color: "var(--mid)" }}>Near [Landmark], 5 min from station</span>
            </ContactCard>
            <ContactCard icon={<Phone size={20} />} title="Call us">
              <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
            </ContactCard>
            <ContactCard icon={<MessageCircle size={20} />} title="WhatsApp">
              <a href="https://wa.me/919999999999" className="hover:underline">Prefer WhatsApp? Message us directly →</a>
            </ContactCard>
            <ContactCard icon={<Mail size={20} />} title="Email">
              <a href="mailto:clinic@example.com" className="hover:underline">clinic@example.com</a>
            </ContactCard>
            <ContactCard icon={<Clock size={20} />} title="Hours">
              <table className="text-[15px]">
                <tbody>
                  <tr><td className="pr-4">Monday – Saturday</td><td>9:00 AM – 8:00 PM</td></tr>
                  <tr><td className="pr-4">Sunday</td><td>By appointment</td></tr>
                </tbody>
              </table>
            </ContactCard>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "var(--offwhite)" }} className="pb-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--divider)" }}>
            <iframe
              title="Clinic location — Kandivali West, Mumbai"
              src="https://www.google.com/maps?q=Kandivali+West,+Mumbai&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6 bg-white border" style={{ borderColor: "var(--divider)" }}>
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 place-items-center rounded-lg shrink-0"
          style={{ backgroundColor: "rgba(44,181,160,0.12)", color: "var(--teal)" }}>
          {icon}
        </div>
        <div>
          <h3 className="text-[15px] uppercase tracking-[0.06em] font-semibold" style={{ color: "var(--navy)" }}>{title}</h3>
          <div className="mt-2 text-[16px]" style={{ color: "var(--charcoal)" }}>{children}</div>
        </div>
      </div>
    </div>
  );
}
