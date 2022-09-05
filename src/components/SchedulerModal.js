import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, selectDay, selectSelectedDay } from "../features/daySlice";
import './SchedulerModal.css'

export default function SchedulerModal({ timeSlot, setOpen }) {
    const day = useSelector(selectSelectedDay)
    const days = useSelector(selectDay)
    const [name, setName] = useState(days[day] && days[day][timeSlot] ? days[day][timeSlot].name : '')
    const [phoneNumber, setPhoneNumber] = useState(days[day] && days[day][timeSlot] ? days[day][timeSlot].phoneNumber : '')
    const [error, setError] = useState(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, phoneNumber)
        if(name.length < 3){
            setError('Name should be atleast 3 character long')
        }else if(phoneNumber.length === 10){
            setError(null)
            dispatch(addDetails({
                day,
                timeSlot,
                details: {
                    name,
                    phoneNumber
                }
            }))
            setOpen(false)
        }else{
            setError('Phone number should be ten digits long')
        }
    }

    const handleClose = () => {
        setName(days[day] && days[day][timeSlot] ? days[day][timeSlot].name : '')
        setPhoneNumber(days[day] && days[day][timeSlot] ? days[day][timeSlot].phoneNumber : '')
        setError(null)
        setOpen(false)
    }

    return (
        <div className="modal-bg" onClick={handleClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {days[day] && days[day][timeSlot] && days[day][timeSlot].name !== '' ? <div className="modal-heading">Edit call details</div> : 
                    <div className="modal-heading">Schedule a call</div>
                }
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Name</span>
                        <input 
                            type='text'
                            required
                            onChange = {(e) => setName(e.target.value)}
                            value = {name}
                            placeholder='John'
                            autoFocus
                        />
                    </label>
                    <label>
                        <span>Phone Number</span>
                        <div className='phone'>
                            <div className='country-code'>
                                        +91
                            </div>
                            <input 
                                type='number'
                                required
                                onChange = {(e) => setPhoneNumber(e.target.value)}
                                value = {phoneNumber}
                                placeholder = '9812763490'
                            />
                        </div>
                    </label>
                    {error && <p className='error'>{error}</p>}
                    {days[day] && days[day][timeSlot] && days[day][timeSlot].name !== '' ? <button className="modal-button">Update call details</button> : <button className="modal-button">Schedule</button>}
                    <p className='close-modal' onClick={handleClose}>X</p>
                </form>
            </div>
        </div>
    );
}
