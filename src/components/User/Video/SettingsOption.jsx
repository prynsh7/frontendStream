
const SettingsOption = (props) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <input type="radio" className="h-4 w-4" />
                <span>{props.label}</span>
            </div>
            <h1 className={`${props.checked ? 'text-green-600' : 'text-red-600'}`}>
                {props.checked ? 'ON' : 'OFF'}
            </h1>
        </div>
    )
}

export default SettingsOption