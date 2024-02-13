import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import BannerForm from "../forms/BannerForm";

export default function Banner() {
  return (
    <div className={`banner relative md:min-h-[642px] lg:min-h-[1024px] w-full bg-black bg-opacity-30 px-4 sm:px-8 pt-[132px] pb-[186px] md:py-[256px]`}>
      <div className="absolute left-0 right-0 top-0 h-full w-full bg-black bg-opacity-30" />
      <div className="relative z-[1px] flex h-[493px] inner_section items-center justify-start gap-2 lg:gap-[73px]">
        <div className="min-h-[304px] flex flex-col gap-[40px] w-full lg:w-[60%]">
          <div
            className={`text-base text-center md:text-left font-normal text-neutral-100 ${inter.className}`}
          >
            NEW IN STOCK
          </div>
          <div className="flex w-full items-center justify-center gap-2.5">
            <div
              className={`shrink grow basis-0 text-center md:text-left text-5xl lg:text-[54px] font-bold leading-[68px] text-neutral-100 ${avenirLtPro.className}`}
            >
              Upgrade Your Driving Experience
            </div>
          </div>
          <div className="flex items-start justify-start gap-1 sm:gap-5">
            <Link
              href=""
              className={`flex w-full md:w-[180px] items-center justify-center gap-2 border border-neutral-100 px-3 sm:px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}
            >
              Discover More
            </Link>
            <Link
              href=""
              className={`flex w-full md:w-[180px] items-center justify-center gap-2 border border-neutral-100 px-3 sm:px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}
            >
              Meet Horizon GT
            </Link>
          </div>
        </div>
        <div className="hidden md:flex min-h-[493px] w-full lg:w-[40%] flex-col items-start justify-start border border-neutral-100 bg-black bg-opacity-50 p-10">
          <div className="flex w-full flex-col items-start justify-between">
            <div
              className={`text-[40px] font-bold text-neutral-100 ${avenirLtPro.className}`}
            >
              Find Your Ride
            </div>
            <BannerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
