"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", src: "/images/icon/home.png", label: "Home" },
  { href: "/about", src: "/images/icon/about.png", label: "About" },
  {
    href: "/experience",
    src: "/images/icon/experience.png",
    label: "Experience",
  },
  { href: "/specialize", src: "/images/icon/spec.png", label: "Spec" },
  { href: "/projects", src: "/images/icon/projects.png", label: "Projects" },
  { href: "/skills", src: "/images/icon/skills.png", label: "Skills" },
  { href: "/contact", src: "/images/icon/contactme.png", label: "Contact" },
];

export default function SideNav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav
      className="
        flex w-[72px] flex-col items-center gap-8
        rounded-4xl bg-[#111111] py-12
        ring-1 ring-zinc-800 
      "
    >
      {items.map(({ href, src, label }) => {
        const active = isActive(href);
        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className="inline-block"
          >
            <span
              className={[
                "block h-7 w-7 transition-colors duration-300",
                active ? "bg-[#FF5C00]" : "bg-zinc-400 hover:bg-[#FF5C00]/30",
              ].join(" ")}
              style={{
                WebkitMaskImage: `url(${src})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "contain",
                maskImage: `url(${src})`,
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "contain",
              }}
            />
          </Link>
        );
      })}
    </nav>
  );
}
