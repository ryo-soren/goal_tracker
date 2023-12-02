import { useState } from "react";
import "../stylesheets/upcomingStyles.css"
import { datesOfWeek, findGoalsByDate, days, months, types } from "./dates"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import dayjs from "dayjs"
import cn from "./cn";

const Upcoming = props => {
    const {goals} = props
    const currentDate = dayjs()
    const [selected, setSelected] = useState(currentDate)

    return(
        <div className="upcoming bg-white w-[95%] h-max border border-[#b1b1b1] rounded mx-auto mb-[.7rem]">
            <div className="flex w-full items-center text-sm">
                <div className="w-[50%]">
                    <div className='hover:cursor-pointer flex border w-min h-max ml-[1.3rem] rounded-lg divide-x text-stone-400'>
                            <div 
                            className='flex items-center'
                            onClick={() => {
                                
                            }}                        
                            >
                                <IoIosArrowBack className='w-4 h-4'/>
                            </div>

                            <div 
                            className='flex items-center'
                            onClick={() => {
                                
                            }}                        
                            >
                                <IoIosArrowForward className='w-4 h-4'/>
                            </div>
                        </div>
                </div>
                <div className="flex justify-center flex-wrap w-[50%]">
                    {types.map(({type}, i) => {
                        return(
                            <div key={i} className="flex items-center text-[8px] mr-2">
                                <div className={cn("rounded-full h-3 w-3 mr-2", `${type}`)}></div>
                                <h1>{type.replace("_", " ").replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="border-t border-[#b1b1b1] grid grid-flow-row auto-rows-[4.5rem]">
                {
                    datesOfWeek(selected).map((day, i) => {
                        return(
                            <div key={i} className="flex-none flex text-left">
                                <div className="flex w-1/5 border-r border-[#b1b1b1] place-content-center items-center text-xs font-medium">
                                    <h1>{`${days[day.day()].replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())} ${months[day.month()].slice(0, 3)} ${day.date()}`}</h1>
                                </div>
                                <div className={cn("flex w-4/5 border-[#b1b1b1] place-content-center items-center", i === 0 ? "": "border-t")}>
                                    {findGoalsByDate(goals, day).map(({title, frequency, done, times}, i) => {
                                        return(
                                            <div key={i} className="hover:cursor-pointer flex text-[8px] mx-2">
                                                <div className={cn("rounded-full h-3 w-3 mr-2", `${frequency}`)}></div>
                                                <h1 className="overflow-hidden whitespace-nowrap max-w-[4rem]">{title}</h1>
                                                <h1 className="mx-1">-</h1>
                                                <h1>{(done/times*100).toFixed(0)}% Done</h1>
                                            </div>
                                        )
                                    })}
                                </div>                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Upcoming