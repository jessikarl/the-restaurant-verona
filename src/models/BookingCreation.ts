import { CustomerCreation } from "./CustomerCreation";
import { IBookingCreation } from "./IBookingCreation";

export class BookingCreation implements IBookingCreation {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: CustomerCreation;

  constructor(
    restaurantId: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customer: CustomerCreation
  ) {
    this.restaurantId = restaurantId;
    this.date = date;
    this.time = time;
    this.numberOfGuests = numberOfGuests;
    this.customer = customer;
  }
}
