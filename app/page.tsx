export default function Page() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] px-4 space-y-6">
      
      <p className="text-3xl tracking-wide text-zinc-300">
        Lets Work{" "}
        <span className="text-[#FF5C00] font-semibold">Together !</span>
      </p>

      
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Hi From <span className="text-[#FF5C00]">Adisorn</span>, <br />
        Interactive Designer & Fullstack Web Developer
      </h1>

      
      <p className="max-w-2xl text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        aspernatur! Omnis eius esse maiores voluptas error, itaque repellendus
        veniam fugit. Temporibus quaerat numquam porro consequatur ex nostrum
        accusantium placeat illum.
      </p>

     
      <div className="mt-4 grid grid-cols-2 gap-8 max-w-md">
        <div>
          <div className="text-4xl  text-[#FF5C00]">3+</div>
          <div className="text-xs  tracking-wider text-zinc-400">
            Years of
            <br />
            Experience
          </div>
        </div>
        <div>
          <div className="text-4xl text-[#FF5C00]">10+</div>
          <div className="text-xs  tracking-wider text-zinc-400">
            Projects <br />
            Completed
          </div>
        </div>
      </div>
    </div>
  );
}
