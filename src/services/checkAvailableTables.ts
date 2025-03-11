import { IBooking } from "../models/IBooking"

export const checkAvailableTables= (bookings: IBooking[], date: string) => {
    console.log(date)

    const totalBookings = bookings.filter((booking) => booking.date === date);
    const totalBookingsAt18 = totalBookings.filter((booking) => booking.time === "18.00");
    const totalBookingsAt21 = totalBookings.filter((booking) => booking.time === "21.00");

    const bookedTablesAt18 = totalBookingsAt18.length;
    const bookedTablest21 = totalBookingsAt21.length;

    const totalTables = 15; 

    const availableTablesAt18 = totalTables - bookedTablesAt18;
    const availableTablesAt21 = totalTables - bookedTablest21;

    console.log(availableTablesAt18, availableTablesAt21);

    return {availableTablesAt18, availableTablesAt21 };
}

