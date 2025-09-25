import React, { HTMLAttributes, ReactElement, cloneElement } from "react";

const cn = (...cls: Array<string | undefined>) => cls.filter(Boolean).join(" ");

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactElement<{ className?: string }>;
  label: string;
  percent: number;
}

export default function SkillBadge({
  icon,
  label,
  percent,
  className,
  ...rest
}: Props) {
  const pct = Math.max(0, Math.min(100, percent));

  // เพิ่มคลาสให้ไอคอน (ขาวพื้นฐาน, hover ฟ้า) — ขนาดเทียบ h-15/w-15 = 3.75rem
  const iconEl = cloneElement(icon, {
    className: cn(
      "h-[3.75rem] w-[3.75rem] text-white transition-colors duration-300",
      "group-hover:text-sky-400",
      icon.props.className
    ),
  });

  return (
    <div
      className={cn("group flex flex-col items-center", className)}
      {...rest}
    >
      {/* แคปซูลวงรี (คง layout เดิมทั้งหมด) */}
      <div
        className={cn(
          "grid h-40 w-30 place-items-center rounded-full",
          "border bg-[#111111] transition-colors duration-300"
        )}
      >
        <div className="flex flex-col items-center gap-3">
          {/* วงไอคอน */}

          {iconEl}

          {/* เปอร์เซ็นต์ */}
          <div className="text-sm font-medium text-[#FF5C00]">{pct}%</div>
        </div>
      </div>

      {/* ชื่อสกิล */}
      <div className="mt-3 text-sm text-zinc-200 text-center">{label}</div>
    </div>
  );
}
