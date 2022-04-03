import React from 'react'
// import Footer from './Footer'
import Form from './Form'
import Navigation from './Navigation'
// import "./Auth.scss"


const Auth = () => {
    return (
        <div className='bg-[#161616] relative overflow-hidden auth'>
            <Navigation />
            <Form />
            {/* <Footer /> */}
            <div className="absolute h-96 w-96 top-16 -right-32 -rotate-[123] img-1">
                <img className="object-contain" src='./Assets/vector3.png' alt="vector3" height='384px' width='384px' />
            </div>
            <div className="absolute h-96 w-96 top-16 -right-40 -rotate-[123] img-2">
                <img className="object-contain" src='./Assets/vector2.png' alt="vector2" height='384px' width='384px' />
            </div>
            <div className="absolute h-96 w-96 top-16 -right-48 -rotate-[123] img-3">
                <img className="object-contain" src='./Assets/vector1.png' alt="vector1" height='384px' width='384px' />
            </div>
        </div>
    )
}

export default Auth