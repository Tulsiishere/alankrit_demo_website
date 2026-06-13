import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section style={{ backgroundColor: "var(--navy)", color: "#fff" }}>
      <div className="container-page py-16 md:py-24">
        {eyebrow && (
          <p className="eyebrow" style={{ color: "var(--teal)" }}>{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display font-extrabold text-white text-[40px] md:text-[56px] leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-[18px]" style={{ color: "#B8C5D6" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
