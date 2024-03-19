export interface IBannerData {
  src: string;
  title: string;
  href: string;
  duration: {
    startDate: String;
    endDate: String;
  };
}

export interface IChart {
  singer: string;
  title: string;
  rank: number;
}

export interface IWhook {
  singer: string;
  idx: number;
}

export interface IEvent {
  title: string;
  content: string;
}

export interface IResponseData extends IWhook, IEvent, IChart {}
