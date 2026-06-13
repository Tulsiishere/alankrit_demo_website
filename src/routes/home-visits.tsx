import { createFileRoute, Link } from "@tanstack/react-router";
import homeVisitImg from "@/assets/home-visit.jpg";
import { PhoneCall, ClipboardCheck, HeartPulse, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/home-visits")({
  head: () => ({
    meta: [
      { title: "Home Visit Physiotherapy — Kandivali, Borivali, Malad | Dr. [Name]" },
      { name: "description", content: "Home physiotherapy in Kandivali, Borivali, Malad, and Goregaon. Post-surgery, elderly, and neurological care delivered to your doorstep." },
      { property: "og:title", content: "Home Visit Physiotherapy in Mumbai" },
      { property: "og:description", content: "Full physiotherapy care at home — for post-surgery, elderly, and bedridden patients." },
      { property: "og:url", content: "/home-visits" },
    ],
    links: [{ rel: "canonical", href: "/home-visits" }],
  }),
  component: HomeVisits,
});

function HomeVisits() {
  return (
    <>
      <section style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-2 items-center">
          <div className="text-white">
            <p className="eyebrow" style={{ color: "var(--teal)" }}>Home Visit Service</p>
            <h1 className="mt-3 text-[44px] md:text-[60px] text-white leading-[1.05]">
              Physiotherapy at your doorstep
            </h1>
            <p className="mt-5 text-[18px]" style={{ color: "#B8C5D6" }}>
              The same evidence-based care, delivered in the comfort of your home — for post-surgery recovery, elderly patients, and those with mobility challenges.
            </p>
            <Link to="/contact" className="btn btn-primary mt-8 inline-flex">
              Request a Home Visit <ArrowRight size={16} />
            </Link>
          </div>
          <img
            src={homeVisitImg}
            alt="Physiotherapist visiting an elderly patient at home"
            width={1280} height={854}
            className="rounded-2xl object-cover w-full h-auto"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Who it's for</p>
            <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>Designed for patients who need care at home</h2>
            <ul className="mt-6 space-y-3 text-[17px]" style={{ color: "var(--charcoal)" }}>
              <li>• Post-surgery recovery (knee, hip, spine, cardiac)</li>
              <li>• Elderly patients with mobility challenges</li>
              <li>• Stroke and neurological rehabilitation</li>
              <li>• Bedridden patients</li>
              <li>• Anyone preferring the comfort of their own home</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Service areas</p>
            <h2 className="mt-3 text-[32px]" style={{ color: "var(--navy)" }}>Across western Mumbai</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Kandivali", "Borivali", "Malad", "Goregaon", "Dahisar", "Charkop"].map((a) => (
                <span key={a} className="rounded-full border bg-white px-4 py-1.5 text-[14px]" style={{ borderColor: "var(--divider)", color: "var(--navy)" }}>
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[15px]" style={{ color: "var(--mid)" }}>
              Areas outside this list — please call to check availability.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#fff" }}>
        <div className="container-page">
          <p className="eyebrow text-center">How it works</p>
          <h2 className="mt-3 text-[32px] text-center" style={{ color: "var(--navy)" }}>Three simple steps</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {([
              { Icon: PhoneCall, t: "01 — Call", d: "Tell us about the patient, condition, and preferred timing." },
              { Icon: ClipboardCheck, t: "02 — Assessment", d: "Initial visit covers full history, examination, and a clear plan." },
              { Icon: HeartPulse, t: "03 — Treatment", d: "Regular sessions at home with family training and progress reviews." },
            ] as const).map(({ Icon, t, d }) => (
              <div key={t} className="card-medical">
                <div className="grid h-12 w-12 place-items-center rounded-lg" style={{ backgroundColor: "rgba(44,181,160,0.12)", color: "var(--teal)" }}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-[20px]" style={{ color: "var(--navy)" }}>{t}</h3>
                <p className="mt-2 text-[15px]" style={{ color: "var(--mid)" }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
