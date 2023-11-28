import { Session } from "../requests"
import "./styles/navbar.css";

const NavBar = props => {
    const {currentUser, onSignOut} = props

    const signOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }

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

                {/* <div className="vl no-margin"></div> */}

                <div className="right">
                    <div className="title-container">
                        <h2>Home</h2>
                        <div className="hl"></div>
                    </div>
                    <div className="profile-container">
                        <div className="profile-circle">
                            {currentUser.first_name[0]+currentUser.last_name[0]}
                        </div>
                        <div className="vl"></div>
                        <span>{currentUser.first_name+" "+currentUser.last_name}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar