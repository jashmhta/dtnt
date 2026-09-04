import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#fbf8f3] px-6 text-center">
      <p className="text-[12px] uppercase tracking-[0.3em] opacity-50">404</p>
      <h1 className="font-display mt-4 text-5xl md:text-7xl">
        Off the flight path
      </h1>
      <p className="mt-5 max-w-[46ch] opacity-65">
        This page does not exist. Return to the start of your journey.
      </p>
      <Link
        href="/"
        className="btn-fill mt-8 inline-flex rounded-full border border-black/25 px-8 py-3.5 text-[13px] uppercase tracking-[0.18em]"
      >
        Back home
      </Link>
    </main>
  );
}
