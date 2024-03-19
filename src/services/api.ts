import type { IResponseData } from "@/types/types";
import { apiKey, serverUrl } from "@/constants/constants";

const fetchData = async (
  apiKey: string,
  page: number
): Promise<IResponseData[]> => {
  try {
    const response = await fetch(`${serverUrl}${apiKey}${page}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchChartData = (page: number) => fetchData(apiKey.chart, page);
export const fetchWhookData = (page: number) => fetchData(apiKey.whook, page);
export const fetchEventData = (page: number) => fetchData(apiKey.event, page);
export const fetchNewsData = (page: number) => fetchData(apiKey.news, page);
export const fetchStoreData = (page: number) => fetchData(apiKey.store, page);
export const fetchChargeData = (page: number) => fetchData(apiKey.charge, page);
