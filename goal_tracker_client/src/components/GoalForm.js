import DatePicker from "react-datepicker";
import { types } from "./dashboard/utils/dates";
import cn, { capitalizeFirstLetter } from "./dashboard/utils/cn";
require('react-datepicker/dist/react-datepicker.css')

const GoalForm = props => {

    const {
        title, description, frequency, times, deadline,
        setTitle, setDescription, setFrequency, setTimes, setDeadline,
        submitForm
    } = props

    const getDataAndSubmit = (event) => {
        event.preventDefault()

        const formData = {
            title: title,
            description: description,
            frequency: frequency,
            times: times,
            deadline: deadline
        }

        submitForm(formData)
    }

    return(
        <div className="h-[90%] text-slate-700 mx-auto bg-white flex flex-col place-content-center">
            <h1 className="text-[2rem]">New Goal</h1>

            <form onSubmit={getDataAndSubmit} className="h-max select-none">
                <div className="flex flex-col">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={title}
                    className="border border-[#4CAF4F] focus:outline-[#4CAF4F] caret-[#4CAF4F]"
                    onChange={(event) => setTitle(event.currentTarget.value)}
                    required
                    />
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" value={description} 
                    className="border border-[#4CAF4F] focus:outline-[#4CAF4F] caret-[#4CAF4F]"
                    rows={6}
                    onChange={event=> setDescription(event.currentTarget.value)}
                    required
                    />
                </div>

                <div className="flex flex-col my-4">
                    <label htmlFor="frequency">Frequency</label>
                    <div className="flex justify-between">
                        {
                            types.map(({type}, i) => {
                                return(
                                    <div key={i} 
                                    className={cn(
                                            "flex flex-col place-content-center items-center p-5 mx-2 rounded hover:outline hover:outline hover:outline-[#4CAF4F]", 
                                            frequency === type ? "outline outline-[#4CAF4F]" : ""
                                        )}
                                    value={type}
                                    onClick={() => setFrequency(type)}
                                    >
                                        <input type="radio" name="frequency" id={type} value={type}
                                        className="w-[4rem] accent-[#4CAF4F]"
                                        onChange={event=> setFrequency(event.currentTarget.value)}
                                        />
                                        <label className="flex whitespace-nowrap" htmlFor={type}>{capitalizeFirstLetter(type.replace("_", " "))}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="flex place-content-center justify-between my-4">
                    <div className="flex flex-col w-max">
                        <label htmlFor="target">Target</label>
                        <div className="flex border border-[#4CAF4F]">
                            <input type="text" name="times" id="times" value={times}
                            className="focus:outline-none select-none"
                            onChange={event=> setTimes(event.currentTarget.value)}
                            readOnly
                            />

                            {
                                times === 1 ? (
                                    <div 
                                    className="w-min h-min mx-2 hover:cursor-pointer text-[#4CAF4F]"
                                    onClick={() => setTimes(times + 1)}
                                    >
                                        +
                                    </div>                                
                                ) : (
                                    <>
                                        <div 
                                        className="w-min h-min mx-2 hover:cursor-pointer text-[#4CAF4F]"
                                        onClick={() => setTimes(times + 1)}
                                        >
                                            +
                                        </div>
                                        <div 
                                        className="w-min h-min mx-2 hover:cursor-pointer text-[#4CAF4F]"
                                        onClick={() => setTimes(times - 1)}
                                        >
                                            -
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col w-[45%]">
                        <label htmlFor="title">Deadline</label>
                    <DatePicker selected={new Date(deadline)} value={deadline}
                        className="border border-[#4CAF4F] w-full"
                        minDate={new Date(new Date().getTime() + (24 * 60 * 60 * 1000))}
                        onChange={date => setDeadline(date)}/>
                    </div>
                </div>

                <button className="bg-[#4CAF4F] text-white border-none rounded-full px-4 mt-8">Submit</button>
            </form>
        </div>

    )
}

export default GoalForm