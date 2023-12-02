import {Goal} from "../requests.js"
import { Link, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import "./styles/index.css";
import Calendar from "./dashboard/utils/Calendar.js";
import SuccessRate from "./dashboard/utils/SuccessRate.js";
import Upcoming from "./dashboard/utils/Upcoming.js";
import dayjs from "dayjs";

const GoalIndexPage = () => {

    const [goals, setGoals] = useState([])
    const currentDate = dayjs()
    const [selected, setSelected] = useState(currentDate)


    useEffect(() => {
        getGoals()
    }, [])

    function getGoals(){
        Goal.index().then((goalsData) => {
            console.log(goalsData);
            setGoals(goalsData)
        })
    }

    const navigate = useNavigate()

    function markDone(goalData, index){

        const id = goalData.id        
        goalData.done += 1
        
        if (goalData.done >= goalData.times) {
            goalData.successful += 1
        }

        goals[index] = goalData
        setGoals(goals)
        
        const doneUpdatedJson  ={
            completion: true,
            done: parseInt(goalData.done)
        }

        Goal.update(id, doneUpdatedJson).then(goal => {
            if (goal.errors) {
                console.log(goal.errors);
            } else {
                navigate("/")                
            }
        })
    }

    return(
        <>
            {/* {goals.map((g, i) => {
                return(
                    <>
                        <div key={g.id}>
                            <h4><Link to={`/goals/${g.id}`}>Title: {g.title}</Link></h4>
                            <div><p>Description: {g.description}</p></div>
                            <div><p>Created by: {g.created_by}</p></div>
                            <div><small>Deadline: {g.deadline}</small></div>
                            <div><small>Times: {g.times}</small></div>
                            <div><small>Done: {g.done}</small></div>
                            <div><small>Successful: {g.successful}</small></div>
                            <div><small>Unsuccesful: {g.unsuccessful}</small></div>
                            <div><small>ID: {g.id}</small></div>
                            {
                                g.done >= g.times ? 
                            <div>Success</div>                                
                                :
                            <button className="border border-black" onClick={()=> markDone(g, i)}>Mark Done</button>
                            }
                        </div>
                        <hr key={`${i} hr`}/>
                    </>
                )
            })} */}

            <div className="grid grid-container h-full">
                <div className="sidebar">
                    <div className="tab tab-1 green">
                        <span className="icon">🏠</span><span>Home</span>
                    </div>
                    <div className="tab tab-2">
                        <span className="icon">✅</span><span>Goals</span>
                    </div>
                </div>

                <div className="grid dashboard bg-gray-100">
                    <div className="history-container">
                        <Calendar
                        goals = {goals}
                        />
                    </div>
                    <div className="success-container">
                        <SuccessRate
                        goals = {goals}
                        />
                    </div>
                </div>

                <div className="flex flex-col h-full bg-gray-100 text-center text-[1.5rem] font-bold place-content-center">
                    <h1 className=" py-[1rem]">Upcoming</h1>
                    <Upcoming
                    goals = {goals}
                    />
                </div>

            </div>
        </>
    )
}

export default GoalIndexPage