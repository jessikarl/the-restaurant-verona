import { useState } from "react";
import "../styles/_adminLayout.scss";
import { Booking } from "../models/Booking";
import { CustomerInformation } from "../models/CustomerInformation";
import { getTestBookings } from "../components/testObjects";
import { deleteBooking } from "../services/apiCRUD";

export const AdminLayout = ({
  bookings,
  setBookings,
  setEditingBooking,
  customers,
}: {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  setEditingBooking: (booking: Booking | null) => void;
  customers: CustomerInformation[];
}) => {
  const handleEdit = (booking: Booking) => {
    setEditingBooking(booking);
  };
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBookings = [...getTestBookings(), ...bookings].filter(
    (booking) =>
      booking.customerId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.date.includes(searchTerm)
  );

  const handleDelete = (bookingId: string) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
  };

  const removeBooking = async (bookingId: string) => {
    //try {
    await deleteBooking(bookingId);
    handleDelete(bookingId);
  };
  //catch (error) {
  //  console.error("Misslyckades med att ta bort bokningen", error);
  // }
  // }

  const findCustomerById = (customerID: string | undefined) => {
    if (!customerID) return undefined;
    return customers.find((customer) => customer.id === customerID);
  };

  return (
    <>
      <div className="admin-container">
        <button
          className="toggle-admin"
          onClick={() => setIsAdminVisible(!isAdminVisible)}
        >
          {isAdminVisible ? "Dölj Adminläge" : "Visa Adminläge"}
        </button>

        {isAdminVisible && (
          <div className="admin-panel">
            <h2>Admin - Hantera Bokningar</h2>
            <div className="search-section">
              <input
                type="text"
                placeholder="Sök efter kundID"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
              />
              <input
                type="text"
                placeholder="Sök efter bokningsID"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
              />
            </div>

            <div className="booking-table">
              {filteredBookings.map((booking) => {
                const customer = findCustomerById(booking.customerId);

                return (
                  <div key={booking.id} className="booking-item">
                    <p>
                      <span>KundID:</span>{" "}
                      {booking ? `${booking.customerId}` : "Okänd kund"}
                    </p>
                    <p>
                      <span>Kund:</span>{" "}
                      {customer
                        ? `${customer.name} ${customer.lastname}`
                        : "Okänd kund"}
                    </p>
                    <p>
                      <span>Email:</span> {customer?.email || "Ingen email"}
                    </p>
                    <p>
                      <span>Telefon:</span> {customer?.phone || "Ingen telefon"}
                    </p>
                    <p>
                      <span>Datum:</span> {booking.date}
                    </p>
                    <p>
                      <span>Tid:</span> {booking.time}
                    </p>
                    <p>
                      <span>Personer:</span> {booking.numberOfGuests}
                    </p>
                    <div className="actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(booking)}
                      >
                        ✏️
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => removeBooking(booking.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
