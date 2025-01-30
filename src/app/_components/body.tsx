import React from "react";
import WaveSeparator from "./wave-separator";

export function Body() {
  return (
    <section className="flex-col md:flex-col flex items-center w-full h-[1000px]">
      <div className="h-52 w-full bg-header_color">
        <div className="relative w-full h-auto p-5">
          <div className="text-center">
            <h1 className="font-Kiwi_Maru text-4xl">『スイの椅子』とは？</h1>
            <h2 className="font-Kiwi_Maru text-2xl mt-4">
              『スイの椅子』とは、椅子が大好きな少女スイが旅のなかで
              <br />
              たくさんのキャラクターと椅子に出会う異世界ファンタジー小説です。
            </h2>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1280 100"
        className="w-full block"
      >
        <path
          d="M 0 50 Q 160 50 320 75 Q 640 125 960 75 Q 1120 50 1280 50 Q 1440 50 1600 75 Q 1920 125 2240 75 Q 2400 50 2560 50 L 1280 0 L 0 0 Z"
          fill="#634720"
        ></path>
      </svg>
    </section>
  );
}
