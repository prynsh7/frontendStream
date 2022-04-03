import React from 'react'

const Footer = () => {
    return (
        <footer className='pb-3 p-4 sm:p-6'>
            <div className="sm:flex mx-4 md:mx-12 items-center sm:justify-between">
                <div className='text-center'>
                    <p className="text-sm text-[#999A9C] sm:text-center">Terms and Conditions | Privacy Policy.
                    </p>
                </div>

                <div className="text-center mt-4 space-x-6 sm:mt-0">
                    <p className='text-[#999A9C]'>Copyright@Tract 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer