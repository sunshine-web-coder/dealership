import { avenirLtPro, inter } from "@/app/fonts";
import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter relative flex min-h-[588px] items-center justify-start py-[83px] sm:min-h-[834px] md:py-[265px]">
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-50 " />
      <div className="relative z-10 mx-auto flex max-w-[602px] flex-col items-center justify-start gap-10 self-stretch px-[10px] md:m-0 md:items-start md:px-0 md:pl-8">
        <div className={`text-base font-normal text-neutral-100 ${inter.className}`}>
          NEWSLETTER
        </div>
        <div className="md:mx flex flex-col items-center justify-center gap-5 sm:items-start sm:justify-start">
          <div className={`flex max-w-[270px] text-center text-[32px] font-bold text-neutral-100 sm:max-w-max sm:text-[40px] md:text-left ${avenirLtPro.className}`}>
            Sign Up And Never Miss A Deal Again
          </div>
          <div className={`flex max-w-[345px] shrink grow  basis-0 items-center justify-center gap-2.5 self-stretch text-center text-base font-medium text-neutral-100 sm:max-w-max md:text-left ${inter.className}`}>
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of vehicles to choose
            from.
          </div>
        </div>
        <form className="flex w-full flex-col items-start justify-start gap-2.5 md:flex-row">
          <input
            type="text"
            placeholder="Your email address"
            className={`h-[51px] w-full border border-neutral-100 bg-transparent px-6 py-4 text-base font-medium text-neutral-100 placeholder:text-neutral-100 md:w-[426px] ${inter.className}`}
          />
          <button
            className={`flex h-[51px] w-full items-center justify-start gap-2 bg-red-600 px-6 py-4 text-base font-medium text-neutral-100 md:w-[126px] ${inter.className}`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
