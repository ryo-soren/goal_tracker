import {Goal} from "../requests"
import { useState, useEffect } from "react"
import {useNavigate, useParams } from "react-router-dom";

const GoalShowPage = () => {
    
    const [goal, setGoal] = useState({})
    const match = {params: useParams()}
    const navigate = useNavigate()

    useEffect(() => {
        getGoal()
    }, [])

    function getGoal(){
        Goal.show(match.params.id).then((goalData) => {
            console.log(goalData);
            if (goalData.errors) {
                console.log(goalData.errors);
            }else{
                setGoal(goalData)
            }
        })
    }

    function markDone(goalData){

        goalData.done += 1
        
        if (goalData.done >= goalData.times) {
            goalData.successful += 1
        }

        setGoal(goal)
        
        const doneUpdatedJson = {
            done: parseInt(goalData.done)
        }

        Goal.update(goalData.id, doneUpdatedJson).then(goal => {
            if (goal.errors) {
                console.log(goal.errors);
            } else {
                console.log(goal);
                navigate(`/goals/${goal.id}`)
            }
        })
    }

    return(
        <>
            <div key={goal.id}>
                <h4>Title: {goal.title}</h4>
                <div><p>Description: {goal.description}</p></div>
                <div><p>Created by: {goal.created_by}</p></div>
                <div><small>Deadline: {goal.deadline}</small></div>
                <div><small>Times: {goal.times}</small></div>
                <div><small>Done: {goal.done}</small></div>
                <div><small>Successful: {goal.successful}</small></div>
                <div><small>Unsuccesful: {goal.unsuccessful}</small></div>
                <div><small>ID: {goal.id}</small></div>
                {
                goal.done >= goal.times ? 
                <div>Success</div>                                
                    :
                <button  onClick={()=> markDone(goal)}>Mark Done</button>
                }
                <button onClick={()=>navigate(`/edit_goal/${goal.id}`)}>Edit</button>
            </div>
            <hr key={`${goal.id+1} hr`}/>
        </>
        )
    }

export default GoalShowPage