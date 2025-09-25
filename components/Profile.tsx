import Image from "next/image";
import Avatar from "../public/images/avatar.png";

export default function Profile() {
  const socials = [
    { name: "Facebook", src: "/images/social/facebook.png", href: "#" },
    { name: "Twitter", src: "/images/social/twitter.png", href: "#" },
    { name: "Instagram", src: "/images/social/instagram.png", href: "#" },
    { name: "Linkedin", src: "/images/social/linkedin.png", href: "#" },
    { name: "Google", src: "/images/social/google.png", href: "#" },
  ];

  return (
    <div className="w-[280px] rounded-3xl bg-[#111111] p-4 shadow-xl ring-1 ring-zinc-800">
      <div className="text-[20px] font-semibold leading-none ml-2">
        <span className="text-[#FF5C00]">A</span>disorn
      </div>
      {/* รูปโปรไฟล์ */}
      <div className="mt-3 rounded-2xl bg-white p-2">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={Avatar}
            alt="Profile"
            width={600}
            height={600}
            className="w-full h-[220px] object-cover"
            priority
          />
        </div>
      </div>
      {/* ชื่อและตำแหน่ง */}
      <div className="mt-3 text-[18px] font-semibold tracking-wide text-zinc-100 text-center">
        STU ID: 6552410001
      </div>
      <div className="text-[14px] text-zinc-400 text-center">
        Fullstack Web Developer
      </div>

      <div className="mt-7 flex justify-center gap-4">
        {socials.map(({ name, src, href }) => (
          <a key={name} href={href} aria-label={name} className="inline-block">
            <span
              className="
          block h-7 w-7
          bg-zinc-300 transition-colors duration-300
          hover:bg-[#FF5C00]
        "
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
              title={name}
            />
          </a>
        ))}
      </div>
      {/* ปุ่ม HIRE ME */}
      <button className="mt-8 mb-3 w-full rounded-2xl bg-[#FF5C00] py-2.5 text-m font-semibold tracking-wider text-black hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/60">
        HIRE ME !
      </button>
    </div>
  );
}
