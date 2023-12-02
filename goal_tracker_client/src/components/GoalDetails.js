// import { useState, useEffect } from "react"

// const GoalDetails = props => {

//     const {goal, setGoal} = props

//     useEffect(() => {
//         Goal.show(goal.id).then(goal => {
//             setGoal
//         })
//     }, [])


//     return(
//         <>
//             <div key={g.id}>
//                 <h4 key={g.id}>Title: {g.title}</h4>
//                 <div><p>Description: {g.description}</p></div>
//                 <div><p>Created by: {g.created_by}</p></div>
//                 <div><small>Deadline: {g.deadline}</small></div>
//                 <div><small>Times: {g.times}</small></div>
//                 <div><small>Done: {g.done}</small></div>
//                 <div><small>Successful: {g.successful}</small></div>
//                 <div><small>Unsuccesful: {g.unsuccessful}</small></div>
//                 <div><small>ID: {g.id}</small></div>
//                 {
//                     g.done >= g.times ? 
//                 <div>Success</div>                                
//                     :
//                 <button  onClick={()=> markDone(g, i)}>Mark Done</button>
//                 }
//             </div>
//             <hr key={`${i} hr`}/>
//         </>
//         )
//     }

// export default GoalDetails