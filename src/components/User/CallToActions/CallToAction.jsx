import { useState } from "react"
import { RiPagesLine } from "react-icons/ri"
import TableData from "../Videos/TableData"
import Modal from './Modal'
import SideNav from "../SideNav/Index"

const CallToActions = () => {
  const [hide, setHide] = useState(true)
  const [nav, setNav] = useState(false)

  function showSideNav() {
    setNav(!nav)
  }

  const styleValue = nav ? 'none' : 'hidden'

  function modalHandler() {
    setHide(!hide)
  }
  const modalStyle = hide ? 'hidden' : 'none'

  return (
    <div>
      <div className="rounded-t mb-0 px-4 py-3 border-0 relative">
        <SideNav stylevalue={styleValue} />
        {/* Nav */}
        <div className='flex flex-row items-center gap-1 float-left absolute top-4 left-4 sm:hidden'>
          <div onClick={showSideNav} className='flex sm:hidden'>
            <img src='./Assets/home-bar.png' alt='bars' height='16px' width='21px' />
          </div>
          <div className='flex sm:hidden'>
            <a href='/home' passHref>
              <img src='./Assets/Logo.png' className='object-contain' height='26px' width='26px' alt='dooo' />
            </a>
          </div>
        </div >

        <div className="flex gap-1 sm:gap-2 items-center ml-16 sm:ml-0">
          <div className="cursor-pointer">
            <a href='/manage-videos' passHref>
              <h1 className="font-semibold text-xs sm:text-lg text-black">Manage Videos</h1>
            </a>
          </div>
          <div className="">
            <h3 className="font-bold text-xs sm:text-lg text-sky-600">|</h3>
          </div>
          <div className="cursor-pointer">
            <a href='/playlist' passHref>
              <h1 className="font-semibold text-xs sm:text-lg text-black">Manage Playlist</h1>
            </a>
          </div>
          <div className="">
            <h3 className="font-bold text-lg text-sky-600">|</h3>
          </div>
          <div className="cursor-pointer">
            <a href='/playlist' passHref>
              <h1 className="font-semibold text-xs sm:text-lg text-black">Manage Popups</h1>
            </a>
          </div>
        </div>
      </div>

      <section className="relative py-12 bg-blueGray-50">
        <div className="w-full mb-4 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">

            <div className="flex justify-center sm:justify-end rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-col gap-2 items-center">
                <div className="py-2">
                  <button className="bg-black text-white px-3 py-2 rounded">Download collected emails</button>
                </div>
                <div className="py-2">
                  <button onClick={() => modalHandler()} className="flex items-center">
                    <RiPagesLine size={30} />Create New CTA
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Call-to-Action</th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Impresions</th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Conversions</th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black">Conversion %</th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                    <th className="px-6 align-middle border border-solid py-3 text-md border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black"></th>
                  </tr>
                </thead>

                <tbody>
                  <TableData id={1} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />
                  <TableData id={8} thumbnail={'/space.png'} title={'Killer player sales Video'} date={'Feb 17, 2021'} views={231} avgViewDuration={'0:11 (67.2%)'} avgPercentViewed={'0:20 (87.3%)'} />

                </tbody>
              </table>
            </div>
          </div>
        </div>

      </section>
      <Modal handleModal={modalHandler} modalStyle={modalStyle} />
    </div>
  )
}

export default CallToActions