import { IRestaurant } from "./IRestaurant";

export class Restaurant implements IRestaurant {
  id: string;
  name: string;
  address: string;
  zip: string;
  city: string;

  constructor(
    id: string,
    name: string,
    address: string,
    zip: string,
    city: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.zip = zip;
    this.city = city;
  }

  // funktioner
}
