import Image from "next/image";
import discoverImg from "../../../assets/discover_img.png";
import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";

export default function Discover() {
  return (
    <div className="inner_section flex flex-col md:flex-row items-center justify-start gap-[64px] md:gap-[116px] px-4 md:px-8">
      <div className="flex min-h-[323px] w-full md:w-[562px] flex-col items-center md:items-start justify-start gap-10">
        <div className={`text-base font-normal text-center md:text-left text w-full text-neutral-800 ${inter.className}`}>
          CLASSICS
        </div>
        <div className="flex flex-col items-start justify-start gap-5 self-stretch">
          <div className="flex items-center justify-start gap-2.5 self-stretch">
            <div className={`shrink grow basis-0 text-[32px] md:text-[40px] text-center md:text-left font-bold text-neutral-800 ${avenirLtPro.className}`}>
              Discover A New Level Of Comfort
            </div>
          </div>
          <div className="flex w-full md:w-[562px] items-center justify-center gap-2.5 self-stretch">
            <div className={`shrink grow basis-0 text-base text-center md:text-left font-medium text-neutral-800 ${inter.className}`}>
              We&apos;re here to make the car-buying process as easy and
              stress-free as possible. Contact us today to schedule a test drive
              or to learn more about our financing and service options.
            </div>
          </div>
        </div>
        <Link href="" className={`flex items-center justify-center gap-2 border border-neutral-800 px-6 py-4 text-base font-medium text-neutral-800 ${inter.className}`}>
          Discover More
        </Link>
      </div>
      <div className="w-full md:w-[698px]">
        <Image
          width="698"
          height="428"
          className="w-[698px]"
          src={discoverImg}
          alt="discover_img"
        />
      </div>
    </div>
  );
}
