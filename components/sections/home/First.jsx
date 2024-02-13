import { avenirLtPro, inter } from "@/app/fonts";

export default function First() {
  const data = [
    {
      number: "01",
      title: "Varieties of cars",
      desc: "At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.",
    },
    {
      number: "02",
      title: "Competitive pricing",
      desc: "At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.",
    },
    {
      number: "03",
      title: "24/7 support",
      desc: "At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.",
    },
  ];
  return (
    <div className="flex flex-col items-center md:flex-row inner_section justify-between gap-5 px-8 my-[74px] md:my-[100px]">
      {data.map((item) => (
        <div key={item.number} className="flex h-full sm:h-[259px] w-full sm:w-[445px] flex-col items-start justify-start gap-2.5">
          <div className="flex w-full items-end gap-2">
            <div className={`relative top-2 text-base font-normal text-neutral-800 ${inter.className}`}>
              {item.number}
            </div>
            <div className="h-[0px] w-full border border-neutral-800"></div>
          </div>
          <div className="flex h-[230px] w-full flex-col items-center justify-center gap-2.5 border border-neutral-800 p-2.5">
            <div className="flex max-w-[319px] flex-col items-center justify-start gap-5">
              <div className={`text-[32px] font-bold text-center text-neutral-800 ${avenirLtPro.className}`}>
                {item.title}
              </div>
              <div className={`w-full text-center text-base font-medium text-neutral-800 ${inter.className}`}>
                {item.desc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
