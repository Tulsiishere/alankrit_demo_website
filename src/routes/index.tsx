import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartPulse, Home as HomeIcon, Sparkles, Star, Stethoscope } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import treatmentImg from "@/assets/treatment.jpg";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { SERVICES, TESTIMONIALS, BLOG } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Neelu Jain Physiotherapy — Kandivali's Most Experienced Physiotherapist" },
      { name: "description", content: "36 years of trusted physiotherapy care in Kandivali, Mumbai. Personalised treatment for back pain, sciatica, sports injuries, and rehabilitation." },
      { property: "og:title", content: "Dr. Neelu Jain Physiotherapy — 36 Years of Trusted Care" },
      { property: "og:description", content: "Senior physiotherapist in Kandivali, Mumbai. Personalised, evidence-based care since 1990." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative" style={{ backgroundColor: "var(--offwhite)" }}>
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow">Kandivali's Most Experienced Physiotherapist</p>
            <h1 className="mt-4 font-display font-extrabold leading-[0.95] tracking-tight">
              <span className="block text-[88px] md:text-[140px]" style={{ color: "var(--medblue)", lineHeight: 0.9 }}>
                36
              </span>
              <span className="mt-1 block text-[28px] md:text-[38px] font-bold" style={{ color: "var(--navy)" }}>
                Years of Trusted<br />Physiotherapy Care
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[17px]" style={{ color: "var(--mid)" }}>
              Dr. Neelu Jain has helped thousands of patients across Mumbai recover, move better, and live without pain — since 1990.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">
                Book Appointment <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-ghost">
                Meet Dr. Neelu Jain
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl" style={{ backgroundColor: "rgba(44,181,160,0.12)" }} aria-hidden />
            <img
              src={doctorPortrait}
              alt="Dr. Neelu Jain, senior physiotherapist with 36 years of experience"
              width={1024}
              height={1280}
              className="relative rounded-2xl object-cover w-full h-auto"
              style={{ boxShadow: "0 20px 60px rgba(22,58,95,0.18)" }}
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-page py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {[
            ["36+", "Years Experience"],
            ["5,000+", "Patients Treated"],
            ["15+", "Conditions Treated"],
            ["1990", "Established"],
          ].map(([n, l], i) => (
            <div key={l} className="text-center md:border-r md:last:border-0" style={{ borderColor: i < 3 ? "rgba(44,181,160,0.4)" : "transparent" }}>
              <div className="font-display font-extrabold text-[36px] md:text-[44px]" style={{ color: "#fff" }}>{n}</div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.06em]" style={{ color: "#B8C5D6" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-[36px] md:text-[40px]" style={{ color: "var(--navy)" }}>What We Treat</h2>
            <p className="mt-4" style={{ color: "var(--mid)" }}>
              Evidence-based physiotherapy for a wide range of musculoskeletal and neurological conditions.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/conditions" hash={s.slug} className="card-medical block group">
                <div
                  className="grid h-12 w-12 place-items-center rounded-lg"
                  style={{ backgroundColor: "rgba(44,181,160,0.12)", color: "var(--teal)" }}
                  aria-hidden
                >
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="mt-5 text-[20px]" style={{ color: "var(--navy)" }}>{s.title}</h3>
                <p className="mt-2 text-[15px]" style={{ color: "var(--mid)" }}>{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold" style={{ color: "var(--medblue)" }}>
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="section" style={{ backgroundColor: "#fff" }}>
        <div className="container-page grid gap-12 lg:grid-cols-2 items-center">
          <img
            src={treatmentImg}
            alt="Hands-on physiotherapy treatment in clinic"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl w-full h-auto object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
          <div>
            <p className="eyebrow">About Dr. Neelu Jain</p>
            <h2 className="mt-3 text-[32px] md:text-[40px]" style={{ color: "var(--navy)" }}>
              A Physiotherapist Mumbai Has Trusted for Three Decades
            </h2>
            <p className="mt-5 text-[17px]" style={{ color: "var(--charcoal)" }}>
              Since 1990, Dr. Neelu Jain has built a quiet reputation in Kandivali for one reason: results that last. Every patient receives a fully personalised plan — no shortcuts, no rushed sessions.
            </p>
            <p className="mt-3 text-[17px]" style={{ color: "var(--mid)" }}>
              Trained in both classical and modern techniques, the practice combines manual therapy with the latest evidence-based rehabilitation science.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["BPT", "MPT (Orthopaedics)", "Certified Manual Therapist"].map((c) => (
                <span key={c} className="rounded-full border px-4 py-1.5 text-[13px] font-semibold uppercase tracking-[0.06em]"
                  style={{ borderColor: "var(--divider)", color: "var(--navy)" }}>
                  {c}
                </span>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-1 font-semibold" style={{ color: "var(--medblue)" }}>
              Read full profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Why patients choose us</p>
            <h2 className="mt-3 text-[36px]" style={{ color: "var(--navy)" }}>Care that earns its trust</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: "36 Years of Experience", desc: "Decades of clinical practice across thousands of cases." },
              { icon: Stethoscope, title: "Personalised Plans", desc: "Every treatment is built around your body, condition, and goals." },
              { icon: HomeIcon, title: "Home Visits Available", desc: "Full physiotherapy care delivered to your doorstep." },
              { icon: Sparkles, title: "Modern Techniques", desc: "Evidence-based methods combined with proven manual therapy." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-7" style={{ backgroundColor: "#fff", border: "1px solid var(--divider)" }}>
                <div className="grid h-12 w-12 place-items-center rounded-lg" style={{ backgroundColor: "rgba(44,181,160,0.12)", color: "var(--teal)" }}>
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-[18px]" style={{ color: "var(--navy)" }}>{title}</h3>
                <p className="mt-2 text-[15px]" style={{ color: "var(--mid)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ backgroundColor: "var(--offwhite)" }}>
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Patient Stories</p>
            <h2 className="mt-3 text-[36px]" style={{ color: "var(--navy)" }}>What Patients Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <figure key={t.name} className="card-medical flex flex-col">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--teal)" stroke="var(--teal)" />
                  ))}
                </div>
                <blockquote className="mt-4 italic text-[16px] leading-relaxed" style={{ color: "var(--charcoal)" }}>
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                  <div className="font-semibold" style={{ color: "var(--navy)" }}>{t.name}</div>
                  <div className="text-[13px]" style={{ color: "var(--mid)" }}>{t.condition}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-1 font-semibold" style={{ color: "var(--medblue)" }}>
              Read all testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="section" style={{ backgroundColor: "var(--navy)" }}>
        <div className="container-page grid gap-12 lg:grid-cols-2 items-start">
          <div className="text-white">
            <p className="eyebrow" style={{ color: "var(--teal)" }}>Book a visit</p>
            <h2 className="mt-3 text-[36px] md:text-[40px] text-white">Book an Appointment</h2>
            <p className="mt-5 text-[17px]" style={{ color: "#B8C5D6" }}>
              Fill in your details and we'll call you back to confirm a time. For urgent enquiries, message us on WhatsApp.
            </p>
            <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <h3 className="text-white text-[18px]">Clinic Information</h3>
              <ul className="mt-4 space-y-3 text-[15px]" style={{ color: "#E4EAF1" }}>
                <li>📍 Shop No. [00], Kandivali West, Mumbai 400067</li>
                <li>📞 <a href="tel:+919960814087" className="hover:text-white">+91 99608 14087</a></li>
                <li>💬 <a href="https://wa.me/919960814087" className="hover:text-white">WhatsApp us directly</a></li>
                <li>🕒 Mon–Sat: 9:00 AM – 8:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#fff" }}>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section" style={{ backgroundColor: "#fff" }}>
        <div className="container-page">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">From the Journal</p>
              <h2 className="mt-3 text-[36px]" style={{ color: "var(--navy)" }}>Recent articles</h2>
            </div>
            <Link to="/blog" className="font-semibold inline-flex items-center gap-1" style={{ color: "var(--medblue)" }}>
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOG.slice(0, 3).map((post) => (
              <article key={post.slug} className="card-medical">
                <span className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--teal)" }}>
                  {post.category}
                </span>
                <h3 className="mt-3 text-[18px] leading-snug" style={{ color: "var(--navy)" }}>{post.title}</h3>
                <p className="mt-3 text-[15px]" style={{ color: "var(--mid)" }}>{post.excerpt}</p>
                <Link to="/blog" className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold" style={{ color: "var(--medblue)" }}>
                  Read more <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const common = { size: 22 } as const;
  switch (name) {
    case "spine": return <HeartPulse {...common} />;
    case "neck": return <Stethoscope {...common} />;
    case "activity": return <Sparkles {...common} />;
    case "zap": return <HeartPulse {...common} />;
    case "heart-pulse": return <HeartPulse {...common} />;
    case "bone": return <ShieldCheck {...common} />;
    case "brain": return <Sparkles {...common} />;
    case "baby": return <HeartPulse {...common} />;
    default: return <HeartPulse {...common} />;
  }
}
