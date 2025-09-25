export default function Page() {
  return (
    <section className="space-y-4 mx-auto my-10 max-w-4xl px-5">
      {/* หัวข้อ */}
      <h2 className="text-4xl font-extrabold">
        Education & <span className="text-[#FF5C00]">Experience</span>
      </h2>

      {/* รายการประวัติ */}
      <div className="space-y-6 text-zinc-300 ml-10">
        {/* ปัจจุบัน */}
        <div>
          <p className="text-[#FF5C00] font-medium">2022 - Present</p>
          <p className="mt-1 text-lg font-semibold text-white">
            UI/UX Designer
          </p>
          <p className="text-sm text-[#7D7373]">Freelance</p>
          <p className="mt-1 text-lg font-semibold text-white">
            Fullstack Web Developer
          </p>
          <p className="text-sm text-[#7D7373]">Freelance</p>
        </div>

        {/* ปริญญาตรี */}
        <div>
          <p className="text-[#7D7373] font-medium">2022 - 2025</p>
          <p className="mt-1 text-lg font-semibold text-white">
            Bachelor Degree in Technology Digital and Innovation
          </p>
          <p className="text-sm text-[#7D7373]">Southeast Asia University</p>
        </div>

        {/* มัธยม */}
        <div>
          <p className="text-[#7D7373] font-medium">2016 - 2021</p>
          <p className="mt-1 text-lg font-semibold text-white">High school</p>
          <p className="text-sm text-[#7D7373]">Tawee­thapisek School</p>
        </div>
      </div>
    </section>
  );
}
