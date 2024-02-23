import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import TabComponent from "./TabComponent";

export default function LatestVehicles() {
  return (
    <div className="inner_section flex flex-col items-start justify-start gap-[40px] md:gap-[60px] px-4 md:px-8 my-[60px] md:my-[100px]">
      <div className="flex flex-col items-start justify-start gap-10">
        <div className={`text-base font-normal text-neutral-800 ${inter.className}`}>
          WE RECOMMEND
        </div>
        <div className="flex items-center justify-start gap-2.5">
          <div className={`text-[40px] font-bold text-neutral-800 ${avenirLtPro.className}`}>
            Latest Vehicles
          </div>
        </div>
      </div>
     <div>
      <TabComponent />
     </div>
      <Link href="" className={`flex h-[51px] mx-auto max-w-[200px] items-center justify-center gap-2 border border-neutral-800 px-6 py-4 text-base font-medium text-neutral-800 ${inter.className}`}>
            Discover More
        </Link>
    </div>
  );
}
