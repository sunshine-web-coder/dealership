"use client";

import Image from "next/image";
import Link from "next/link";
import { avenirLtPro, inter } from "@/app/fonts";
import Slider from "react-slick";
import { featuredVehicleslideData } from "../data";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <svg
      width="36"
      onClick={onClick}
      className="absolute bottom-[-45px] lg:top-[520px] ml-[15px] lg:ml-[45px] z-20 rotate-180 cursor-pointer"
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
      className="absolute bottom-[-45px] lg:top-[520px] ml-[80px] lg:ml-[105px] z-20 cursor-pointer"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
    ]
  };

  return (
    <div className="relative mx-auto max-w-[500px] px-4 md:max-w-full md:px-8 lg:px-0">
      <Slider {...settings}>
      {featuredVehicleslideData.map((item) => (
        <div key={item.label} className="w-full lg:w-[1027px] pr-0 md:pr-4 lg:pr-0 max-[1090px]:pl-0 pl-8">
          <div className=" flex-col lg:flex-row flex h-full lg:h-[500px] w-full lg:w-[1027px] items-start justify-start border border-neutral-800">
            <Image
              src={item.fImg}
              width="490"
              height="500"
              className="relative h-[350px] md:h-[500px] w-full lg:w-[490px]"
              alt="slide_img"
            />
            <div className="flex h-full lg:h-[500px] flex-col items-start justify-start gap-2.5 px-4 md:px-10 py-6 md:py-[50px]">
              <div className="flex flex-col items-start justify-start gap-10">
                <div className="flex flex-col items-start justify-start gap-10">
                  <div className={`flex w-full lg:w-[457px] items-center justify-between text-base font-normal text-neutral-800 ${inter.className}`}>
                    <div className="uppercase flex gap-4"><span>{item.year} {item.name}</span></div>
                    <div>Mileage: {item.mileage}</div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-5">
                    <div className={`text-[32px] font-bold text-neutral-800 ${avenirLtPro.className}`}>
                      {item.label}
                    </div>
                    <div className={`w-full lg:w-[457px] text-base font-medium text-neutral-800 ${inter.className}`}>
                      {item.desc}
                    </div>
                  </div>
                  <div className={`flex-col lg:flex-row flex items-center justify-center gap-2.5 text-2xl font-bold text-neutral-800 ${avenirLtPro.className}`}>
                    <div className="">$ {item.price} USD</div>
                    <div className="h-[18px] hidden lg:block border border-neutral-800"></div>
                    <div>MSRP: ${item.msrp}</div>
                  </div>
                </div>
                <Link
                  href=""
                  className={`flex items-center justify-center gap-2 border border-neutral-800 px-6 py-4 text-base font-medium text-neutral-800 ${inter.className}`}
                >
                  Explore
                </Link>
              </div>
            </div>
          </div> 
        </div>
         ))}
      </Slider>
    </div>
  );
}
