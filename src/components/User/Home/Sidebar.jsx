

const Sidebar = () => {
    return (
        <aside className="hidden sm:flex absolute top-0 bottom-0 left-0 fixed" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 md:px-1">
                <div className="flex mb-5">
                    <a href='/home' passHref>
                        <img src='./Assets/Logo.png' className='object-contain cursor-pointer' alt='dooo' height='23px' width='23px' />
                    </a>
                </div>
                <ul className="space-y-2 absolute top-48">
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
                    <li>
                        <a href='/settings' passHref>
                            <img src='./Assets/settings.png' className='text-black cursor-pointer' alt='logo' height='23px' width='23px' />
                        </a>
                    </li>
                </ul>
            </div >
        </aside >
    )
}

export default Sidebar