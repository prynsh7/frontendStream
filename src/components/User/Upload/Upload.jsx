import {useState} from 'react'
import { FiUpload } from 'react-icons/fi'
import axios from "axios"
import Loader from '../Loader/Loader';
import cogoToast from 'cogo-toast';


const Upload = () => {



    const [libid, setlibid] = useState(localStorage.getItem('libid'));
    const [apikey, setapikey] = useState(localStorage.getItem('apikey'));
    const [cdn, setCdn] = useState(localStorage.getItem('cdn'));
    const [loading, setLoading] = useState(false)

    const headers = {
        libraryId: libid,
        Accept: 'application/json',
        AccessKey: apikey
    };


    const encodeFileBase64 = (file) => {
        var reader = new FileReader();
        if (file) {
            reader.readAsBinaryString(file);
            reader.onload = () => {
                var Base64 = reader.result
                genFun(file)
            }
        }
    }

    const genFun = async (e) => {
        setLoading(true);

        await axios
            .post(`http://video.bunnycdn.com/library/${libid}/videos`, { title: "video" }, { headers: headers })
            .then(async res => {
                await axios
                    .put(`http://video.bunnycdn.com/library/${res.data.videoLibraryId}/videos/${res.data.guid}
        `, e, {
                        headers: {
                            Accept: 'application/json',
                            AccessKey: apikey,
                            'content-type': 'video/x-m4v'
                        }
                    }
                    )
                    .then(res => {
                        console.log(res)
                        cogoToast.success("video upload successfully");

                    })
                    .catch(err => {
                        console.log(err);
                        cogoToast.error("error uploading video");
                    });
            })
            .catch(err => {
                console.log(err)
                cogoToast.error("error fetching library");
            });

           setLoading(false); 
    }

    const handleChange = (file) => {
        encodeFileBase64(file)
    }

    return (
        <div className='flex justify-center items-center sm:w-[65%] lg:w-[50%] w-full sm:mt-24 sm:mr-1 mr-5 '>
            <Loader loading={loading} />
            <div className='flex justify-center items  mx-auto w-full'>
                <form action="" className="w-full">
                    <div className="grid grid-cols-3 gap-3">
                            <a href='/upload' passHref className='sm:hidden col-span-3 w-full'>
                                <button className='text-white h-[40px] w-full md:text-lg whitespace-nowrap bg-black py-2 px-3 rounded-md'>+ Upload Video</button>
                            </a>
                        <input
                            className="sm:col-span-2 col-span-3 h-[52px] px-2 py-2 my-3 bg-[#F4F7F9] rounded-xl text-gray-700 placeholder-[#787C87] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent"
                            type="text"
                            placeholder="Enter source video URLs" />
                        <button type="submit" className="col-span-1 sm:col-start-3 sm:col-end-4  col-start-2 col-end-3 h-[51px] w-full rounded-full border-[1px] border-[#787C87] text-[#1E1E1F] py-2 px-2 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9]">Fetch videos</button>
                    </div>
                    <h1 className="text-center">OR</h1>
                    <div className="flex justify-center m-auto w-full h-[70px]">
                        <button className="rounded-full w-full flex justify-center border-[1px] border-[#787C87] text-[#1E1E1F] px-2 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] py-2 items-center">
                            <FiUpload className='text-black' />
                            <span className="ml-2 text-[#1E1E1F]">Upload Files</span>
                        </button>
                        <input className="cursor-pointer absolute opacity-0" type="file" name="videoFiles"  onChange={(e) => handleChange(e.target.files[0])} />
                    </div>
                    <h1 className='text-center text-[#787C87] text-xs'>Enter one URL per line. You can also add YouTube and Vimeo URLs.</h1>
                </form>
            </div>
        </div>
    )
}

export default Upload
