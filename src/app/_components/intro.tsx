import { CMS_NAME } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-stretch md:justify-between mb-8 md:mb-6">
      <div className="w-7/12">
        <img
          src={"/assets/blog/page/page_chair.jpg"}
          alt={"page_chair"}
          width={180}
          height={180}
          className="object-contain w-full h-auto"
        ></img>
      </div>
      <div className="container flex flex-col w-5/12">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3 md:basis-1/3 pl-0">
              <img
                src={"/assets/blog/page/chair2.jpg"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/3 md:basis-1/3 pl-0">
              <img
                src={"/assets/blog/page/chair3.jpg"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/3 md:basis-1/3 pl-0">
              <img
                src={"/assets/blog/page/chair4.jpg"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/3 md:basis-1/3 pl-0">
              <img
                src={"/assets/blog/page/chair5.jpg"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        <h1 className="font-Ubuntu text-5xl md:text-7xl text-center tracking-tighter leading-tight md:pr-8">
          Chair Journey
        </h1>
        <h2 className="font-Gothic_J text-3xl text-center">
          椅子好きのためのWebサイト
        </h2>
      </div>
    </section>
  );
}
