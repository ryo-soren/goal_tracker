import { Session } from "../requests"

const NavBar = props => {
    const {currentUser, onSignOut} = props

    const signOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }

    return (
        // <>
        // {
        //     currentUser ? 
            <>
                <div>Hello {currentUser}</div>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </>
        //     :
        //         ""
        // }
        
        // </>
    )
}

export default NavBar