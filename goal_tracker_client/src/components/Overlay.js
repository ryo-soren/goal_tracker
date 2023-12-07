const Overlay = (props) => {
    const {component, setDisplay} = props

    return(
        <div className="flex place-content-center items-center">
            {component}
            <div 
            className="bg-black opacity-50 w-screen h-screen fixed top-0 z-0 hover:cursor-pointer"
            onClick={() => setDisplay(false)}
            >
            </div>
        </div>
    )
}

export default Overlay