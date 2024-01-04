import {Goal} from "../requests.js"
import {useState, useEffect} from "react";
import "./styles/index.css";
import Dashboard from "./Dashboard.js";
import GoalIndexView from "./GoalIndexView.js";

const GoalIndexPage = props => {

    const [goals, setGoals] = useState([])
    const {showGoals} = props

    useEffect(() => {
        getGoals()
    }, [])

    function getGoals(){
        Goal.index().then((goalsData) => {
            setGoals(goalsData)
        })
    }

    return(      
        <div className="h-full flex overflow-y-auto">
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
    )
}

export default GoalIndexPage