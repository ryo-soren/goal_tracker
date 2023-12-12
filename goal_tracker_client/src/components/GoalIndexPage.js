import {Goal} from "../requests.js"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { IoAddCircle } from "react-icons/io5";
import "./styles/index.css";
import NewGoalPage from "./NewGoalPage.js";
import Overlay from "./Overlay.js";
import Dashboard from "./Dashboard.js";
import cn from "./dashboard/utils/cn.js";
import GoalIndexView from "./GoalIndexView.js";

const GoalIndexPage = () => {

    const [goals, setGoals] = useState([])
    const [display, setDisplay] = useState(false)
    const [showGoals, setShowGoals] = useState(false)
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
            {
                display ? (
                    <Overlay
                    setDisplay = {(event) => setDisplay(event)}
                    component = {
                        <NewGoalPage 
                        setDisplay = {(event) => setDisplay(event)}
                        goals = {goals}
                        />
                    }
                    />        
                ) : (
                    ""
                )
            }

            <div className='flex flex-col items-center w-max fixed text-[#4CAF4F] bottom-20 left-14'>
                <IoAddCircle 
                className='w-[6rem] h-[6rem] hover:cursor-pointer hover:text-[#6ed872]'
                onClick={() => setDisplay(true)}
                />
                <h1 className='font-bold'>New Goal</h1>
            </div>

            <div className="grid grid-container h-full">
                <div className="sidebar">
                    <div 
                    className={cn("tab hover:cursor-pointer", showGoals ? "" : "green")}
                    onClick={() => {
                        setShowGoals(false)
                    }}
                    >
                        <span className="icon">🏠</span><span>Home</span>
                    </div>
                    <div
                    className={cn("tab hover:cursor-pointer", showGoals ? "green" : "")}
                    onClick={() => {
                        setShowGoals(true)
                    }}
                    >
                        <span className="icon">✅</span><span>Goals</span>
                    </div>
                </div>
                <div className="w-full h-full overflow-y-auto flex">
                    {
                        showGoals ? (
                                <GoalIndexView
                                goals = {goals}
                                setGoals = {(event) => setGoals(event)}
                                />
                            ) : (
                                <Dashboard goals={goals}/>
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default GoalIndexPage