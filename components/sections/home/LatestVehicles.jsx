import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export default function LatestVehicles() {
  return (
    <div className="inner_section flex flex-col items-start justify-start gap-[60px] border px-8 my-[100px]">
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
      <div className="flex w-full flex-col items-start justify-between">
        <div className="flex items-start justify-start gap-10">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch font-['Inter'] text-xl font-semibold text-neutral-800">
              Crossover & SUVs
            </div>
            <div className="h-[0px] self-stretch border-2 border-neutral-800"></div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch font-['Inter'] text-xl font-semibold text-neutral-800">
              Cars
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch font-['Inter'] text-xl font-semibold text-neutral-800">
              Hybrid
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch font-['Inter'] text-xl font-semibold text-neutral-800">
              Electric
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <div className="self-stretch font-['Inter'] text-xl font-semibold text-neutral-800">
              Sport Cars
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between self-stretch">
          <div className="flex flex-col items-start justify-start gap-2.5">
            <img
              className="h-[151.70px] w-[316.86px]"
              src="https://via.placeholder.com/317x152"
            />
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="font-['Avenir Next LT Pro'] text-2xl font-bold text-neutral-800">
                Nexaro Electra
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                $ 37,800.00 USD
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                MSRP: $35,600
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <img
              className="h-[154.81px] w-[320.65px]"
              src="https://via.placeholder.com/321x155"
            />
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="font-['Avenir Next LT Pro'] text-2xl font-bold text-neutral-800">
                Velocevo Stellaris
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                $ 37,800.00 USD
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                MSRP: $35,600
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <img
              className="h-[151.61px] w-[312.56px]"
              src="https://via.placeholder.com/313x152"
            />
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="font-['Avenir Next LT Pro'] text-2xl font-bold text-neutral-800">
                Nexaro CG6
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                $ 37,800.00 USD
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                MSRP: $35,600
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2.5">
            <img
              className="h-[151.61px] w-[318.68px]"
              src="https://via.placeholder.com/319x152"
            />
            <div className="flex flex-col items-start justify-start gap-2.5">
              <div className="font-['Avenir Next LT Pro'] text-2xl font-bold text-neutral-800">
                Arcticon Aurora
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                $ 37,800.00 USD
              </div>
              <div className="font-['Inter'] text-base font-normal text-neutral-800">
                MSRP: $35,600
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Link href="" className={`flex h-[51px] mx-auto max-w-[200px] items-center justify-center gap-2 border border-neutral-800 px-6 py-4 text-base font-medium text-neutral-800 ${inter.className}`}>
            Discover More
        </Link>
    </div>
  );
}
