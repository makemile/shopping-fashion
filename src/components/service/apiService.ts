import axios from "axios";
import { Data } from "../../types/dataTypes";
import { URLAPI } from "../../utils/Api";

export const fetchProducts = async (): Promise<Data[]> => {
  try {
    const response = await axios.get<Data[]>(URLAPI);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error capturado:", error.message);
    }
    throw error;
  } finally {
    console.log("succes");
  }
};

fetchProducts().catch((err) => console.error("error manejado", err));
