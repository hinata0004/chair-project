import { CMS_NAME } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import React from "react";

export function Photo() {
  return (
    <section className="flex-col md:flex-col flex justify-center">
      <div className="container flex flex-col w-[540px]">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/7 md:basis-1/7 pl-0">
              <img
                src={"/assets/blog/novel/thonet_chair.png"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/7 md:basis-1/7 pl-0">
              <img
                src={"/assets/blog/novel/thonet_chair.png"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/7 md:basis-1/7 pl-0">
              <img
                src={"/assets/blog/novel/thonet_chair.png"}
                alt={"page_chair"}
                width={180}
                height={180}
                className="object-contain"
              ></img>
            </CarouselItem>
            <CarouselItem className="basis-1/7 md:basis-1/7 pl-0">
              <img
                src={"/assets/blog/novel/thonet_chair.png"}
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
      </div>
    </section>
  );
}
