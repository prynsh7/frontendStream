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
        <div className='flex justify-center items-center mt-24'>
            <Loader loading={loading} />
            <div className='flex justify-center items'>
                <form action="" className="">
                    <div className="flex justify-between mx-4">
                        <input
                            className="w-[296px] h-[52px] px-2 py-2 my-3 bg-[#F4F7F9] rounded-xl text-gray-700 placeholder-[#787C87] shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent"
                            type="text"
                            placeholder="Enter source video URLs" />
                        <button type="submit" className="w-[153px] h-[51px] rounded-full border-[1px] border-[#787C87] text-[#1E1E1F] py-2 px-2 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9]">Fetch videos</button>
                    </div>
                    <h1 className="text-center">OR</h1>
                    <div className="flex justify-center m-auto mx-4 w-[474px] h-[70px]">
                        <button className=" rounded-full w-full flex justify-center border-[1px] border-[#787C87] text-[#1E1E1F] px-2 my-3 bg-gradient-to-b from-[#F7F7F7] to-[#D6D7D9] py-2 items-center">
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
