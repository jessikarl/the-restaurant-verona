import { useState } from "react";
import { AdminLayout } from "../components/AdminLayout";
import { BookingForm } from "../components/BookingForm";
// import { setBooking } from "../components/testObjects";
import "../styles/_bookingForm.scss";
import { Booking } from "../models/Booking";
import { CustomerInformation } from "../models/CustomerInformation";

export const BookingPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [customers, setCustomers] = useState<CustomerInformation[]>([]);
  const [editingBooking, setEditingBooking] = useState<Booking | null>(null);
  return (
    <>
      <BookingForm
        bookings={bookings}
        setBookings={setBookings}
        // customers={customers}
        // setCustomers={setCustomers}
        editingBooking={editingBooking}
        setEditingBooking={setEditingBooking}
      />
      <AdminLayout
        bookings={bookings}
        setBookings={setBookings}
        setEditingBooking={setEditingBooking}
        customers={customers}
      />
    </>
  );
};
