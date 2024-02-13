import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export default function NewsletterBottom() {
  return (
    <div className="newsletter2 relative py-[98px] justify-start items-center flex mt-[100px]">
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-50 " /> 
    <div className="self-stretch w-[602px] relative z-10 pl-8 flex-col justify-start items-start gap-10 flex">
        <div className={`text-neutral-100 text-base font-normal ${inter.className}`}>NEWSLETTER</div>
        <div className="min-h-[154px] flex-col mb-[40px] justify-start items-start gap-5 flex">
            <div className={`self-stretch justify-start items-center gap-2.5 flex grow shrink basis-0 text-neutral-100 text-[40px] font-bold ${avenirLtPro.className}`}>
                Get A Fair Price For Your Car: Sell To Us Today
            </div>
            <div className={`self-stretch grow shrink basis-0 text-neutral-100 text-base font-medium ${inter.className}`}>
                We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of vehicles to choose from.
            </div>
        </div>
        <Link href="" className={`px-6 py-4 bg-red-600 justify-start items-center gap-2 flex text-neutral-100 text-base font-medium ${inter.className}`}>
            Get Started
        </Link>
    </div>
</div>
  );
}
