export const validateForm = (
  date: Date | null,
  people: number,
  time: string | null,
  contact: { firstName: string; lastName: string; phone: string; email: string }
) => {
  let errors: { [key: string]: string } = {};

  if (!date) {
    errors.date = "du måste välja ett datum";
  }

  if (people < 1 || people > 6) {
    errors.people = "Antal gäster måste vara mellan 1 och 6";
  }

  if (!time) {
    errors.time = "Du måste välja en tid";
  }

  if (!time || time === "") {
    errors.time = "Du måste välja en tid.";
  }

  if (contact.firstName === "") {
    errors.firstName = "Förnamn är obligatoriskt";
  }

  if (contact.lastName === "") {
    errors.lastName = "Efternamn är obligatoriskt";
  }

  if (contact.phone === "") {
    errors.phone = "Du måste fylla i ett telefonnummer";
  }

  if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
    errors.email = "Du måste skriva in en giltig email-adress";
  }
  return errors;
};
