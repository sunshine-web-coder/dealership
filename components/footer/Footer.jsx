import { avenirLtPro, inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="h-full w-full bg-neutral-800 px-8 pb-[32px] md:pb-[120px] pt-[32px] md:pt-10 border">
      <div className="inner_section flex flex-col items-start justify-start gap-0 md:gap-5">
        <div className="flex items-center justify-center md:justify-start gap-2">
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
        <hr className="my-[45px] w-full border border-neutral-100 md:my-[40px]" />
        <div className="flex h-full w-full flex-col gap-[45px] lg:gap-0 items-center justify-between lg:h-[146px] lg:flex-row lg:items-start">
          <div className="flex h-full lg:h-[137px] flex-col items-start pb-[45px] lg:pb-0 justify-start gap-5 border-b border-r-0 lg:border-r lg:border-b-0 w-full lg:w-full">
            <div className="flex w-[211px] flex-col items-start justify-start gap-5">
              <div className="flex items-start justify-start gap-2 self-stretch">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z"
                    fill="#F7F7F7"
                  />
                </svg>
                <div className={`shrink grow basis-0 text-base font-medium leading-normal text-neutral-100 ${inter.className}`}>
                  17, kellington highway Lagos, Nigeria
                </div>
              </div>
              <div className="flex items-start justify-start gap-2 self-stretch">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4401 12.9999C19.2201 12.9999 18.9901 12.9299 18.7701 12.8799C18.3246 12.7817 17.8868 12.6514 17.4601 12.4899C16.9962 12.3211 16.4862 12.3299 16.0284 12.5145C15.5706 12.6991 15.1972 13.0465 14.9801 13.4899L14.7601 13.9399C13.7861 13.398 12.8911 12.7251 12.1001 11.9399C11.3149 11.1489 10.6419 10.2539 10.1001 9.27987L10.5201 8.99987C10.9635 8.78278 11.3109 8.4094 11.4955 7.95156C11.6801 7.49372 11.6889 6.98378 11.5201 6.51987C11.3613 6.09229 11.231 5.65467 11.1301 5.20987C11.0801 4.98987 11.0401 4.75987 11.0101 4.52987C10.8887 3.82549 10.5197 3.18761 9.96972 2.73111C9.41972 2.2746 8.7248 2.02948 8.0101 2.03987H5.0101C4.57913 2.03582 4.15235 2.12468 3.75881 2.3004C3.36527 2.47612 3.01421 2.73456 2.72953 3.05815C2.44485 3.38174 2.23324 3.76286 2.10909 4.17558C1.98494 4.5883 1.95118 5.02293 2.0101 5.44987C2.54284 9.63925 4.45613 13.5317 7.44775 16.5125C10.4394 19.4933 14.3388 21.3924 18.5301 21.9099H18.9101C19.6475 21.9109 20.3595 21.6404 20.9101 21.1499C21.2265 20.8669 21.4792 20.52 21.6516 20.1322C21.8239 19.7443 21.9121 19.3243 21.9101 18.8999V15.8999C21.8979 15.2053 21.6449 14.5364 21.1944 14.0075C20.744 13.4786 20.1239 13.1225 19.4401 12.9999ZM19.9401 18.9999C19.9399 19.1419 19.9095 19.2822 19.8509 19.4115C19.7923 19.5408 19.7068 19.6562 19.6001 19.7499C19.4884 19.8463 19.3577 19.9184 19.2165 19.9615C19.0753 20.0045 18.9267 20.0176 18.7801 19.9999C15.035 19.5197 11.5563 17.8064 8.89282 15.1302C6.2293 12.454 4.53251 8.96721 4.0701 5.21987C4.05419 5.07339 4.06813 4.9252 4.1111 4.78426C4.15407 4.64332 4.22517 4.51256 4.3201 4.39987C4.41381 4.2932 4.52916 4.20771 4.65848 4.14909C4.7878 4.09046 4.92812 4.06005 5.0701 4.05987H8.0701C8.30265 4.05469 8.52972 4.13075 8.71224 4.27494C8.89476 4.41913 9.02131 4.62244 9.0701 4.84987C9.1101 5.1232 9.1601 5.3932 9.2201 5.65987C9.33562 6.18701 9.48936 6.70505 9.6801 7.20987L8.2801 7.85987C8.1604 7.91479 8.05272 7.99281 7.96326 8.08946C7.87379 8.18611 7.8043 8.29948 7.75877 8.42306C7.71324 8.54664 7.69257 8.678 7.69795 8.80959C7.70332 8.94118 7.73464 9.07041 7.7901 9.18987C9.2293 12.2726 11.7073 14.7507 14.7901 16.1899C15.0336 16.2899 15.3066 16.2899 15.5501 16.1899C15.6748 16.1453 15.7894 16.0763 15.8873 15.9871C15.9851 15.8978 16.0643 15.79 16.1201 15.6699L16.7401 14.2699C17.2571 14.4547 17.7847 14.6084 18.3201 14.7299C18.5868 14.7899 18.8568 14.8399 19.1301 14.8799C19.3575 14.9287 19.5608 15.0552 19.705 15.2377C19.8492 15.4202 19.9253 15.6473 19.9201 15.8799L19.9401 18.9999Z"
                    fill="#F7F7F7"
                  />
                </svg>
                <div className={`shrink grow basis-0 text-base font-medium leading-normal text-neutral-100 ${inter.className}`}>
                  +2348-96748011
                </div>
              </div>
            </div>
            <div className="flex w-[211px] items-start justify-start gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1199 5.32003H16.9999V2.14003C16.0896 2.04538 15.175 1.99865 14.2599 2.00003C11.5399 2.00003 9.67986 3.66003 9.67986 6.70003V9.32003H6.60986V12.88H9.67986V22H13.3599V12.88H16.4199L16.8799 9.32003H13.3599V7.05003C13.3599 6.00003 13.6399 5.32003 15.1199 5.32003Z"
                  fill="#F7F7F7"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9.52C11.5095 9.52 11.03 9.66545 10.6222 9.93795C10.2144 10.2105 9.89648 10.5978 9.70878 11.0509C9.52107 11.5041 9.47196 12.0028 9.56765 12.4838C9.66334 12.9649 9.89954 13.4068 10.2464 13.7536C10.5932 14.1005 11.0351 14.3367 11.5162 14.4323C11.9972 14.528 12.4959 14.4789 12.9491 14.2912C13.4022 14.1035 13.7895 13.7856 14.062 13.3778C14.3346 12.97 14.48 12.4905 14.48 12C14.48 11.6743 14.4159 11.3518 14.2912 11.0509C14.1666 10.7501 13.9839 10.4767 13.7536 10.2464C13.5233 10.0161 13.2499 9.83341 12.9491 9.70878C12.6482 9.58415 12.3257 9.52 12 9.52ZM21.93 7.07C21.9247 6.29776 21.7825 5.53257 21.51 4.81C21.3093 4.28126 20.9987 3.80109 20.5988 3.40119C20.1989 3.00128 19.7187 2.69072 19.19 2.49C18.4674 2.21746 17.7022 2.07526 16.93 2.07C15.64 2 15.26 2 12 2C8.74 2 8.36 2 7.07 2.07C6.29776 2.07526 5.53257 2.21746 4.81 2.49C4.28126 2.69072 3.80109 3.00128 3.40119 3.40119C3.00128 3.80109 2.69072 4.28126 2.49 4.81C2.21746 5.53257 2.07526 6.29776 2.07 7.07C2 8.36 2 8.74 2 12C2 15.26 2 15.64 2.07 16.93C2.08076 17.705 2.22277 18.4725 2.49 19.2C2.68983 19.7263 3.00013 20.2037 3.4 20.6C3.79819 21.0023 4.27939 21.3129 4.81 21.51C5.53257 21.7825 6.29776 21.9247 7.07 21.93C8.36 22 8.74 22 12 22C15.26 22 15.64 22 16.93 21.93C17.7022 21.9247 18.4674 21.7825 19.19 21.51C19.7206 21.3129 20.2018 21.0023 20.6 20.6C20.9999 20.2037 21.3102 19.7263 21.51 19.2C21.7823 18.4739 21.9244 17.7055 21.93 16.93C22 15.64 22 15.26 22 12C22 8.74 22 8.36 21.93 7.07ZM19.39 15.07C19.3579 15.6871 19.2262 16.295 19 16.87C18.8059 17.3497 18.5173 17.7854 18.1514 18.1514C17.7854 18.5173 17.3497 18.8059 16.87 19C16.2895 19.2136 15.6783 19.3318 15.06 19.35C14.27 19.35 14.06 19.35 12 19.35C9.94 19.35 9.73 19.35 8.94 19.35C8.32173 19.3318 7.71049 19.2136 7.13 19C6.6341 18.8157 6.18628 18.5217 5.82 18.14C5.45767 17.7813 5.17784 17.3479 5 16.87C4.78556 16.2901 4.67061 15.6782 4.66 15.06C4.66 14.27 4.66 14.06 4.66 12C4.66 9.94 4.66 9.73 4.66 8.94C4.67061 8.32183 4.78556 7.70988 5 7.13C5.18428 6.6341 5.47827 6.18628 5.86 5.82C6.22033 5.45962 6.65326 5.18009 7.13 5C7.71049 4.78641 8.32173 4.66821 8.94 4.65C9.73 4.65 9.94 4.65 12 4.65C14.06 4.65 14.27 4.65 15.06 4.65C15.6783 4.66821 16.2895 4.78641 16.87 5C17.3659 5.18428 17.8137 5.47827 18.18 5.86C18.5423 6.21875 18.8222 6.65213 19 7.13C19.2136 7.71049 19.3318 8.32173 19.35 8.94C19.35 9.73 19.35 9.94 19.35 12C19.35 14.06 19.42 14.27 19.39 15.06V15.07ZM17.79 7.63C17.6709 7.30698 17.4832 7.01364 17.2398 6.77021C16.9964 6.52678 16.703 6.33906 16.38 6.22C15.9365 6.06626 15.4693 5.99179 15 6C14.22 6 14 6 12 6C10 6 9.78 6 9 6C8.52827 6.00461 8.06107 6.09263 7.62 6.26C7.30193 6.37366 7.01169 6.55371 6.76858 6.7882C6.52547 7.02269 6.33506 7.30624 6.21 7.62C6.06478 8.06537 5.99383 8.5316 6 9C6 9.78 6 10 6 12C6 14 6 14.22 6 15C6.00991 15.4712 6.09777 15.9375 6.26 16.38C6.37906 16.703 6.56678 16.9964 6.81021 17.2398C7.05364 17.4832 7.34698 17.6709 7.67 17.79C8.09667 17.9469 8.54565 18.0347 9 18.05C9.78 18.05 10 18.05 12 18.05C14 18.05 14.22 18.05 15 18.05C15.4717 18.0454 15.9389 17.9574 16.38 17.79C16.703 17.6709 16.9964 17.4832 17.2398 17.2398C17.4832 16.9964 17.6709 16.703 17.79 16.38C17.9574 15.9389 18.0454 15.4717 18.05 15C18.05 14.22 18.05 14 18.05 12C18.05 10 18.05 9.78 18.05 9C18.0503 8.5278 17.9621 8.05972 17.79 7.62V7.63ZM12 15.82C11.4988 15.82 11.0026 15.7211 10.5397 15.529C10.0768 15.3369 9.6563 15.0554 9.30238 14.7005C8.94846 14.3457 8.66803 13.9245 8.47714 13.4611C8.28626 12.9977 8.18868 12.5012 8.19 12C8.19 11.2441 8.4143 10.5051 8.83449 9.87669C9.25468 9.24828 9.85187 8.75866 10.5505 8.46983C11.2491 8.181 12.0177 8.10594 12.7589 8.25415C13.5002 8.40236 14.1808 8.76717 14.7147 9.30241C15.2485 9.83764 15.6116 10.5192 15.7578 11.2609C15.9041 12.0026 15.827 12.771 15.5363 13.4688C15.2457 14.1666 14.7545 14.7625 14.125 15.1811C13.4955 15.5996 12.7559 15.822 12 15.82ZM16 8.93C15.7789 8.9066 15.5744 8.80222 15.4257 8.63697C15.277 8.47172 15.1947 8.25729 15.1947 8.035C15.1947 7.81271 15.277 7.59828 15.4257 7.43303C15.5744 7.26778 15.7789 7.1634 16 7.14C16.2211 7.1634 16.4256 7.26778 16.5743 7.43303C16.723 7.59828 16.8053 7.81271 16.8053 8.035C16.8053 8.25729 16.723 8.47172 16.5743 8.63697C16.4256 8.80222 16.2211 8.9066 16 8.93Z"
                  fill="#F7F7F7"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.80021C21.2483 6.1263 20.4534 6.34187 19.64 6.44021C20.4982 5.92753 21.1413 5.12099 21.45 4.17021C20.6436 4.65027 19.7608 4.98851 18.84 5.17021C18.2245 4.50278 17.405 4.05851 16.5098 3.90706C15.6147 3.75562 14.6945 3.90557 13.8938 4.3334C13.093 4.76123 12.4569 5.44274 12.0852 6.27105C11.7135 7.09935 11.6273 8.0276 11.84 8.91021C10.2094 8.82774 8.61444 8.40316 7.15865 7.66407C5.70287 6.92498 4.41885 5.8879 3.39 4.62021C3.02914 5.25038 2.83952 5.96403 2.84 6.69021C2.83872 7.36459 3.00422 8.02883 3.32176 8.62377C3.63929 9.21872 4.09902 9.72592 4.66 10.1002C4.00798 10.0825 3.36989 9.90751 2.8 9.59021V9.64021C2.80489 10.5851 3.13599 11.4993 3.73731 12.2282C4.33864 12.957 5.17326 13.4559 6.1 13.6402C5.74326 13.7488 5.37287 13.806 5 13.8102C4.74189 13.8072 4.48442 13.7838 4.23 13.7402C4.49391 14.553 5.00462 15.2634 5.69107 15.7724C6.37753 16.2814 7.20558 16.5638 8.06 16.5802C6.6172 17.7155 4.83588 18.3351 3 18.3402C2.66574 18.3413 2.33174 18.3213 2 18.2802C3.87443 19.4905 6.05881 20.1329 8.29 20.1302C9.82969 20.1462 11.3571 19.8552 12.7831 19.2743C14.2091 18.6934 15.505 17.8341 16.5952 16.7467C17.6854 15.6593 18.548 14.3656 19.1326 12.9411C19.7172 11.5166 20.012 9.98994 20 8.45021C20 8.28021 20 8.10021 20 7.92021C20.7847 7.33502 21.4615 6.61763 22 5.80021Z"
                  fill="#F7F7F7"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 pb-[45px] border-b md:border-b-0 gap-y-[78px] md:flex h-full w-full lg:w-[3000px] justify-between items-start">
            <div className="flex h-full md:h-[137px] flex-col items-center justify-start gap-5 border-r-0 md:border-r w-full">
              <h3 className={`text-2xl font-bold text-neutral-100 ${avenirLtPro.className}`}>
                Home
              </h3>
              <ul className="flex flex-col items-center justify-center gap-5">
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Demo
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Shop
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex h-full md:h-[137px] flex-col items-center justify-start gap-5 border-r-0 md:border-r w-full">
              <h3
                className={`text-2xl font-bold text-neutral-100 ${avenirLtPro.className}`}
              >
                Shop
              </h3>
              <ul className="flex flex-col items-center justify-center gap-5">
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Sport cars
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Electric
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Hybrid
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex col-span-2 flex-col items-center md:items-end justify-center gap-5 w-full pl-0 lg:pl-[120px]">
              <h3
                className={`text-2xl font-bold text-neutral-100 ${avenirLtPro.className}`}
              >
                Company
              </h3>
              <ul className="flex flex-col items-center justify-center gap-5">
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    About us
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Our services
                  </Link>
                </li>
                <li className="flex items-center justify-center gap-2.5">
                  <Link
                    href=""
                    className={`text-base font-medium text-neutral-100 ${inter.className}`}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`mt-[45px] md:mt-20px] flex items-start justify-start gap-2.5 text-base font-medium leading-normal text-neutral-100 ${inter.className}`}>
          <p>Copyright</p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="u:copyright">
              <path
                id="Vector"
                d="M11 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7957 7 13 7H11C10.2044 7 9.44129 7.31607 8.87868 7.87868C8.31607 8.44129 8 9.20435 8 10V14C8 14.7956 8.31607 15.5587 8.87868 16.1213C9.44129 16.6839 10.2044 17 11 17H13C13.7957 17 14.5587 16.6839 15.1213 16.1213C15.6839 15.5587 16 14.7956 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13C14.7348 13 14.4804 13.1054 14.2929 13.2929C14.1054 13.4804 14 13.7348 14 14C14 14.2652 13.8946 14.5196 13.7071 14.7071C13.5196 14.8946 13.2652 15 13 15H11C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                fill="#F7F7F7"
              />
            </g>
          </svg>
          <p>Dealership</p>
        </div>
      </div>
    </div>
  );
}
