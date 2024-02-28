import { avenirLtPro, inter } from "@/app/fonts";
import React from "react";
import TheSliderSlick from "./TheSliderSlick";

export default function Testimonials() {
  return (
    <div className="mt-[60px] md:mt-[100px] mb-[100px] pr-4 pl-4 md:pl-8 md:pr-0">
      <div className="flex w-full flex-col items-start justify-start gap-10 md:gap-20">
        <div className="flex flex-col items-start justify-start gap-10">
          <div className={`text-base font-normal text-neutral-800 ${inter.className}`}>
            TESTIMONIALS
          </div>
          <div className="flex items-center justify-start gap-2.5">
            <div className={`text-[32px] md:text-[40px] font-bold text-neutral-800 ${avenirLtPro.className}`}>
              What Our Clients Say
            </div>
          </div>
        </div>
          <div className="w-full">
            <TheSliderSlick />
          </div>
      </div>
    </div>
  );
}
