import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectDay, selectSelectedDay } from '../features/daySlice';
import SchedulerModal from './SchedulerModal';
import './Slots.css'



export default function Slots({ timeSlot }) {
    const [open, setOpen] = useState(false)
    const days = useSelector(selectDay)
    const day = useSelector(selectSelectedDay)

    return (
        <>
            <div className={`slot ${days[day] && days[day][timeSlot] && days[day][timeSlot].name !== '' ? 'filled' : ''}`} onClick={() => setOpen(true)}>
                {timeSlot}
                <div className='info'>
                    {days[day] && days[day][timeSlot] && days[day][timeSlot].name !== '' && (<div className='name'>{days[day][timeSlot].name}</div>)}
                    {days[day] && days[day][timeSlot] && days[day][timeSlot].phoneNumber !== '' && (<div className='phone-number'>{days[day][timeSlot].phoneNumber}</div>)}
                </div>
            </div>
            {open && <SchedulerModal setOpen={setOpen} timeSlot={timeSlot} />}
        </>
    );
}
