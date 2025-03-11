export interface IBooking {
  // code 200 Booking information
  _id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}
