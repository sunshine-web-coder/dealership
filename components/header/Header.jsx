"use client";

import Link from "next/link";
import React, { useState } from "react";
import { menuLink } from "./data";
import { avenirLtPro, inter } from "@/app/fonts";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={`left-0 right-0 bg-transparent top-0 z-10 w-full border-b border-neutral-100 px-4 py-4 sm:px-8 
    ${isOpen ? "bg-white lg:bg-transparent h-screen z-50 fixed border-b-0" : "absolute"}`}
    >
      <div className={`mx-auto relative flex max-w-[1376px] items-center justify-between ${isOpen ? "flex-col items-baseline " : ""}`}>
        <div className="flex items-center justify-start gap-2">
          <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="u:car">
              <path
                id="Vector"
                d="M8.8265 17.94C8.66104 17.9999 8.51078 18.0954 8.38635 18.2199C8.26193 18.3443 8.16639 18.4946 8.1065 18.66C8.00952 18.9023 7.98577 19.1678 8.03822 19.4234C8.09067 19.6791 8.217 19.9138 8.40155 20.0983C8.5861 20.2829 8.82075 20.4092 9.07642 20.4616C9.33209 20.5141 9.59753 20.4903 9.83984 20.3933C10.0014 20.3258 10.1502 20.2311 10.2798 20.1133C10.3976 19.9837 10.4923 19.8349 10.5598 19.6733C10.6345 19.5151 10.671 19.3416 10.6665 19.1667C10.6616 18.8137 10.5235 18.4755 10.2798 18.22C10.0923 18.035 9.85424 17.9097 9.59559 17.8598C9.33694 17.81 9.06932 17.8379 8.8265 17.94ZM26.3465 12.6067L24.5332 7.23335C24.2566 6.45099 23.7435 5.77402 23.065 5.29623C22.3866 4.81844 21.5763 4.56348 20.7465 4.56668H11.2532C10.4234 4.56348 9.6131 4.81844 8.93464 5.29623C8.25617 5.77402 7.7431 6.45099 7.4665 7.23335L5.65317 12.6467C4.80027 12.87 4.04506 13.3689 3.50494 14.0657C2.96483 14.7626 2.67007 15.6184 2.6665 16.5V21.8333C2.66882 22.6586 2.92634 23.4629 3.40376 24.1361C3.88117 24.8093 4.5551 25.3183 5.33317 25.5933V27.1667C5.33317 27.5203 5.47365 27.8594 5.7237 28.1095C5.97374 28.3595 6.31288 28.5 6.6665 28.5C7.02013 28.5 7.35926 28.3595 7.60931 28.1095C7.85936 27.8594 7.99984 27.5203 7.99984 27.1667V25.8333H23.9998V27.1667C23.9998 27.5203 24.1403 27.8594 24.3904 28.1095C24.6404 28.3595 24.9795 28.5 25.3332 28.5C25.6868 28.5 26.0259 28.3595 26.276 28.1095C26.526 27.8594 26.6665 27.5203 26.6665 27.1667V25.5933C27.4446 25.3183 28.1185 24.8093 28.5959 24.1361C29.0733 23.4629 29.3309 22.6586 29.3332 21.8333V16.5C29.3296 15.6184 29.0348 14.7626 28.4947 14.0657C27.9546 13.3689 27.1994 12.87 26.3465 12.6467V12.6067ZM9.9865 8.07335C10.076 7.80852 10.2464 7.5785 10.4737 7.4158C10.701 7.25311 10.9736 7.16596 11.2532 7.16668H20.7465C21.0373 7.1515 21.325 7.23192 21.5658 7.39563C21.8065 7.55935 21.9871 7.79737 22.0798 8.07335L23.4798 12.5H8.51984L9.9865 8.07335ZM26.6665 21.8333C26.6665 22.187 26.526 22.5261 26.276 22.7762C26.0259 23.0262 25.6868 23.1667 25.3332 23.1667H6.6665C6.31288 23.1667 5.97374 23.0262 5.7237 22.7762C5.47365 22.5261 5.33317 22.187 5.33317 21.8333V16.5C5.33317 16.1464 5.47365 15.8073 5.7237 15.5572C5.97374 15.3072 6.31288 15.1667 6.6665 15.1667H25.3332C25.6868 15.1667 26.0259 15.3072 26.276 15.5572C26.526 15.8073 26.6665 16.1464 26.6665 16.5V21.8333ZM22.1598 17.94C21.9944 17.9999 21.8441 18.0954 21.7197 18.2199C21.5953 18.3443 21.4997 18.4946 21.4398 18.66C21.3428 18.9023 21.3191 19.1678 21.3716 19.4234C21.424 19.6791 21.5503 19.9138 21.7349 20.0983C21.9194 20.2829 22.1541 20.4092 22.4098 20.4616C22.6654 20.5141 22.9309 20.4903 23.1732 20.3933C23.3386 20.3335 23.4889 20.2379 23.6133 20.1135C23.7378 19.9891 23.8333 19.8388 23.8932 19.6733C23.9678 19.5151 24.0043 19.3416 23.9998 19.1667C23.9949 18.8137 23.8568 18.4755 23.6132 18.22C23.4257 18.035 23.1876 17.9097 22.9289 17.8598C22.6703 17.81 22.4027 17.8379 22.1598 17.94ZM17.3332 17.8333H14.6665C14.3129 17.8333 13.9737 17.9738 13.7237 18.2239C13.4736 18.4739 13.3332 18.8131 13.3332 19.1667C13.3332 19.5203 13.4736 19.8594 13.7237 20.1095C13.9737 20.3595 14.3129 20.5 14.6665 20.5H17.3332C17.6868 20.5 18.0259 20.3595 18.276 20.1095C18.526 19.8594 18.6665 19.5203 18.6665 19.1667C18.6665 18.8131 18.526 18.4739 18.276 18.2239C18.0259 17.9738 17.6868 17.8333 17.3332 17.8333Z"
                fill="#DE3333"
              />
            </g>
          </svg>
          <div className={`text-2xl font-bold text-red-600 ${avenirLtPro.className}`}>
            Dealership
          </div>
        </div>
        <nav className={`${isOpen ? "w-full mt-8" : "hidden lg:block"}`}>
          <ul className={`flex items-center w-full justify-center gap-[30px] ${isOpen ? "flex-col gap-[8px] items-baseline " : ""}`}>
            {menuLink.map((link) => (
              <li key={link.label} className={`${isOpen ? "w-full" : ""}`}>
                <Link
                  href=""
                  onClick={handleClose}
                  className={`text-base block font-medium text-neutral-100 ${inter.className} ${isOpen ? "text-black px-[8px] py-[12px] block w-full lg:text-neutral-100" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-start gap-5">
          <div className="flex items-start justify-start gap-2.5">
            <Link
              href=""
              className="hidden items-start justify-start gap-2 p-2 lg:flex"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="u:search-alt">
                  <path
                    id="Vector"
                    d="M21.07 17.33L19 15.21C18.5547 14.7868 17.9931 14.5063 17.3872 14.4047C16.7813 14.3032 16.1589 14.3851 15.6 14.64L14.7 13.74C15.7605 12.3229 16.2449 10.5567 16.0555 8.79684C15.8662 7.037 15.0172 5.41423 13.6794 4.2552C12.3417 3.09618 10.6145 2.48696 8.84565 2.55019C7.07678 2.61341 5.39754 3.34439 4.14596 4.59597C2.89438 5.84755 2.1634 7.5268 2.10017 9.29567C2.03695 11.0645 2.64617 12.7917 3.80519 14.1294C4.96421 15.4672 6.58699 16.3162 8.34683 16.5055C10.1067 16.6949 11.8729 16.2106 13.29 15.15L14.18 16.04C13.8951 16.5996 13.793 17.2346 13.8881 17.8553C13.9831 18.4761 14.2706 19.0513 14.71 19.5L16.83 21.62C17.3925 22.1818 18.155 22.4974 18.95 22.4974C19.745 22.4974 20.5075 22.1818 21.07 21.62C21.3557 21.3406 21.5828 21.0069 21.7378 20.6386C21.8928 20.2702 21.9726 19.8746 21.9726 19.475C21.9726 19.0754 21.8928 18.6798 21.7378 18.3114C21.5828 17.9431 21.3557 17.6094 21.07 17.33ZM12.59 13.09C11.8902 13.788 10.9993 14.2629 10.0297 14.4549C9.06017 14.6468 8.05549 14.547 7.14259 14.1682C6.2297 13.7894 5.44955 13.1485 4.9007 12.3265C4.35185 11.5046 4.05893 10.5384 4.05893 9.55C4.05893 8.56163 4.35185 7.59544 4.9007 6.77347C5.44955 5.95149 6.2297 5.31062 7.14259 4.93182C8.05549 4.55301 9.06017 4.45325 10.0297 4.64515C10.9993 4.83706 11.8902 5.312 12.59 6.01C13.0556 6.47446 13.4251 7.02621 13.6771 7.63367C13.9292 8.24112 14.0589 8.89233 14.0589 9.55C14.0589 10.2077 13.9292 10.8589 13.6771 11.4663C13.4251 12.0738 13.0556 12.6255 12.59 13.09ZM19.66 20.16C19.567 20.2537 19.4564 20.3281 19.3346 20.3789C19.2127 20.4297 19.082 20.4558 18.95 20.4558C18.818 20.4558 18.6873 20.4297 18.5654 20.3789C18.4436 20.3281 18.333 20.2537 18.24 20.16L16.12 18.04C16.0263 17.947 15.9519 17.8364 15.9011 17.7146C15.8503 17.5927 15.8242 17.462 15.8242 17.33C15.8242 17.198 15.8503 17.0673 15.9011 16.9454C15.9519 16.8236 16.0263 16.713 16.12 16.62C16.213 16.5263 16.3236 16.4519 16.4454 16.4011C16.5673 16.3503 16.698 16.3242 16.83 16.3242C16.962 16.3242 17.0927 16.3503 17.2146 16.4011C17.3364 16.4519 17.447 16.5263 17.54 16.62L19.66 18.74C19.7537 18.833 19.8281 18.9436 19.8789 19.0654C19.9296 19.1873 19.9558 19.318 19.9558 19.45C19.9558 19.582 19.9296 19.7127 19.8789 19.8346C19.8281 19.9564 19.7537 20.067 19.66 20.16Z"
                    fill="#F7F7F7"
                  />
                </g>
              </svg>
            </Link>
            <Link href="" className="flex items-start justify-start gap-2 p-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="u:shopping-cart-alt">
                  <path
                    id="Vector"
                    d="M21.5 15.5C21.4978 14.8997 21.3155 14.3139 20.9768 13.8183C20.6381 13.3227 20.1585 12.9401 19.6 12.72L21.47 5.72001C21.5091 5.57093 21.5131 5.41484 21.4819 5.26392C21.4507 5.11301 21.385 4.97135 21.29 4.85001C21.1929 4.73632 21.0715 4.64585 20.9348 4.58528C20.798 4.52471 20.6495 4.49557 20.5 4.50001H6.8L6.47 3.24001C6.41263 3.02692 6.28638 2.83879 6.11093 2.70494C5.93547 2.5711 5.72068 2.49904 5.5 2.50001H3.5V4.50001H4.73L7.21 13.76C7.2686 13.9782 7.39934 14.1701 7.58092 14.3044C7.76251 14.4388 7.98424 14.5077 8.21 14.5H18.5C18.7652 14.5 19.0196 14.6054 19.2071 14.7929C19.3946 14.9804 19.5 15.2348 19.5 15.5C19.5 15.7652 19.3946 16.0196 19.2071 16.2071C19.0196 16.3947 18.7652 16.5 18.5 16.5H5.5C5.23478 16.5 4.98043 16.6054 4.79289 16.7929C4.60536 16.9804 4.5 17.2348 4.5 17.5C4.5 17.7652 4.60536 18.0196 4.79289 18.2071C4.98043 18.3947 5.23478 18.5 5.5 18.5H6.68C6.51554 18.9531 6.46269 19.4392 6.52593 19.9171C6.58917 20.395 6.76665 20.8506 7.04332 21.2454C7.31999 21.6401 7.68772 21.9624 8.11535 22.1849C8.54299 22.4074 9.01795 22.5235 9.5 22.5235C9.98205 22.5235 10.457 22.4074 10.8846 22.1849C11.3123 21.9624 11.68 21.6401 11.9567 21.2454C12.2334 20.8506 12.4108 20.395 12.4741 19.9171C12.5373 19.4392 12.4845 18.9531 12.32 18.5H14.68C14.5303 18.9126 14.4729 19.353 14.512 19.7902C14.551 20.2274 14.6856 20.6507 14.906 21.0302C15.1265 21.4098 15.4276 21.7363 15.788 21.9868C16.1485 22.2373 16.5595 22.4056 16.9921 22.48C17.4247 22.5543 17.8683 22.5328 18.2917 22.417C18.715 22.3012 19.1078 22.0939 19.4424 21.8097C19.7769 21.5255 20.045 21.1714 20.2277 20.7723C20.4105 20.3732 20.5034 19.9389 20.5 19.5C20.4981 18.9834 20.3602 18.4764 20.1 18.03C20.5276 17.7604 20.8802 17.3871 21.1249 16.9448C21.3697 16.5025 21.4987 16.0055 21.5 15.5ZM17.59 12.5H9L7.34 6.50001H19.2L17.59 12.5ZM9.5 20.5C9.30222 20.5 9.10888 20.4414 8.94443 20.3315C8.77998 20.2216 8.65181 20.0654 8.57612 19.8827C8.50043 19.7 8.48063 19.4989 8.51921 19.3049C8.5578 19.1109 8.65304 18.9328 8.79289 18.7929C8.93275 18.653 9.11093 18.5578 9.30491 18.5192C9.49889 18.4806 9.69996 18.5004 9.88268 18.5761C10.0654 18.6518 10.2216 18.78 10.3315 18.9444C10.4414 19.1089 10.5 19.3022 10.5 19.5C10.5 19.7652 10.3946 20.0196 10.2071 20.2071C10.0196 20.3947 9.76522 20.5 9.5 20.5ZM17.5 20.5C17.3022 20.5 17.1089 20.4414 16.9444 20.3315C16.78 20.2216 16.6518 20.0654 16.5761 19.8827C16.5004 19.7 16.4806 19.4989 16.5192 19.3049C16.5578 19.1109 16.653 18.9328 16.7929 18.7929C16.9327 18.653 17.1109 18.5578 17.3049 18.5192C17.4989 18.4806 17.7 18.5004 17.8827 18.5761C18.0654 18.6518 18.2216 18.78 18.3315 18.9444C18.4414 19.1089 18.5 19.3022 18.5 19.5C18.5 19.7652 18.3946 20.0196 18.2071 20.2071C18.0196 20.3947 17.7652 20.5 17.5 20.5Z"
                    fill="#F7F7F7"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <Link
            href=""
            className="hidden items-center justify-center gap-2 border border-neutral-100 px-6 py-4 lg:flex"
          >
            <span
              className={`text-base font-medium text-neutral-100 ${inter.className}`}
            >
              Explore Vehicles
            </span>
          </Link>
          <div className="lg:hidden">
            <svg
              onClick={handleClose}
              className={`${isOpen ? "block absolute top-[8px] right-0" : "hidden"}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.40994 8L15.7099 1.71C15.8982 1.5217 16.004 1.2663 16.004 1C16.004 0.733701 15.8982 0.478306 15.7099 0.290002C15.5216 0.101699 15.2662 -0.00408936 14.9999 -0.00408936C14.7336 -0.00408936 14.4782 0.101699 14.2899 0.290002L7.99994 6.59L1.70994 0.290002C1.52164 0.101699 1.26624 -0.00408912 0.999939 -0.00408912C0.733637 -0.00408912 0.478243 0.101699 0.289939 0.290002C0.101635 0.478306 -0.00415253 0.733701 -0.00415254 1C-0.00415254 1.2663 0.101635 1.5217 0.289939 1.71L6.58994 8L0.289939 14.29C0.196211 14.383 0.121816 14.4936 0.0710478 14.6154C0.0202791 14.7373 -0.00585938 14.868 -0.00585938 15C-0.00585938 15.132 0.0202791 15.2627 0.0710478 15.3846C0.121816 15.5064 0.196211 15.617 0.289939 15.71C0.382902 15.8037 0.493503 15.8781 0.615362 15.9289C0.737221 15.9797 0.867927 16.0058 0.999939 16.0058C1.13195 16.0058 1.26266 15.9797 1.38452 15.9289C1.50638 15.8781 1.61698 15.8037 1.70994 15.71L7.99994 9.41L14.2899 15.71C14.3829 15.8037 14.4935 15.8781 14.6154 15.9289C14.7372 15.9797 14.8679 16.0058 14.9999 16.0058C15.132 16.0058 15.2627 15.9797 15.3845 15.9289C15.5064 15.8781 15.617 15.8037 15.7099 15.71C15.8037 15.617 15.8781 15.5064 15.9288 15.3846C15.9796 15.2627 16.0057 15.132 16.0057 15C16.0057 14.868 15.9796 14.7373 15.9288 14.6154C15.8781 14.4936 15.8037 14.383 15.7099 14.29L9.40994 8Z"
                fill="black"
              />
            </svg>
            <svg
              onClick={handleOpen}
              className={`${isOpen ? "hidden" : "block"}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="u:bars">
                <path
                  id="Vector"
                  d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                  fill="#F7F7F7"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
