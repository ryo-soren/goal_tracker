const UserForm = props => {

    const {
        userID, firstname, lastname, email, username, password, passwordConfirmation,
        setFirstname, setLastname, setEmail, setUsername, setPassword, setPasswordConfirmation,
        submitForm
    } = props

    const getDataAndSubmit = (event) => {
        event.preventDefault()
        let formData = {}
        if (password) {
            formData = {
                first_name: firstname,
                last_name: lastname,
                email: email,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            }   
        } else {
            formData = {
                first_name: firstname,
                last_name: lastname,
                email: email,
                username: username
            }  
        }
        submitForm(formData)
    }

    return (
        <form onSubmit={getDataAndSubmit}>
            <div>
                <label htmlFor="firstname">First Name</label>
                <br />
                <input type="text" name="firstname" id="firstname" value={firstname} onChange={event=> setFirstname(event.currentTarget.value)}/>                
            </div>
            <div>
                <label htmlFor="lastname">Last Name</label>
                <br />
                <input type="text" name="lastname" id="lastname" value={lastname} onChange={event=> setLastname(event.currentTarget.value)}/>                
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" id="email" value={email} onChange={event=> setEmail(event.currentTarget.value)}/>                
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" id="username" value={username} onChange={event=> setUsername(event.currentTarget.value)}/>                
            </div>
            {
                userID ? "" :
                <>                
                    <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name="password" id="password" value={password} onChange={event=> setPassword(event.currentTarget.value)}/>                
                    </div>
                    <div>
                        <label htmlFor="passwordConfirmation">Password Confirmation</label>
                        <br />
                        <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={passwordConfirmation} onChange={event=> setPasswordConfirmation(event.currentTarget.value)}/>                
                    </div>
                </>
            }
            <div>
                <input type="submit"/>
            </div>
        </form>
    )
}

export default UserForm