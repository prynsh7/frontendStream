

const SideNav = (props) => {
    return (
        <ul className={`${props.stylevalue} space-y-2 absolute top-16 p-2 bg-gray-300 w-[40%]`}>
            <li className='text-black'>
                <a href='/upload' passHref>
                    <img src='./Assets/upload-1.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </a>
            </li>
            <li className='text-black'>
                <a href='/manage-videos' passHref>
                    <img src='./Assets/manage.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </a>
            </li>
            <li className=''>
                <a href='/settings' passHref>
                    <img src='./Assets/settings.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                </a>
            </li>
        </ul>
    )
}

export default SideNav
