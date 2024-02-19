import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export default function NewsletterBottom() {
  return (
    <div className="newsletter2 min-h-[618.81px] sm:min-h-[500px] relative mt-[100px] flex items-center justify-start py-[98px]">
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-50 " />
      <div className="relative z-10 flex flex-col gap-10 w-full sm:w-[602px] mx-4 sm:mx-8">
        <div
          className={`text-base font-normal text-neutral-100 ${inter.className}`}
        >
          NEWSLETTER
        </div>
        <div className="flex flex-col items-start justify-start gap-5">
          <div
            className={`flex shrink grow basis-0 items-center justify-start gap-2.5 self-stretch text-[32px] font-bold text-neutral-100 sm:text-[40px] ${avenirLtPro.className}`}
          >
            Get A Fair Price For Your Car: Sell To Us Today
          </div>
          <div
            className={`shrink grow basis-0 self-stretch text-base font-medium text-neutral-100 ${inter.className}`}
          >
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of vehicles to choose
            from.
          </div>
        </div>
        <Link
          href=""
          className={`flex items-center max-w-[137px] justify-start gap-2 bg-red-600 px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
