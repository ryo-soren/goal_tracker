import { types } from "./dates";

const SuccessRate = (props) => {
    const {goals} = props


    return(
        <div className="flex flex-col border border-[#B1B1B1] rounded-b w-[95%] h-[95%] mx-auto">
            <h1 className="py-2">Success Rate</h1>
            <div className="flex w-full h-full border-t border-[#B1B1B1]">
                {//create containers for each type
                    types.map((type, i) => {
                        const underscoreRemoved = type.replace("_", " ").replace(/(^\w|\s\w)(\S*)/g, match => match.toUpperCase())                    
                        console.log(underscoreRemoved);
                        return(
                            <div className="w-full h-full pt-4">
                                <h1 className="border border-[#b1b1b1] rounded-full w-[85%] mx-auto font-extralight">{underscoreRemoved}</h1>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default SuccessRate