
import Select from 'react-select'
import './Select.scss'


const Select_D = ({options, placeholder, setSelected}) => {
    
    const handleChange = (selectedOptions) => {
        setSelected(selectedOptions.value);
      }

    return (
        <div className=' customSelect my-2 w-[100%] bg-[#F4F7F9] text-[#787C87] placeholder-[#787C87]'>
        <Select 
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        />
        </div>
    )
}

export default Select_D
