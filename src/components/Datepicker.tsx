import "../services/ValidateForm";
import "../styles/_bookingForm.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import { Availability } from "../models/Availability";

interface DatepickerProps {
  date: Date | null;
  changeDate: (date: Date) => void;
  availability: Availability;
  time: string | null;
  setTime: Dispatch<SetStateAction<string | null>>;
  people: number;
  setPeople: Dispatch<SetStateAction<number>>;
  errors: { [key: string]: string };
  setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>;
}

export const Datepicker = ({
  date,
  changeDate,
  availability,
  time,
  setTime,
  people,
  setPeople,
  errors,
}: DatepickerProps) => {
  return (
    <>
      <h2 className="booking-headline">Boka Bord</h2>
      <div className="datepicker-container">
        <label className="booking-label">
          <span>Gäster</span>
          <select
            className="booking-dropdown"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
          >
            {[...Array(6)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </label>

        <label className="booking-label">
          <span>Datum</span>
          <DatePicker
            selected={date}
            onChange={(date) => changeDate(date!)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            className="booking-input"
          />
        </label>
      </div>

      <div className="time-selection">
        <button
          type="button"
          className={`time-button ${time === "18:00" ? "selected" : ""}`}
          onClick={() => setTime("18:00")}
          disabled={availability.availableTablesAt18 >= 1 ? false : true}
        >
          18:00
        </button>
        <button
          type="button"
          className={`time-button ${time === "21:00" ? "selected" : ""}`}
          onClick={() => setTime("21:00")}
          disabled={availability.availableTablesAt21 >= 1 ? false : true}
        >
          21:00
        </button>
      </div>

      {errors.time && <p className="error-text">{errors.time}</p>}
    </>
  );
};
