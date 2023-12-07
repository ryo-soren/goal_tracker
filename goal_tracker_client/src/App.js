import './App.css';
import {Route, Routes} from "react-router-dom"
import { useState, useEffect } from "react";
import { Session } from './requests';
import NavBar from './components/NavBar';
import GoalIndexPage from './components/GoalIndexPage';
import GoalShowPage from './components/GoalShowPage';
import NewGoalPage from './components/NewGoalPage';
// import EditGoalPage from './components/EditGoalPage';
import SignInPage from './components/SignInPage';
// import NewUserPage from './components/NewUserPage';
// import EditUserPage from './components/EditUserPage';
// import Calendar from './components/dashboard/utils/Calendar';
// import SuccessRate from './components/dashboard/utils/SuccessRate';

const App = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUser();
  }, []);

  const onSignOut = () => {
    Session.destroy().then(sessionData => {
      if (sessionData.errors) {
        console.log(sessionData.errors);
      }
    })
    setUser(null)
  }

  const getCurrentUser = () => {
    Session.current().then(currentUser => {
      console.log(currentUser)
      if(currentUser?.id){
        setUser(currentUser)
      }
    })
  }

  return(
    <>
      <NavBar 
        currentUser={user}
        onSignOut={onSignOut}
      />

      <Routes>
        <Route exact path="/" element={<GoalIndexPage/>}/>
        <Route exact path="/goals" element={<GoalIndexPage/>}/>
        <Route path="/goals/:id" element={<GoalShowPage />} />
        <Route path="/new_goal" element={<NewGoalPage />}/>
        {/* <Route path="/edit_goal/:id" element={<EditGoalPage/>}/>
        <Route path="/new_user" element={<NewUserPage getCurrentUser={() => getCurrentUser()}/>}/>
        <Route path="/edit_user" element={<EditUserPage getCurrentUser={() => getCurrentUser()}/>}/> */}
        <Route path="/sign_in" element={<SignInPage getCurrentUser={() => getCurrentUser()}/>}/>
      </Routes>
    {/* <Calendar /> */}
    {/* <SuccessRate /> */}
  </>
  )
}

export default App;