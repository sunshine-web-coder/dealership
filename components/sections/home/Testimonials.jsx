import { avenirLtPro, inter } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import avatar1 from "../../../assets/avatar1.png";

export default function Testimonials() {
  return (
    <div className="pl-8">
      <div className="flex w-[1408px] flex-col items-start justify-start gap-20">
        <div className="flex flex-col items-start justify-start gap-10">
          <div className={`text-base font-normal text-neutral-800 ${inter.className}`}>
            TESTIMONIALS
          </div>
          <div className="flex items-center justify-start gap-2.5">
            <div className={`text-[40px] font-bold text-neutral-800 ${avenirLtPro.className}`}>
              What Our Clients Say
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-10">
          <div className="flex items-center gap-5 justify-end">
            <div className="flex min-h-[294px] w-[445px] flex-col items-start justify-start gap-2.5 border border-neutral-800 p-10">
              <div className="flex min-h-[214px] flex-col items-start justify-start gap-10 self-stretch">
                <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                  &quot;I came to this dealership looking for a specific car,
                  and they had the exact one I was looking for. The team was
                  helpful and friendly, and they worked with me to make sure I
                  got the best possible deal. I appreciate their transparency
                  and willingness to answer all my questions.&quot;
                </div>
                <div className="flex items-center justify-start gap-2.5 self-stretch">
                  <Image
                    src={avatar1}
                    width="60"
                    height="60"
                    className="h-[60px] w-[60px] rounded-full"
                    alt="avatar"
                  />
                  <div className={`text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    Steve Stella
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-h-[294px] w-[445px] flex-col items-start justify-start gap-2.5 border border-neutral-800 p-10">
              <div className="flex min-h-[214px] flex-col items-start justify-start gap-10 self-stretch">
                <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                  &quot;I came to this dealership looking for a specific car,
                  and they had the exact one I was looking for. The team was
                  helpful and friendly, and they worked with me to make sure I
                  got the best possible deal. I appreciate their transparency
                  and willingness to answer all my questions.&quot;
                </div>
                <div className="flex items-center justify-start gap-2.5 self-stretch">
                  <Image
                    src={avatar1}
                    width="60"
                    height="60"
                    className="h-[60px] w-[60px] rounded-full"
                    alt="avatar"
                  />
                  <div className={`text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    Steve Stella
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-h-[294px] w-[445px] flex-col items-start justify-start gap-2.5 border border-neutral-800 p-10">
              <div className="flex min-h-[214px] flex-col items-start justify-start gap-10 self-stretch">
                <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                  &quot;I came to this dealership looking for a specific car,
                  and they had the exact one I was looking for. The team was
                  helpful and friendly, and they worked with me to make sure I
                  got the best possible deal. I appreciate their transparency
                  and willingness to answer all my questions.&quot;
                </div>
                <div className="flex items-center justify-start gap-2.5 self-stretch">
                  <Image
                    src={avatar1}
                    width="60"
                    height="60"
                    className="h-[60px] w-[60px] rounded-full"
                    alt="avatar"
                  />
                  <div className={`text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    Steve Stella
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-h-[294px] w-[445px] flex-col items-start justify-start gap-2.5 border border-neutral-800 p-10">
              <div className="flex min-h-[214px] flex-col items-start justify-start gap-10 self-stretch">
                <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                  &quot;I came to this dealership looking for a specific car,
                  and they had the exact one I was looking for. The team was
                  helpful and friendly, and they worked with me to make sure I
                  got the best possible deal. I appreciate their transparency
                  and willingness to answer all my questions.&quot;
                </div>
                <div className="flex items-center justify-start gap-2.5 self-stretch">
                  <Image
                    src={avatar1}
                    width="60"
                    height="60"
                    className="h-[60px] w-[60px] rounded-full"
                    alt="avatar"
                  />
                  <div className={`text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    Steve Stella
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-2.5">
            <svg
              width="36"
              className="cursor-pointer"
              height="16"
              viewBox="0 0 36 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M0.293087 7.29289C-0.097435 7.68342 -0.097435 8.31658 0.293087 8.70711L6.65705 15.0711C7.04757 15.4616 7.68074 15.4616 8.07126 15.0711C8.46179 14.6805 8.46179 14.0474 8.07126 13.6569L2.41441 8L8.07126 2.34315C8.46179 1.95262 8.46179 1.31946 8.07126 0.928932C7.68074 0.538408 7.04757 0.538408 6.65705 0.928932L0.293087 7.29289ZM35.4912 7L1.00019 7V9L35.4912 9V7Z"
                fill="#B0B0B0"
              />
            </svg>
            <svg
              width="36"
              className="cursor-pointer"
              height="16"
              viewBox="0 0 36 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 1"
                d="M35.6893 8.70711C36.0799 8.31658 36.0799 7.68342 35.6893 7.29289L29.3254 0.928932C28.9348 0.538408 28.3017 0.538408 27.9112 0.928932C27.5206 1.31946 27.5206 1.95262 27.9112 2.34315L33.568 8L27.9112 13.6569C27.5206 14.0474 27.5206 14.6805 27.9112 15.0711C28.3017 15.4616 28.9348 15.4616 29.3254 15.0711L35.6893 8.70711ZM0.491211 9H34.9822V7H0.491211V9Z"
                fill="#202020"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
