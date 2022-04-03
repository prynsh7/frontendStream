import React from 'react'
import Nav from './Nav'
import Overview from './Overview'
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div>
        <div className="Dashboard flex flex-cols-2">
            <div className="w-[20%] border-black">
                <Sidebar />
            </div>
            <div className="w-[80%] mr-[50px]">
                <Nav />
                <Overview />
            </div>
        </div>
    </div>
  )
}

export default Dashboard