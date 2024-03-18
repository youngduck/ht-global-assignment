export interface IChart {
  singer: string;
  title: string;
  id?: string;
  rank: number;
}

export interface IResponseData {
  next: null | number;
  data: IChart[];
}

export interface IBannerData {
  src: string;
  title: string;
  href: string;
  duration: {
    startDate: String;
    endDate: String;
  };
}
