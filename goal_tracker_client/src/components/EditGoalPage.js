import {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Goal } from '../requests';
import GoalForm from './GoalForm'

const EditGoalPage = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [frequency, setFrequency] = useState()
    const [times, setTimes] = useState(1)
    const [deadline, setDeadline] = useState(new Date())

    const navigate = useNavigate()

    const match = {params: useParams()}

    useEffect(() => {
        getGoal()
    }, [])

    const getGoal = () => {
        Goal.show(match.params.id).then((goalData) => {
            const {title, description, frequency, times, deadline} = goalData

            setTitle(title)
            setDescription(description)
            setFrequency(frequency)
            setTimes(times)
            setDeadline(deadline)
        })
    }

    const updateGoal = (formData) => {
        Goal.update(match.params.id, formData).then(goal => {
            if (goal.errors) {
                console.log(goal.errors);
            }else {
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

                    submitForm={(params) => updateGoal(params)}
                />
            </div>
        </>
    )
}

export default EditGoalPage