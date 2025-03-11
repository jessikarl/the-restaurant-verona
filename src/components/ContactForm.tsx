interface ContactFormProps {
  contact: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  };
  setContact: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
    }>
  >;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

export const ContactForm = ({
  contact,
  setContact,
  errors,
  setErrors,
}: ContactFormProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  return (
    <>
      <h3 className="contact-headline">Kontaktuppgifter</h3>

      <div className="customer-information-container">
      <label className="contact-label">
        <input
          type="text"
          name="firstName"
          className="booking-input"
          placeholder="Förnamn"
          value={contact.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <p className="error-text">{errors.firstName}</p>}
      </label>

      <label className="contact-label">
        <input
          type="text"
          name="lastName"
          className="booking-input"
          placeholder="Efternamn"
          value={contact.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <p className="error-text">{errors.lastName}</p>}
      </label>

      <label className="contact-label">
        <input
          type="number"
          name="phone"
          className="booking-input"
          placeholder="Mobiltelefon"
          value={contact.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </label>

      <label className="contact-label">
        <input
          type="text"
          name="email"
          className="booking-input"
          placeholder="Email"
          value={contact.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </label>
      </div>
    </>
  );
};
