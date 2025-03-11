import "./App.scss";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import {
  deleteBooking,
  getBooking,
  getBookings,
  getCustomer,
  getRestaurant,
  postCustomer,
  RESTAURANT_ID,
} from "./services/apiCRUD";
import { CustomerCreation } from "./models/CustomerCreation";
import { CustomerInformation } from "./models/CustomerInformation";
import { BookingCreation } from "./models/BookingCreation";
import { Booking } from "./models/Booking";
import { IBookingCreation } from "./models/IBookingCreation";
import { IBookingResponse } from "./models/IBookingResponse";
import {
  convertIBooking,
  createBooking,
  getCustomerInfo,
} from "./services/serviceFunktions";
import { deleteAPI } from "./services/serviceBase";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

/*

// resturang-id 67ab4ef06c6da27544081a64
const response = await fetch(
  "https://school-restaurant-api.azurewebsites.net/restaurant/67ab4ef06c6da27544081a64"
  // {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "Verona",
  //     address: {
  //       street: "Strandvägen 1",
  //       zip: "114 51",
  //       city: "Stockholm",
  //     },
  //   }),
  // }
);
const data = await response.json();

console.log(data);

*/

//TESTER

console.log(RESTAURANT_ID);
// console.log(getRestaurant());
const restaurantID: string = "67ab4ef06c6da27544081a64";
let testKund = new CustomerCreation(
  "Anna",
  "Andersson",
  "anna.andersson@email.com",
  "070-123 45 67"
);
// const testKundID = await postCustomer(testKund);
// const testKundKomplett: CustomerInformation = new CustomerInformation(
//   testKundID,
//   testKund.name,
//   testKund.lastname,
//   testKund.email,
//   testKund.phone
// );
// console.log(testKundID);
// console.log(testKundKomplett);

// const gettingCustomer: CustomerInformation = await getCustomer(testKundID);

export const testCreateBooking = new BookingCreation(
  restaurantID,
  "2025-03-03",
  "18",
  4,
  testKund
);

console.log(testCreateBooking);

createBooking(testCreateBooking);
// Här finns bokningsId
const id: string = await createBooking(testCreateBooking);
console.log("Här nedan är BookingId");
console.log(id);

console.log(getBooking(id));

const booking: Booking = convertIBooking(await getBooking(id));
console.log(booking);

console.log(getCustomerInfo(booking.customerId));
getBookings();

console.log(booking);

// deleteBooking("67b73dfd2310a0842bcbec8b");

// console.log();

// SLUT TESTER

export default App;
