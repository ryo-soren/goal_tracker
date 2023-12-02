import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Goal } from '../requests';
import GoalForm from './GoalForm'

const NewGoalPage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [frequency, setFrequency] = useState()
    const [times, setTimes] = useState(1)
    const [deadline, setDeadline] = useState(new Date())

    const navigate = useNavigate()

    function createNewGoal(params) {

        Goal.create(params).then(goal => {
            if (goal.errors) {
                console.log(goal.errors);
            } else {
                navigate(`/goals/${goal.id}`)
            }
        })
        
    }

    return(
        <>
            <div>
                <GoalForm
                    title = {title}
                    description = {description}
                    frequency = {frequency}
                    times = {times}
                    deadline = {deadline}

                    setTitle={(event)=>setTitle(event)}
                    setDescription={(event)=>setDescription(event)}
                    setFrequency={(event)=>setFrequency(event)}
                    setTimes={(event)=>setTimes(event)}
                    setDeadline={(event)=>setDeadline(event)}

                    submitForm={(params) => createNewGoal(params)}
                />
            </div>
        </>

    )
}

export default NewGoalPage