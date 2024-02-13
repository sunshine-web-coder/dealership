import { inter } from "@/app/fonts";

export default function BannerForm() {
  return (
    <form className="flex w-full flex-col gap-5">
      <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
        <label
          htmlFor="brand"
          className={`text-sm font-normal text-neutral-100 ${inter.className}`}
        >
          Brand
        </label>
        <input
          type="text"
          placeholder="Brand*"
          className={`h-[51px] w-full border border-neutral-100 bg-transparent px-6 py-4 text-base font-medium text-neutral-100 placeholder:text-neutral-100 ${inter.className}`}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
        <label
          htmlFor="brand"
          className={`text-sm font-normal text-neutral-100 ${inter.className}`}
        >
          Model
        </label>
        <input
          type="text"
          placeholder="Model*"
          className={`h-[51px] w-full border border-neutral-100 bg-transparent px-6 py-4 text-base font-medium text-neutral-100 placeholder:text-neutral-100 ${inter.className}`}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-2.5 self-stretch">
        <label
          htmlFor="brand"
          className={`text-sm font-normal text-neutral-100 ${inter.className}`}
        >
          Type
        </label>
        <input
          type="text"
          placeholder="Type*"
          className={`h-[51px] w-full border border-neutral-100 bg-transparent px-6 py-4 text-base font-medium text-neutral-100 placeholder:text-neutral-100 ${inter.className}`}
        />
      </div>
      <div>
        <button
          className={`flex h-[51px] w-full items-center justify-center gap-2 border bg-red-600 px-6 py-4 text-base font-medium text-neutral-100 ${inter.className}`}
        >
          Get Started
        </button>
      </div>
    </form>
  );
}
