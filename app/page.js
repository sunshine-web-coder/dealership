import Banner from "@/components/banner/Banner";
import Discover from "@/components/sections/home/Discover";
import First from "@/components/sections/home/First";
import LatestVehicles from "@/components/sections/home/latestVehicles/LatestVehicles";
import Newsletter from "@/components/sections/home/Newsletter";
import Testimonials from "@/components/sections/home/testimonials/Testimonials";
import { avenirLtPro, inter } from "./fonts";
import BlogPost from "@/components/sections/home/BlogPost";
import NewsletterBottom from "@/components/sections/home/NewsletterBottom";
import FeaturedVehicles from "@/components/sections/home/featureVehicles/FeaturedVehicles";

export default function Home() {
  return (
    <>
      <Banner />
      <First />
      <Discover />
      <FeaturedVehicles />
      <Newsletter />
      <LatestVehicles />
      <Testimonials />
      <div className="w-full bg-neutral-800 px-[10px] py-10 md:p-5 my-[60px] md:my-[100px]">
        <div className="inner_section flex flex-col items-center justify-center border-0 md:border">
          <div className="flex max-w-[187px] md:max-w-[1075px] mx-auto flex-col md:flex-row items-center justify-start gap-10 md:gap-20 lg:gap-40">
            <div className="flex items-center md:items-start flex-col text-center md:text-left md:flex-row justify-start gap-5">
              <span className={`text-[40px] font-bold text-neutral-100 ${avenirLtPro.className}`}>
                15+
              </span>
              <p className={`w-full text-base font-normal text-neutral-100 ${inter.className}`}>
                Having been in the car dealership industry for 15 years, we&apos;re
                proud to say that we&apos;ve seen it all.
              </p>
            </div>
            <div className="h-[119px] hidden md:block w-[0px] border border-neutral-100" />
            <div className="w-[119px] h-[0px] block md:hidden border border-neutral-100" />
            <div className="flex items-center md:items-start flex-col text-center md:text-left md:flex-row justify-start gap-5">
              <span className={`text-[40px] font-bold text-neutral-100 ${avenirLtPro.className}`}>
                10k
              </span>
              <p className={`w-full text-base font-normal text-neutral-100 ${inter.className}`}>
                Selling 10,000 cars is no small feat, and we&apos;re incredibly proud
                that we have achieved this milestone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BlogPost />
      <NewsletterBottom />
    </>
  );
}
