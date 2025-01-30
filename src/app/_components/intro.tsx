import { CMS_NAME } from "@/lib/constants";
import React from "react";

export function Intro() {
  return (
    <section className="flex-col md:flex-col flex justify-center">
      <div className="flex h-[200px] w-full">
        <div className="basis-1/5"></div>
        <h1 className="basis-2/5 p-5 z-10 font-Kiwi_Maru mt-20 text-4xl [text-shadow:_4px_4px_4px_rgb(0_0_0_/_60%),_2px_2px_4px_rgb(0_0_0_/_60%),_0_2px_4px_rgb(0_0_0_/_60%)]">
          世界にひとつ、
          <br />
          あなたと椅子の物語
        </h1>
        <div className="basis-2/5"></div>
      </div>
      <div className="container flex flex-col w-[540px] h-auto">
        <div className="chair-photo"></div>
      </div>
    </section>
  );
}
