import { Inter, Sofia_Sans, Headland_One } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const sofia_sans = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const headland_one = Headland_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const avenirLtPro = localFont({
  src: [
    {
      path: './fonts/avenir-lt-pro-cdnfonts/AvenirLTProBlack.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})