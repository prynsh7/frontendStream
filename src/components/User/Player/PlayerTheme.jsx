import { BsPlay } from 'react-icons/bs'

const PlayerTheme = () => {
    return (
        <div className="flex flex-row gap-2">
            <div className="flex justify-center items-center w-24 flex-grow h-[66px] border-[1px] border-dashed">
                <p className="text-xs text-center"><BsPlay size={20} /></p>
            </div>
            <div className="flex justify-center items-center w-24 flex-grow h-[66px] border-[1px] border-dashed">
                <p className="text-xs text-center"><BsPlay size={20} /></p>
            </div>
            <div className="flex justify-center items-center w-24 flex-grow h-[66px] border-[1px] border-dashed">
                <p className="text-xs text-center"><BsPlay size={20} /></p>
            </div>
            <div className="flex justify-center items-center w-24 flex-grow h-[66px] border-[1px] border-dashed">
                <p className="text-xs text-center"><BsPlay size={20} /></p>
            </div>
            <div className="flex justify-center items-center w-24 flex-grow h-[66px] border-[1px] border-dashed">
                <p className="text-xs text-center"><BsPlay size={20} /></p>
            </div>
        </div>
    )
}

export default PlayerTheme