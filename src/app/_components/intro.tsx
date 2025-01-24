import { CMS_NAME } from "@/lib/constants";
import React from "react";

export function Intro() {
  return (
    <section className="flex-col md:flex-col flex justify-center">
      <div className="h-[200px] w-full"></div>
      <div className="container flex flex-col w-[540px] h-auto">
        <div className="chair-photo"></div>
      </div>
    </section>
  );
}
