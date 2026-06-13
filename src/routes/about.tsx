import { createFileRoute, Link } from "@tanstack/react-router";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Neelu Jain — Senior Physiotherapist, Kandivali Mumbai" },
      { name: "description", content: "Meet Dr. Neelu Jain, a senior physiotherapist with 36 years of experience treating patients across Mumbai. BPT, MPT, Certified Manual Therapist." },
      { property: "og:title", content: "About Dr. Neelu Jain — 36 Years of Physiotherapy Practice" },
      { property: "og:description", content: "A physiotherapist Mumbai has trusted for three decades. Personalised, evidence-based care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Dr. Neelu Jain",
        jobTitle: "Physiotherapist",
        worksFor: { "@type": "MedicalBusiness", name: "Dr. Neelu Jain Physiotherapy Clinic" },
        alumniOf: "BPT, MPT (Orthopaedics)",
      }),
    }],
  }),
  component: About,
});

const TIMELINE = [
  ["1988", "Graduated BPT and began clinical practice in Mumbai."],
  ["1994", "Established private clinic in Kandivali West."],
  ["2001", "Completed MPT in Orthopaedics."],
  ["2008", "Certified in advanced manual therapy techniques."],
  ["2015", "Expanded to dedicated home visit physiotherapy service."],
  ["Today", "5,000+ patients treated. Continuing CPD in evidence-based rehabilitation."],
];

const EXPERTISE = [
  "Spinal Rehabilitation", "Sports Injury Recovery", "Post-Surgical Rehab",
  "Neurological Rehabilitation", "Pediatric Physiotherapy", "Geriatric Care",
  "Manual Therapy", "Ergonomic Assessment", "Home Visit Care",
];

function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_1.2fr] items-center">
          <img
            src={doctorPortrait}
            alt="Dr. Neelu Jain portrait"
            width={1024}
            height={1280}
            className="rounded-2xl object-cover w-full max-w-md"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          />
          <div className="text-white">
            <p className="eyebrow" style={{ color: "var(--teal)" }}>About</p>
            <h1 className="mt-3 text-[44px] md:text-[60px] text-white">Dr. Neelu Jain</h1>
            <p className="mt-2 text-[18px]" style={{ color: "#B8C5D6" }}>
              BPT · MPT (Orthopaedics) · Certified Manual Therapist
            </p>
            <p className="mt-6 text-[18px] leading-relaxed" style={{ color: "#E4EAF1" }}>
              A senior physiotherapist with 36 years of full-time clinical practice in Mumbai — and a quietly built reputation for getting people out of pain and back to the lives they want.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>How we practice</h2>
          </div>
          <div className="space-y-5 text-[17px]" style={{ color: "var(--charcoal)" }}>
            <p>Good physiotherapy is unhurried. It starts with listening — to your history, your goals, the things that hurt and the things you can no longer do.</p>
            <p>Every plan is built around the patient in front of me, not around a protocol. Some patients need three sessions; some need thirty. The honest answer matters more than the convenient one.</p>
            <p>And recovery is a partnership. I will guide you, but the work happens between visits — in the habits you build, the exercises you do, and the small daily choices that protect your body.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section" style={{ backgroundColor: "#fff" }}>
        <div className="container-page">
          <p className="eyebrow">Career Timeline</p>
          <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>Thirty-six years, one practice</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIMELINE.map(([year, text]) => (
              <li key={year} className="rounded-xl p-6 border" style={{ borderColor: "var(--divider)" }}>
                <div className="font-display font-extrabold text-[36px]" style={{ color: "var(--medblue)" }}>{year}</div>
                <p className="mt-2 text-[15px]" style={{ color: "var(--charcoal)" }}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow">Areas of Expertise</p>
          <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>What we treat</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {EXPERTISE.map((tag) => (
              <span key={tag} className="rounded-full bg-white border px-4 py-2 text-[14px] font-medium"
                style={{ borderColor: "var(--divider)", color: "var(--navy)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="section" style={{ backgroundColor: "#fff" }}>
        <div className="container-page">
          <p className="eyebrow">Your First Visit</p>
          <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>What patients can expect</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Consultation", "Detailed history, listening to your concerns, and understanding your goals."],
              ["02", "Assessment", "Hands-on examination, movement testing, and identification of the root cause."],
              ["03", "Treatment Plan", "A personalised programme with clear milestones and an honest timeline."],
            ].map(([n, t, d]) => (
              <div key={n} className="card-medical">
                <div className="font-display font-extrabold text-[40px]" style={{ color: "var(--teal)" }}>{n}</div>
                <h3 className="mt-3 text-[20px]" style={{ color: "var(--navy)" }}>{t}</h3>
                <p className="mt-2 text-[15px]" style={{ color: "var(--mid)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: "var(--offwhite)" }}>
        <div className="container-page text-center">
          <h2 className="text-[32px]" style={{ color: "var(--navy)" }}>Ready to start your recovery?</h2>
          <Link to="/contact" className="btn btn-primary mt-6 inline-flex">
            Book a Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
