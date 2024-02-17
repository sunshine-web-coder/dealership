import { avenirLtPro, inter } from '@/app/fonts'
import Image from 'next/image'
import slideImg1 from "../../../assets/slide1.png"
import Link from 'next/link'
import { featuredVehicleslideData } from './data'

export default function FeaturedVehicles() {
  return (
    <div className="w-[1408px] min-h-[707px] pl-8 flex-col justify-start items-start gap-[60px] flex my-[100px]">
    <div className="flex-col justify-start items-start gap-10 flex">
        <div className={`text-neutral-800 text-base font-normal ${inter.className}`}>WE RECOMMEND</div>
        <div className="w-[351px] justify-start items-center gap-2.5 flex">
            <div className={`grow shrink basis-0 text-neutral-800 text-[40px] font-bold ${avenirLtPro.className}`}>Featured Vehicles</div>
        </div>
    </div>
    <div className="flex-col justify-start items-start gap-5 flex">
        <div className="flex gap-5">
        {featuredVehicleslideData.map((item) => (
                <div key={item.label} className="w-[1027px] h-[500px] border border-neutral-800 justify-start items-start flex">
                <Image src={slideImg1} width="490" height="500" className="w-[490px] h-[500px] relative" alt='slide_img' />
                <div className="h-[500px] px-10 py-[50px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="flex-col justify-start items-start gap-10 flex">
                        <div className="flex-col justify-start items-start gap-10 flex">
                            <div className={`w-[457px] justify-between items-center flex text-neutral-800 text-base font-normal ${inter.className}`}>
                                <div className="uppercase">{item.model}</div>
                                <div>Mileage: 18900</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-5 flex">
                                <div className={`text-neutral-800 text-[32px] font-bold ${avenirLtPro.className}`}>Ampera Helix GT</div>
                                <div className={`w-[457px] text-neutral-800 text-base font-medium ${inter.className}`}>With its aerodynamic curves and bold lines, this car is a standout on the road, turning heads and making a statement wherever it goes.</div>
                            </div>
                            <div className={`justify-center items-center gap-2.5 flex text-neutral-800 text-2xl font-bold ${avenirLtPro.className}`}>
                                <div className="">$ 37,800.00 USD</div>
                                <div className="h-[18px] border border-neutral-800"></div>
                                <div>MSRP: $35,600</div>
                            </div>
                        </div>
                        <Link href="" className={`px-6 py-4 border border-neutral-800 justify-center items-center gap-2 flex text-neutral-800 text-base font-medium ${inter.className}`}>
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <div className="justify-start items-start gap-2.5 flex">
            <svg width="36" className="cursor-pointer" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 2" d="M0.293087 7.29289C-0.097435 7.68342 -0.097435 8.31658 0.293087 8.70711L6.65705 15.0711C7.04757 15.4616 7.68074 15.4616 8.07126 15.0711C8.46179 14.6805 8.46179 14.0474 8.07126 13.6569L2.41441 8L8.07126 2.34315C8.46179 1.95262 8.46179 1.31946 8.07126 0.928932C7.68074 0.538408 7.04757 0.538408 6.65705 0.928932L0.293087 7.29289ZM35.4912 7L1.00019 7V9L35.4912 9V7Z" fill="#B0B0B0"/>
            </svg>
            <svg width="36" className="cursor-pointer" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 1" d="M35.6893 8.70711C36.0799 8.31658 36.0799 7.68342 35.6893 7.29289L29.3254 0.928932C28.9348 0.538408 28.3017 0.538408 27.9112 0.928932C27.5206 1.31946 27.5206 1.95262 27.9112 2.34315L33.568 8L27.9112 13.6569C27.5206 14.0474 27.5206 14.6805 27.9112 15.0711C28.3017 15.4616 28.9348 15.4616 29.3254 15.0711L35.6893 8.70711ZM0.491211 9H34.9822V7H0.491211V9Z" fill="#202020"/>
            </svg>
        </div>
    </div>
</div>
  )
}
