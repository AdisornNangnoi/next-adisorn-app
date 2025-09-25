export default function Page() {
  return (
    <section className="space-y-4 mx-auto my-10 max-w-4xl px-5">
      {/* Head */}
      <div>
        <h2 className="text-4xl font-extrabold">
          Contact <span className="text-[#FF5C00]">Me</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-400">Let&apos;s get in touch!</p>
      </div>

      {/* Form */}
      <form className="max-w-[720px] space-y-6">
        {/* Row 1: Email / Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="placeholder-[#FF5C00] w-full bg-transparent text-zinc-100 outline-none border-b border-zinc-700/60 focus:border-[#FF5C00] transition h-10"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone"
              className="placeholder-[#FF5C00] w-full bg-transparent text-zinc-100 outline-none border-b border-zinc-700/60 focus:border-[#FF5C00] transition h-10"
            />
          </div>
        </div>

        {/* Row 2: Name / Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <input
              placeholder="Name"
              className="placeholder-[#FF5C00] w-full bg-transparent text-zinc-100 outline-none border-b border-zinc-700/60 focus:border-[#FF5C00] transition h-10"
            />
          </div>
          <div>
            <input
              placeholder="Address"
              className="placeholder-[#FF5C00] w-full bg-transparent text-zinc-100 outline-none border-b border-zinc-700/60 focus:border-[#FF5C00] transition h-10"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <textarea
              rows={4}
              placeholder="Content"
              className="placeholder-[#FF5C00] w-full h-30 resize-none bg-transparent text-zinc-100 outline-none border-b border-zinc-700/60 focus:border-[#FF5C00] transition"
            />
          </div>
        </div>

        {/* Newsletter */}
        <label className="flex items-start gap-2 text-xs text-zinc-400 select-none">
          <input
            type="checkbox"
            className="mt-[2px] h-4 w-4 accent-[#FF5C00] rounded-sm"
          />
          <span>I would like to receive the newsletter.</span>
        </label>

        {/* Submit */}
        <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <button
              type="submit"
              className="w-full rounded-xl bg-[#FF5C00] py-2 font-semibold text-black hover:bg-orange-400 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
