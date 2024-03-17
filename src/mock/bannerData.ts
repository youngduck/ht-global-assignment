import htaward from "@assets/images/htmusicaward.jpg";
import news from "@assets/images/hanteomusicaward.jpg";
import whosfan from "@assets/images/whosfan.jpg";

interface IBannerData {
  src: string;
  title: string;
  href: string;
  duration: {
    startDate: String;
    endDate: String;
  };
}

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
    src: news,
    title: "[한터뉴스] 한터뉴스 최신소식 보러가기",
    href: "https://www.hanteonews.com/",
    duration: {
      startDate: "2024-05-01",
      endDate: "2024-05-31",
    },
  },
];
