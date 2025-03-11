import { Booking } from "../models/Booking";
import { CustomerCreation } from "../models/CustomerCreation";
import { CustomerInformation } from "../models/CustomerInformation";
import { deleteAPI, getAPI, postAPI, putAPI } from "./serviceBase";
import { IBooking } from "../models/IBooking";
import { ICustomerCreation } from "../models/ICustomerCreation";
import { IBookingResponse } from "../models/IBookingResponse";
import { IBookingsResponse } from "../models/IBookings";
import { BookingCreation } from "../models/BookingCreation";

const BASE_URL: string = "https://school-restaurant-api.azurewebsites.net";

export const RESTAURANT_ID: string = "67ab4ef06c6da27544081a64";

// Hämtar resturangen från api:t och retunerar det som ett json-objekt samt skriver det till consolen
export const getRestaurant = async () => {
  const url = `${BASE_URL}/restaurant/${RESTAURANT_ID}`;
  const data = await getAPI(url);
  console.log(data);
  return data;
};

// Funktion som skapar en kund
export const postCustomer = async (newCustomer: CustomerCreation) => {
  console.log(newCustomer);
  const url = `${BASE_URL}/customer/create`;
  const response = await postAPI<ICustomerCreation, ICustomerCreation>(
    url,
    newCustomer
  );
  console.log(response);
  const createdCustomer = new CustomerInformation(
    `${response}`,
    newCustomer.name,
    newCustomer.lastname,
    newCustomer.email,
    newCustomer.phone
  );
  // console.log(createdCustomer);
  return response;
};

// Funktion som hämtar en kund via dess ID
export const getCustomer = async (customerID: string) => {
  const url: string = `${BASE_URL}/customer/${customerID}`;
  const response = await getAPI(url);
  // console.log(`response här är getCustomer`);
  // console.log(response);
  return response;
};

// Funktion som skapar en bokning
export const postBooking = async (newBooking: BookingCreation) => {
  const url: string = `${BASE_URL}/booking/create`;
  const response = await postAPI<BookingCreation, IBookingResponse>(
    url,
    newBooking
  );
  // console.log("Här nedan är insertedId");
  // console.log(response.insertedId);

  return response.insertedId;
};

// Funktion som hämtar en bokning via dess ID
export const getBooking = async (bookingID: string) => {
  const url: string = `${BASE_URL}/booking/${bookingID}`;
  const response = await getAPI<IBooking[]>(url);
  console.log("Raw API Response:", response);
  // console.log(response);
  return response[0];
};

// Funktion som uppdaterar en bokning via dess ID samt skickar med den nya bokningsinformationen
export const putBooking = async (bookingID: string, booking: Booking) => {
  const url: string = `${BASE_URL}/booking/update/${bookingID}`;
  const response = await putAPI<Booking, IBooking>(url, booking);
  console.log(response);
  return response;
};

// Funktion som tar bort en bokning
export const deleteBooking = async (bookingID: string) => {
  const url: string = `${BASE_URL}/booking/delete/${bookingID}`;
  const response = await deleteAPI(url);
  console.log(response);
  return response;
};

// Funktion som visar samtliga bokningar
export const getBookings = async () => {
  const url: string = `${BASE_URL}/booking/restaurant/${RESTAURANT_ID}`;
  const response = await getAPI<IBookingsResponse>(url);
  console.log("Raw API Response:", response);
  return response;
};
