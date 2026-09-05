import { IMG } from "@/lib/assets";

export default function PageHero({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f3] pt-[68px]">
      <div className="absolute inset-0">
        <img
          src={IMG.heroBottom}
          alt=""
          aria-hidden
          loading="eager"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f3]/70 via-[#fbf8f3]/60 to-[#fbf8f3]" />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <h1
          className="font-display max-w-[16ch] uppercase text-[#2b1d12]"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5.4rem)", lineHeight: 1.02 }}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed opacity-70">{copy}</p>
      </div>
    </section>
  );
}
