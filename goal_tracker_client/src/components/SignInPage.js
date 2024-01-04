import {useState} from "react";
import { Session } from "../requests";
import { useNavigate } from "react-router-dom";

const SignInPage = props => {
    const {getCurrentUser} = props
    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const getDataAndSubmit = event => {
        event.preventDefault()

        const formData = {
            username_or_email: usernameOrEmail,
            password: password
        }

        Session.create(formData).then((user) => {
            if (user.status === 401) {
                console.log(user.message)
            } else {
                console.log(user);
                getCurrentUser()
                navigate(`/`)
            }
        })
    }

    return(
        <>
            <form onSubmit={getDataAndSubmit}>
                <div>
                    <label htmlFor="usernameOrEmail">Username or Email</label>
                    <br />
                    <input type="text" name="usernameOrEmail" id="usernameOrEmail" value={usernameOrEmail} onChange={event=> setUsernameOrEmail(event.currentTarget.value)}/>                
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="password" value={password} onChange={event=> setPassword(event.currentTarget.value)}/>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </>
    )
}

export default SignInPage