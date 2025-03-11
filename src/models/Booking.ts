export class Booking {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;

  constructor(
    id: string,
    restaurantID: string,
    date: string,
    time: string,
    numberOfGuests: number,
    customerId: string
  ) {
    this.id = id;
    this.restaurantId = restaurantID;
    this.date = date;
    this.time = time;
    this.numberOfGuests = numberOfGuests;
    this.customerId = customerId;
  }
  //   funktioner nedan
}
