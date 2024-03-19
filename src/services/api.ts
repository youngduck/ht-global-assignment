import type { IResponseData } from "@/types/types";

const baseUrl = "https://vercel-json-server-livid.vercel.app";

export const fetchChartData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/chart?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};

export const fetchWhookData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/whook?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};

export const fetchEventData = async (page: number) => {
  try {
    const response = await fetch(baseUrl + "/event?_page=" + page);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const responseData: IResponseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: [] };
  }
};
