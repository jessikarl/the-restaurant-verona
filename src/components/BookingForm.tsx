import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/_bookingForm.scss";
import "../services/ValidateForm";
import { validateForm } from "../services/ValidateForm";
import { CustomerInformation } from "../models/CustomerInformation";
import { getTestBookings } from "./testObjects";
import { Datepicker } from "../components/Datepicker";
import { ContactForm } from "./ContactForm";
import { Booking } from "../models/Booking";
import { checkAvailableTables } from "../services/checkAvailableTables";
import { Availability } from "../models/Availability";
import { postBooking } from "../services/apiCRUD";
import { BookingCreation } from "../models/BookingCreation";

export const BookingForm = ({
  bookings,
  setBookings,
  editingBooking,
  setEditingBooking,
}: {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  editingBooking: Booking | null;
  setEditingBooking: (booking: Booking | null) => void;
}) => {
  const [date, setDate] = useState<Date | null>(
    editingBooking ? new Date(editingBooking.date) : new Date()
  );
  const [time, setTime] = useState<string | null>(editingBooking?.time || null);
  const [people, setPeople] = useState(editingBooking?.numberOfGuests || 2);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const [availableTables, setAvailableTables] = useState<Availability>({
    availableTablesAt18: 0,
    availableTablesAt21: 0,
  });

  const changeDate = (newDate: Date) => {
    const availability = checkAvailableTables(
      bookings,
      newDate.toLocaleDateString()
    );
    setAvailableTables(availability);
    setDate(newDate);
  };

  useEffect(() => {
    if (editingBooking) {
      setDate(new Date(editingBooking.date));
      setTime(editingBooking.time);
      setPeople(editingBooking.numberOfGuests);
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  }, [editingBooking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validateForm(date, people, time, contact);
    setErrors(validationErrors);

    setTimeout(() => {
      console.log("Bokning klar!");
      setIsLoading(false);
    }, 3000);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);

      if (editingBooking) {
        // 🔹 Uppdatera befintlig bokning
        const updatedBooking = {
          ...editingBooking,
          date: date?.toISOString().split("T")[0] || "",
          time: time || "",
          numberOfGuests: people,
        };
        // console.log("uppdaterar en bokning");
        setBookings((prevBooking) =>
          prevBooking.map((b) =>
            b.id === editingBooking.id ? updatedBooking : b
          )
        );
        setEditingBooking(null);
      } else {
        // 🔹 Skapa ny bokning
        const newCustomer = new CustomerInformation(
          crypto.randomUUID(),
          contact.firstName,
          contact.lastName,
          contact.email,
          contact.phone
        );
        const newBooking = new Booking(
          crypto.randomUUID(),
          "623b89d56396b96c57bde7d4",
          date?.toISOString().split("T")[0] || "",
          time || "",
          people,
          newCustomer.id
        );
        setBookings((prevBookings) => [...prevBookings, newBooking]);

        console.log("Ny bokning sparad:", newBooking);
        console.log("Alla bokningar:", getTestBookings());
      }

      const createBooking = async (newBooking: BookingCreation) => {
        const bookingId = await postBooking(newBooking);
        return bookingId;
      }

      console.log("Skickar bokning...");

      setDate(new Date());
      setTime(null);
      setPeople(2);
      setContact({ firstName: "", lastName: "", email: "", phone: "" });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        {isLoading && (
          <div className="loading-overlay">
            <div className="loader"></div>
          </div>
        )}
        <Datepicker
          date={date}
          changeDate={changeDate}
          availability={availableTables}
          time={time}
          setTime={setTime}
          people={people}
          setPeople={setPeople}
          errors={errors}
          setErrors={setErrors}
        />

        <div className="contact-information-container">
          <ContactForm
            contact={contact}
            setContact={setContact}
            errors={errors}
            setErrors={setErrors}
          />
        </div>

        <p className="gdpr-message">När du bokar godkänner du våra villkor och GDPR policy</p>

        <button type="submit" className="booking-button">
          Boka
        </button>
        {editingBooking && (
          <button
            type="button"
            className="cancel-button"
            onClick={() => setEditingBooking(null)}
          >
            Avbryt
          </button>
        )}
      </form>
    </div>
  );
};
