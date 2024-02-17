import { avenirLtPro, inter } from "@/app/fonts";
import React from "react";

export default function Newsletter() {
  return (
    <div className="newsletter relative py-[83px] md:py-[265px] justify-start items-center flex">
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-50 " /> 
    <div className="self-stretch relative z-10 mx-auto md:m-0 max-w-[602px] px-[10px] md:px-0 md:pl-8 flex-col justify-start items-center md:items-start gap-10 flex">
        <div className={`text-neutral-100 text-base font-normal ${inter.className}`}>NEWSLETTER</div>
        <div className="flex-col justify-start md:mx items-start gap-5 flex">
            <div className={`self-stretch justify-start text-center md:text-left items-center gap-2.5 flex grow shrink basis-0 text-neutral-100 text-[40px] font-bold ${avenirLtPro.className}`}>
                Sign Up And Never Miss A Deal Again
            </div>
            <div className={`self-stretch justify-center text-center md:text-left items-center gap-2.5 flex grow shrink basis-0 text-neutral-100 text-base font-medium ${inter.className}`}>
                We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of vehicles to choose from.
            </div>
        </div>
        <form className="flex flex-col md:flex-row w-full items-start justify-start gap-2.5">
          <input
            type="text"
            placeholder="Your email address"
            className={`h-[51px] w-full md:w-[426px] border placeholder:text-neutral-100 border-neutral-100 bg-transparent px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}
          />
          <button className={`flex h-[51px] w-full md:w-[126px] items-center justify-start gap-2 bg-red-600 px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}>
            Subscribe
          </button>
        </form>
    </div>
</div>
  );
}
