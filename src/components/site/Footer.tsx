import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--navy-dark)", color: "#E4EAF1" }}>
      <div className="container-page py-16 grid gap-12 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span
              className="grid h-9 w-9 place-items-center rounded-md font-display font-extrabold"
              style={{ backgroundColor: "var(--teal)", color: "#fff" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
              </svg>
            </span>
              <span className="font-display font-bold text-[18px] text-white">Dr. Neelu Jain Physio</span>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "#B8C5D6" }}>
            36 years of trusted physiotherapy care in Kandivali, Mumbai. Personalised treatment for back pain, sciatica, sports injuries, and rehabilitation.
          </p>
          <ul className="mt-6 space-y-3 text-[14px]">
            <li className="flex items-start gap-3">
              <MapPin size={16} style={{ color: "var(--teal)" }} className="mt-1 shrink-0" />
              <span>Ekta Nagar, 27/273 Sanskruti, Society,<br />New Link Rd, opp. B P PETROLPUMP,<br />Mahavir Nagar, Mumbai, Maharashtra 400067</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} style={{ color: "var(--teal)" }} />
              <a href="tel:+919869147774" className="hover:text-white">+91 9869147774</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} style={{ color: "var(--teal)" }} />
              <a href="mailto:clinic@example.com" className="hover:text-white">clinic@example.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} style={{ color: "var(--teal)" }} className="mt-1 shrink-0" />
              <span>Mon–Sat: 9:00 AM – 8:00 PM<br />Sunday: By appointment</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-[15px] uppercase tracking-[0.06em]">
            Quick Links
          </h4>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-[14px]">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/conditions", "Conditions"], ["/home-visits", "Home Visits"],
              ["/testimonials", "Testimonials"], ["/gallery", "Gallery"],
              ["/blog", "Blog"], ["/faq", "FAQ"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-[var(--teal)] transition-colors" style={{ color: "#B8C5D6" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-[15px] uppercase tracking-[0.06em]">
            Find Us
          </h4>
          <div className="mt-5 overflow-hidden rounded-lg border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <iframe
              title="Clinic location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.569871304719!2d72.8368059!3d19.2139803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6cddf1006ab%3A0x2e73d51ea783d927!2sDr%20Neelu%20Jain%E2%80%99s%20Alankrit%20Physiotherapy%20(SINCE%201990))!5e0!3m2!1sen!2sin!4v1781286380482!5m2!1sen!2sin"
              width="100%"
              height="200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container-page py-5 flex flex-wrap items-center justify-between gap-3 text-[13px]" style={{ color: "#8A9AAD" }}>
          <p>© {new Date().getFullYear()} Dr. Neelu Jain Physiotherapy Clinic. All rights reserved.</p>
          <p>Mon–Sat 9:00 – 20:00 · WhatsApp +91 9869147774</p>
        </div>
      </div>
    </footer>
  );
}