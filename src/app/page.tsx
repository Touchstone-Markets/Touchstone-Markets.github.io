import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="flex items-center gap-3 md:gap-6">
        <Image
          src="/brand/logo.png"
          alt=""
          width={128}
          height={128}
          priority
          className="w-16 h-16 md:w-32 md:h-32 rounded-lg md:rounded-xl shrink-0"
        />
        <div className="flex flex-col">
          <span className="text-2xl md:text-6xl font-medium tracking-tight text-black leading-none whitespace-nowrap">
            touchstone markets
          </span>
          <span className="mt-1.5 md:mt-3 text-sm md:text-xl text-neutral-500 leading-snug">
            Open infrastructure for verifiable markets.
          </span>
        </div>
      </div>
    </main>
  );
}
