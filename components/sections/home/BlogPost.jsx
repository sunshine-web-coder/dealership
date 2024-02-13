import { avenirLtPro, inter } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { blogPostList } from "./data";

export default function BlogPost() {
  return (
    <div className="section">
      <div className="inner_section">
        <div className="flex flex-col items-center justify-start gap-10">
          <div
            className={`text-base font-normal text-neutral-800 ${inter.className}`}
          >
            LATEST BLOG POSTS
          </div>
          <div
            className={`flex items-center justify-start gap-2.5 text-[40px] font-bold text-neutral-800 ${avenirLtPro.className}`}
          >
            Auto World Blog
          </div>
        </div>
        <div className="flex mt-[60px] flex-wrap items-center lg:flex-nowrap lg:items-start justify-center lg:justify-start gap-[21px]">
            {blogPostList.map((post) => (
                <div key={post.title} className="flex w-[445px] flex-col items-start justify-start">
                <Image
                  width="445"
                  src={post.img}
                  height="310"
                  className="relative h-[310px] w-[445px] border"
                  alt="blog_img"
                />
                <div className="flex min-h-[301px] flex-col items-end justify-start gap-[26px] border border-neutral-800 border-t-0">
                  <div className="flex min-h-[215px] flex-col items-center justify-start gap-10 self-stretch p-5">
                    <div className={`flex items-center justify-between self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                      <div className="uppercase">{post.category}</div>
                      <div>{post.date}</div>
                    </div>
                    <div className="flex h-[116px] flex-col items-start justify-start gap-5 self-stretch">
                      <div className={`self-stretch text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                        {post.title}
                      </div>
                      <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                        {post.desc}
                      </div>
                    </div>
                  </div>
                  <Link href={post.slug} className="flex relative left-[1px] top-[1px] h-[60px] w-[60px] flex-col items-center justify-center gap-2.5 border border-neutral-800 p-2.5">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Arrow 3"
                        d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464465C6.97631 0.269203 6.65973 0.269203 6.46447 0.464466C6.2692 0.659728 6.2692 0.97631 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM4.37114e-08 4.5L10 4.5L10 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                        fill="#202020"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
}
