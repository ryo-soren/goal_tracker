import FormErrors from "./FormErrors"

const UserForm = props => {

    const {
        userID, firstname, lastname, email, username, password, passwordConfirmation,
        setFirstname, setLastname, setEmail, setUsername, setPassword, setPasswordConfirmation,
        submitForm, errors
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
        <div className="h-[90%] text-slate-700 flex flex-col w-2/3 gap-5 mx-auto place-content-center">
            {
                userID ? (
                    <h1 className="text-[1.5rem]">Edit User</h1>
                ) : (
                    <h1 className="text-[1.5rem]">Sign Up</h1>
                )
            }
            <form className="select-none flex flex-col gap-5 w-full" onSubmit={getDataAndSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="firstname">First Name</label>
                    <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="text" name="firstname" id="firstname" value={firstname} onChange={event=> setFirstname(event.currentTarget.value)} required/>
                    <FormErrors forField="first_name" errors={errors}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastname">Last Name</label>
                    <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="text" name="lastname" id="lastname" value={lastname} onChange={event=> setLastname(event.currentTarget.value)} required/>
                    <FormErrors forField="last_name" errors={errors}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="text" name="email" id="email" value={email} onChange={event=> setEmail(event.currentTarget.value)} required/>                
                    <FormErrors forField="email" errors={errors}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="text" name="username" id="username" value={username} onChange={event=> setUsername(event.currentTarget.value)}/>                
                    <FormErrors forField="username" errors={errors}/>
                </div>
                {
                    userID ? "" :
                    <>
                        <div className="flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="password" name="password" id="password" value={password} onChange={event=> setPassword(event.currentTarget.value)} required/>
                            <FormErrors forField="password" errors={errors}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="passwordConfirmation">Password Confirmation</label>
                            <input className="border border-[#4CAF4F] focus:outline-[#4CAF4F]" type="password" name="passwordConfirmation" id="passwordConfirmation" value={passwordConfirmation} onChange={event=> setPasswordConfirmation(event.currentTarget.value)} required/>
                            <FormErrors forField="password_confirmation" errors={errors}/>
                        </div>
                    </>
                }
                <button className="bg-[#4CAF4F] text-white border-none rounded-full px-4 mt-8 w-max">Submit</button>
            </form>
        </div>
    )
}

export default UserForm