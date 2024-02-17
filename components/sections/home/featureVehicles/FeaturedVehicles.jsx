import { avenirLtPro, inter } from "@/app/fonts";
import TheSliderSlick from "./TheSliderSlick";

export default function FeaturedVehicles() {
  return (
    <div className="my-[60px] md:my-[100px] flex min-h-[707px] w-full flex-col items-start justify-start gap-[60px]">
      <div className="flex flex-col items-start justify-start gap-10 pl-4 md:pl-8">
        <div className={`text-base font-normal text-neutral-800 ${inter.className}`}>
          WE RECOMMEND
        </div>
        <div className="flex w-[351px] items-center justify-start gap-2.5">
          <div className={`shrink grow basis-0 text-[32px] md:text-[40px] font-bold text-neutral-800 ${avenirLtPro.className}`}>
            Featured Vehicles
          </div>
        </div>
      </div>
      <div className="w-full">
        <TheSliderSlick />
      </div>
    </div>
  );
}
