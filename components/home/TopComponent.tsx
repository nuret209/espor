import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { BsTwitterX, BsGithub, BsDiscord } from "react-icons/bs";
const TopComponent = () => {
    return (
        <div className='flex justify-between items-center py-6 text-gray-400'>
            <button className='flex relative text-label-sm size-6 items-center gap-2 transition lg:h-9 lg:w-[456px] lg:rounded-[9px] lg:bg-gray-0 lg:pl-2.5 lg:pr-2 lg:text-left lg:ring-1 lg:ring-[#333]/10 hover:lg:bg-gray-25/50'>
                <RiSearchLine />
                <span className=''>Quich search...</span>
                <h5 className='absolute right-4 bg-[rgb(242,242,242)] text-[rgb(126,126,126)] px-[6px] rounded'>/</h5>
            </button>
            <div className='flex gap-3'>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'> <BsTwitterX /></div>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'> <BsDiscord /></div>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'>   <BsGithub /></div>
            </div>
        </div>
    )
}

export default TopComponent