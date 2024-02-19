"use client";

import Image from "next/image";
import { avenirLtPro, inter } from "@/app/fonts";
import Slider from "react-slick";
import { testimonialData } from "./data";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <svg
      width="36"
      onClick={onClick}
      className="absolute bottom-[-20px] z-20 ml-[10px] rotate-180 cursor-pointer lg:top-[370px] lg:ml-[10px]"
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
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <svg
      width="36"
      onClick={onClick}
      className="absolute bottom-[-20px] z-20 ml-[70px] cursor-pointer lg:top-[370px] lg:ml-[70px]"
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
  );
}

export default function TheSliderSlick() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[500px] md:max-w-max">
      <Slider {...settings}>
        {testimonialData.map((user, i) => (
          <div key={i} className="border border-neutral-800">
            <div className="flex min-h-[350px] w-full flex-col items-start justify-start gap-2.5 p-10">
              <div className="flex min-h-[265px] flex-col items-start justify-between gap-10 self-stretch">
                <div className={`self-stretch text-base font-normal text-neutral-800 ${inter.className}`}>
                  &quot;{user.content}&quot;
                </div>
                <div className="flex items-center justify-start gap-2.5 self-stretch">
                  <Image
                    src={user.avatar}
                    width="60"
                    height="60"
                    className="h-[60px] w-[60px] rounded-full"
                    alt="avatar"
                  />
                  <div className={`text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    {user.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </Slider>
    </div>
  );
}
