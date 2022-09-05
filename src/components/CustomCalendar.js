import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from "react-redux";
import { changeSelectedDate } from "../features/daySlice";
import './CustomCalendar.css'

export default function CustomCalendar() {
    const dispatch = useDispatch()
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        dispatch(changeSelectedDate(date.toDateString()))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])

    return (
      <div className='app'>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    );
}
