// import {Goal} from "../requests.js"
// import { useNavigate } from "react-router-dom";
// import {useState, useEffect} from "react";
// import { Link } from "react-router-dom";

// const GoalIndexView = props => {

//     // const {goals} = props
//     const [goals, setGoals] = useState([])

//     useEffect(() => {
//         getGoals()
//     }, [])

//     function getGoals(){
//         Goal.index().then((goalsData) => {
//             setGoals(goalsData)
//         })
//     }

//     const navigate = useNavigate()

//     function markDone(goalData, index){

//         const id = goalData.id        
//         goalData.done += 1
        
//         if (goalData.done >= goalData.times) {
//             goalData.successful += 1
//         }

//         goals[index] = goalData
//         setGoals(goals)
        
//         const doneUpdatedJson  ={
//             done: parseInt(goalData.done)
//         }

//         Goal.update(id, doneUpdatedJson).then(goal => {
//             if (goal.errors) {
//                 console.log(goal.errors);
//             } else {
//                 console.log(goal);
//                 navigate("/")                
//             }
//         })
//     }

//     return(
//         <>
//             <h1>Goals</h1>
//             {goals.map((g, i) => {
//                 console.log(g);
//                 return(
//                     <>
//                         <div key={g.id}>
//                             {/* <h4>Title: {g.title}</h4> */}
//                             <h4><Link to={`/goals/${g.id}`}>Title: {g.title}</Link>{" "}</h4>
//                             <div><p>Description: {g.description}</p></div>
//                             <div><p>Created by: {g.created_by}</p></div>
//                             <div><small>Deadline: {g.deadline}</small></div>
//                             <div><small>Times: {g.times}</small></div>
//                             <div><small>Done: {g.done}</small></div>
//                             <div><small>Successful: {g.successful}</small></div>
//                             <div><small>Unsuccesful: {g.unsuccessful}</small></div>
//                             <div><small>ID: {g.id}</small></div>
//                             {
//                                 g.done >= g.times ? 
//                             <div>Success</div>                                
//                                 :
//                             <button  onClick={()=> markDone(g, i)}>Mark Done</button>
//                             }
//                         </div>
//                         <hr key={`${i} hr`}/>
//                     </>
//                 )
//             })}
//         </>
//     )
// }

// export default GoalIndexView