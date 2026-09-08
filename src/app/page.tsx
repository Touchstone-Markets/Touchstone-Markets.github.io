import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="flex items-center gap-4">
        <Image
          src="/brand/logo.png"
          alt=""
          width={56}
          height={56}
          priority
          className="rounded-md"
        />
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-medium tracking-tight text-black">
            touchstone markets
          </span>
          <span className="text-sm md:text-base text-neutral-500">
            Open infrastructure for verifiable markets.
          </span>
        </div>
      </div>
    </main>
  );
}
