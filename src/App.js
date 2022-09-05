import './App.css';
import CustomCalendar from './components/CustomCalendar';
import Slots from './components/Slots';

const timeSlots = ["9AM - 10AM", "10AM - 11AM", "11AM - 12PM","12PM - 1PM", "1PM - 2PM", "2PM - 3PM", "3PM - 4PM", "4PM - 5PM", "5PM - 6PM", "6PM - 7PM", "7PM - 8PM"]

function App() {
  // let day = useSelector(selectSelectedDay)
  // day = day.substring(0,3) + ',' + day.substring(3,10) + ',' + day.substring(10,day.length)
  return (
    <div className="App">
      <div className='heading'>SCHEDULER</div>
      {/* <div className='slots-heading'>Slots on {day}</div> */}
      <div className='container'>
        <CustomCalendar />
        <div className='time-slots'>
          {timeSlots.map((time) => (
            <Slots key={time} timeSlot={time} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
