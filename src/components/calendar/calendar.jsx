import 'moment/locale/it.js';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css'

const date = '2015-06-26' // or Date or Moment.js




const Calendar =(props) =>{
    const onChange = (jsDate, dateString) => {
        props.onChange(jsDate, dateString)
    }
    return(
        <div>
            <DatePicker onChange={onChange} value={date} />
        </div>
        )
}

export default Calendar