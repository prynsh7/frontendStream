

const ControlOption = (props) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <input type="radio" className="h-4 w-4" />
                <span>{props.label}</span>
            </div>
        </div>
    )
}

export default ControlOption