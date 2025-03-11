import { ICustomerInformation } from "./ICustomerInformation";

export class CustomerInformation implements ICustomerInformation {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;

  constructor(
    id: string,
    name: string,
    lastname: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }

  //   funktioner
}
