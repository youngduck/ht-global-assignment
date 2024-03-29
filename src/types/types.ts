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
export interface INews {
  title: string;
  content: string;
}
export interface IStore {
  singer: string;
}
export interface ICharge {
  price: number;
  point: number;
}

export interface IResponseData
  extends IWhook,
    IEvent,
    IChart,
    INews,
    IStore,
    ICharge {}
