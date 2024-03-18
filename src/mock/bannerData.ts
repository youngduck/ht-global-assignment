import htaward from "@assets/images/banner/htmusicaward.jpg";
import whosfan from "@assets/images/banner/whosfan.jpg";
import htchart from "@assets/images/banner/htchart.png";
import type { IBannerData } from "@/types/types";

export const bannerDatas: IBannerData[] = [
  {
    src: whosfan,
    title: "[whosfan] global k-pop fandom platform",
    href: "https://www.whosfan.com/",
    duration: {
      startDate: "2024-03-01",
      endDate: "2024-03-15",
    },
  },
  {
    src: htaward,
    title: "[한터뮤직어워즈 2022] 한터뮤직 30주년",
    href: "https://awards.hanteo.com/?l=ko&m=false",
    duration: {
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
  },
  {
    src: htchart,
    title: "[한터차트] 국가별 차트 OPEN",
    href: "https://www.hanteonews.com/",
    duration: {
      startDate: "2024-05-01",
      endDate: "2024-05-31",
    },
  },
];
