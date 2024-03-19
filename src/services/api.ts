import type { IResponseData } from "@/types/types";
import { baseUrl } from "@/constants/links";

export const fetchChartData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/chart?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};

export const fetchWhookData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/whook?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};

export const fetchEventData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/event?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};

export const fetchNewsData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/news?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};
export const fetchStoreData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/store?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};

export const fetchChargeData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/charge?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [] as IResponseData[];
  }
};
