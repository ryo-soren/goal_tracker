import DatePicker from "react-datepicker";
require('react-datepicker/dist/react-datepicker.css')

const GoalForm = props => {

    const {
        title, description, frequency, times, deadline,
        setTitle, setDescription, setFrequency, setTimes, setDeadline,
        submitForm
    } = props

    const getDataAndSubmit = (event) => {
        event.preventDefault()

        const formData = {
            title: title,
            description: description,
            frequency: frequency,
            times: times,
            deadline: deadline.toDateString()
        }

        submitForm(formData)
    }

    return(
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" id="title" value={title} onChange={event=> setTitle(event.currentTarget.value)}/>                
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <br />
                <input type="text" name="description" id="description" value={description} onChange={event=> setDescription(event.currentTarget.value)}/>
            </div>
            <div>
                <label>Frequency</label>
                <br />
                <input type="radio" name="frequency" id="once" value="once" onChange={event=> setFrequency(event.currentTarget.value)}/>
                <label htmlFor="once">Once</label><br/>
                <input type="radio" name="frequency" id="daily" value="daily" onChange={event=> setFrequency(event.currentTarget.value)}/>
                <label htmlFor="daily">Daily</label><br/>
                <input type="radio" name="frequency" id="weekly" value="weekly" onChange={event=> setFrequency(event.currentTarget.value)}/>
                <label htmlFor="weekly">Weekly</label><br/>
                <input type="radio" name="frequency" id="monthly" value="monthly" onChange={event=> setFrequency(event.currentTarget.value)}/>
                <label htmlFor="monthly">Monthly</label><br/>
                <input type="radio" name="frequency" id="yearly" value="yearly" onChange={event=> setFrequency(event.currentTarget.value)}/>
                <label htmlFor="yearly">Yearly</label><br/>
            </div>
            <div>
                <label htmlFor="times">Times</label>
                <br />
                <input type="text" name="times" id="times" value={times} onChange={event=> setTimes(event.currentTarget.value)}/>                
            </div>
            <div>
                <label htmlFor="title">Deadline</label>
                <br />
                <DatePicker selected={new Date(deadline)} value={deadline} onChange={date => setDeadline(date)}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
    )

}

export default GoalForm