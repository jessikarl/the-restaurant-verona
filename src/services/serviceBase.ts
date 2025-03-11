import axios from "axios";
import { IBooking } from "../models/IBooking";

export const getAPI = async <T>(url: string) => {
  try {
    const response = await axios.get<T>(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Här kom ingen data fram när det skulle hämtas!", error);
    throw error;
  }
};

export const postAPI = async <T, S>(url: string, object: T) => {
  try {
    const response = await axios.post<S>(url, object);
    const data = response.data;
    console.log(response.data);
    return data;
  } catch (error) {
    console.error("Något gick snett när det skulle skapas något!", error);
    throw error;
  }
};

export const putAPI = async <T, S>(url: string, object: T) => {
  try {
    const response = await axios.put<S>(url, object);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Här gick det inte att updatera ett objekt!", error);
    throw error;
  }
};

export const deleteAPI = async (url: string) => {
  try {
    const response = await axios.delete(url);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error("Här gick det inte att ta bort ett objekt!", error);

    if (error.response) {
      throw new Error();
    } else {
    }

    throw error;
  }
};
