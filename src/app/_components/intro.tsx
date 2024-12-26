import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-8 md:mb-6 gap-8">
      <img
        src={"/assets/blog/page/page_chair.jpg"}
        alt={"page_chair"}
        width={180}
        height={180}
        className="object-contain w-3/5"
      ></img>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Chair Journey
      </h1>
    </section>
  );
}
