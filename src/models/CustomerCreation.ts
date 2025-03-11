import { ICustomerCreation } from "./ICustomerCreation";

export class CustomerCreation implements ICustomerCreation {
  name: string;
  lastname: string;
  email: string;
  phone: string;

  constructor(name: string, lastname: string, email: string, phone: string) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }
}

export const getData = () => {};
