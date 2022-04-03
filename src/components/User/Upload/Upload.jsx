import { FiUpload } from 'react-icons/fi'

const Upload = () => {

    const handleChange = (e) => {
        //...
    }

    return (
        <div className='flex justify-center items-center mt-24'>
            <div className='flex justify-center items'>
                <form action="" className="">
                    <div className="flex justify-between mx-4">
                        <input
                            className="px-2 py-2 my-3 border-[1px] border-[#787C87] bg-[#F7F7F7] rounded-xl text-gray-700 placeholder-[#787C87] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent"
                            type="text"
                            placeholder="Enter source video URLs" />
                        <button type="submit" className="rounded-full border-[1px] border-[#787C87] text-[#1E1E1F] py-2 px-2 my-3 bg-[#F7F7F7]">Fetch videos</button>
                    </div>
                    <h1 className="text-center">OR</h1>
                    <div className="flex justify-center m-auto mx-4">
                        <button className="rounded-full w-full flex justify-center border-[1px] border-[#787C87] text-[#1E1E1F] px-2 my-3 bg-[#F7F7F7] py-2 items-center">
                            <FiUpload className='text-black' />
                            <span className="ml-2 text-[#1E1E1F]">Upload Files</span>
                        </button>
                        <input className="cursor-pointer absolute opacity-0" type="file" name="videoFiles" multiple />
                    </div>
                    <h1 className='text-center text-[#787C87] text-xs'>Enter one URL per line. You can also add YouTube and Vimeo URLs.</h1>
                </form>
            </div>
        </div>
    )
}

export default Upload
