import { Link } from "react-router";
import "../styles/_bookingLink.scss";

export const BookingLink = () => {
    return (
        <>
        <div className="bookingLinkContainer">
            <div className="booking">
                <Link to="/booking" className="bookingLink">
                    boka bord
                </Link>
            </div>
        </div>
        </>
    )
}