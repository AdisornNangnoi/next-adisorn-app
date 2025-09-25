import { Code2, Globe, PenTool } from "lucide-react";

export default function Page() {
  return (
    <section className="space-y-4 mx-auto my-10 max-w-4xl px-5">
      {/* หัวข้อ */}
      <h2 className="text-4xl font-extrabold">
        My <span className="text-[#FF5C00]">Specializations</span>
      </h2>

      {/* กล่องรายละเอียด */}
      <div className="space-y-5">
        {/* Front-end Developer */}
        <div className="group flex items-start justify-between rounded-2xl border border-[#FF5C00]/60 bg-[#111111] p-5 hover:border-[#FF5C00] transition-colors">
          <div>
            <h3 className="text-lg font-bold text-white">Front end-developer</h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-[600px]">
              Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.
            </p>
          </div>
          <Code2 className="h-6 w-6 text-[#FF5C00]/70 transition-colors duration-300 group-hover:text-[#FF5C00]" />
        </div>

        {/* UI/UX Designer */}
        <div className="group flex items-start justify-between rounded-2xl border border-[#FF5C00]/60 bg-[#111111] p-5 hover:border-[#FF5C00] transition-colors">
          <div>
            <h3 className="text-lg font-bold text-white">UI/UX Designer</h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-[600px]">
              UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.
            </p>
          </div>
          <Globe className="h-6 w-6 text-[#FF5C00]/70 transition-colors duration-300 group-hover:text-[#FF5C00]" />
        </div>

        {/* Graphic Designer */}
        <div className="group flex items-start justify-between rounded-2xl border border-[#FF5C00]/60 bg-[#111111] p-5 hover:border-[#FF5C00] transition-colors">
          <div>
            <h3 className="text-lg font-bold text-white">Graphic designer</h3>
            <p className="mt-2 text-sm text-zinc-400 max-w-[600px]">
              As a graphic designer, I transform ideas into visually striking and impactful designs.
            </p>
          </div>
          <PenTool className="h-6 w-6 text-[#FF5C00]/70 transition-colors duration-300 group-hover:text-[#FF5C00]" />
        </div>
      </div>
    </section>
  );
}
