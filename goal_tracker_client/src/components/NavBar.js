import { Link } from "react-router-dom";
import "./styles/navbar.css";
import { useState } from "react";
import Overlay from "./Overlay";
import UserComponent from "./UserComponent";

const NavBar = props => {
    const {currentUser, onSignOut, setUser} = props
    const [display, setDisplay] = useState(false)


    if (currentUser === null) {
        return <div>Loading...</div>; // Render a loading message or spinner while data is being fetched
    }

    return (
        <>
            <div className="navbar">
                <div className="left">
                    <div className="logo-circle">
                        <div className="checkmark"></div>
                    </div>
                    <div className="vl"></div>
                        <h1 className="title">Goal Tracker</h1>
                </div>
                
                <div className="right">
                    <div className="title-container hover:cursor-pointer">
                        <h2><Link to={`/`}>Home</Link></h2>
                        <div className="hl"></div>
                    </div>
                    <div className="profile-container">
                        <div 
                            className="flex place-content-center items-center w-10 h-10 bg-[#AD4747] text-white rounded-full hover:cursor-pointer"
                            onClick={() => setDisplay(true)}
                        >
                            {currentUser.first_name[0]+currentUser.last_name[0]}
                        </div>
                        <div className="vl"></div>
                        <span>{currentUser.first_name+" "+currentUser.last_name}</span>
                    </div>
                </div>
            </div>
            {
                display ? (
                    <Overlay
                    setDisplay = {(event) => setDisplay(event)}
                    component = {
                        <UserComponent
                        onSignout = {() => onSignOut()}
                        setUser = {(event) => setUser(event)}
                        setDisplay = {() => setDisplay(false)}
                        currentUser = {currentUser}
                        />
                    }
                    />
                ) : (
                    ""
                )
            }
        </>
    )
}

export default NavBar