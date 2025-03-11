import { CustomerInformation } from "../models/CustomerInformation";
import { Restaurant } from "../models/Restaurant";
import { Booking } from "../models/Booking";

// testobjekt att använda sig av för att kunna implementera
let testBooking = new Booking(
  "623b89d56396b96c57bde7d2",
  "623b89d56396b96c57bde7d4",
  "2025-03-01",
  "18",
  2,
  "623b89d56396b96c57bde7d3"
);

let testCustomer = new CustomerInformation(
  "623b89d56396b96c57bde7d3",
  "Anna",
  "Andersson",
  "anna.andersson@gmail.com",
  "0701234567"
);

let testRestaurant = new Restaurant(
  "623b89d56396b96c57bde7d4",
  "Verona",
  "Strandvägen 1",
  "114 51",
  "Stockholm"
);

const testBookings: Booking[] = [testBooking];

export const getTestBooking = () => {
  return testBooking;
};

export const getTestCustomer = () => {
  return testCustomer;
};

export const getTestRestaurant = () => {
  return testRestaurant;
};

export const getTestBookings = () => {
  return testBookings;
};

export const setBooking = (bookingOld: Booking, bookingNew: Booking) => {
  bookingOld = bookingNew;
};

export const testCustomers: CustomerInformation[] = [
  new CustomerInformation(
    "623b89d56396b96c57bde7d3",
    "Anna",
    "Andersson",
    "anna.andersson@gmail.com",
    "0701234567"
  ),
  new CustomerInformation(
    "623b89d56396b96c57bde7d5",
    "Erik",
    "Eriksson",
    "erik.eriksson@gmail.com",
    "0709876543"
  ),
];

// Funktion för att hitta en kund baserat på ID
export const getCustomerById = (id: string): CustomerInformation | undefined =>
  testCustomers.find((customer) => customer.id === id);
