import { Booking } from "../models/Booking";
import { BookingCreation } from "../models/BookingCreation";
import { CustomerInformation } from "../models/CustomerInformation";
import { IBooking } from "../models/IBooking";
import { IBookingsResponse } from "../models/IBookings";
import { getCustomer, postBooking } from "./apiCRUD";

// konverterar ett objekt från IBooking till ett Booking-objekt
// (skillnaden är attributet heter "id" istället för "_id" i Booking)
export const convertIBooking = (iBooking: IBooking): Booking => {
  return new Booking(
    iBooking._id,
    iBooking.restaurantId,
    iBooking.date,
    iBooking.time,
    iBooking.numberOfGuests,
    iBooking.customerId
  );
};

// funktion som hämtar boknings-Id efter att en bokning har skapats
export const createBooking = async (newBooking: BookingCreation) => {
  const bookingId: string = await postBooking(newBooking);

  //   console.log("här nedan är booking");
  //   console.log(bookingId);

  return bookingId;
};

// SKAPA funktion för att använda map på listan med bokningar
export const mapBookings = (bookings: IBookingsResponse) => {
  return;
};

export const getCustomerInfo = async (customerId: string) => {
  const customer: CustomerInformation[] = (await getCustomer(
    customerId
  )) as CustomerInformation[];
  // Use the customer variable here
  console.log("Här är customer");
  console.log(customer[0]);
  return customer[0];
};

