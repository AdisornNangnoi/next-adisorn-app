import SkillBadge from "@/components/SkillBadge";
import {
  SiReact,
  SiFigma,
  SiHtml5,
  SiNextdotjs,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";

export default function SkillsPage() {
  return (
    <section className="space-y-4 mx-auto my-10 max-w-4xl px-5">
      <h2 className="text-4xl font-extrabold ml-10">
        My <span className="text-[#FF5C00]">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-5">
        <SkillBadge icon={<SiReact size={42} />}      label="React"      percent={60}  />
        <SkillBadge icon={<SiFigma size={42} />}      label="Figma"      percent={85} />
        <SkillBadge icon={<SiHtml5 size={42} />}      label="HTML/CSS"   percent={80} />
        <SkillBadge icon={<SiNextdotjs size={42} />}  label="Next.js"    percent={80} />
        <SkillBadge icon={<SiNodedotjs size={42} />}  label="Java Script" percent={60} />
        <SkillBadge icon={<SiGithub size={42} />}     label="GitHub"     percent={90} />
      </div>
    </section>
  );
}
