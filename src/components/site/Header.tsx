import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/conditions", label: "Conditions" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 transition-all"
      style={{
        backgroundColor: scrolled ? "#FFFFFF" : "rgba(247,249,252,0.85)",
        backdropFilter: "saturate(180%) blur(10px)",
        boxShadow: scrolled ? "var(--shadow-header)" : "none",
        borderBottom: scrolled ? "1px solid var(--divider)" : "1px solid transparent",
      }}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Home">
          <span
            className="grid h-9 w-9 place-items-center rounded-md font-display font-extrabold text-white"
            style={{ backgroundColor: "var(--navy)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
            </svg>
          </span>
          <span className="font-display font-bold text-[18px]" style={{ color: "var(--navy)" }}>
            Dr. [Name] <span className="font-medium" style={{ color: "var(--mid)" }}>Physio</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-body text-[15px] font-medium transition-colors hover:text-[var(--medblue)]"
              style={{ color: "var(--charcoal)" }}
              activeProps={{ style: { color: "var(--medblue)" } }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919869147774"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full"
            style={{ backgroundColor: "var(--offwhite)", color: "var(--navy)" }}
            aria-label="Call clinic"
          >
            <Phone size={18} />
          </a>
          <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
            Book Appointment
          </Link>
          <button
            type="button"
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-white" style={{ borderColor: "var(--divider)" }}>
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-[16px] font-medium border-b last:border-0"
                style={{ borderColor: "var(--divider)", color: "var(--charcoal)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
