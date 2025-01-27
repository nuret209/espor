import React, { useEffect } from 'react'
import { RiSearchLine } from "react-icons/ri";
import { BsTwitterX, BsGithub, BsDiscord } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import SearchArea from './SearchArea';
import Logo from './Logo';
const TopComponent = ({setMenuActive} : {setMenuActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [searchActive, setSearchActive] = React.useState(false)

    useEffect(() => {
        if (searchActive) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'auto'
    }, [searchActive])

    return (
        <div className='flex justify-between items-center py-3 lg:py-6 text-gray-400'>
            <div className='lg:hidden w-full flex justify-between'>
                <Logo />
                <div className='flex items-center text-label-xl gap-4 text-gray-500 cursor-pointer'>
                    <RiSearchLine onClick={() => setSearchActive(true)}  />
                    <HiOutlineMenuAlt3 onClick={() => setMenuActive(true)}  />
                </div>
            </div>
            <button onClick={() => setSearchActive(true)} className='hidden lg:flex relative text-label-sm size-6 items-center gap-2 transition md:h-9 md:w-[456px] md:rounded-[9px] md:bg-gray-0 md:pl-2.5 md:pr-2 md:text-left md:ring-1 md:ring-[#333]/10 hover:md:bg-gray-25/50'>
                <RiSearchLine />
                <span className=''>Quich search...</span>
                <h5 className='absolute right-4 bg-[rgb(242,242,242)] text-[rgb(126,126,126)] px-[6px] rounded'>/</h5>
            </button>
            <div className='lg:flex hidden gap-3'>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'> <BsTwitterX /></div>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'> <BsDiscord /></div>
                <div className='p-2 cursor-pointer hover:bg-[rgb(242,242,242)] rounded-md'>   <BsGithub /></div>
            </div>
 <div className={`${!searchActive ? "opacity-0 pointer-events-none" : "opacity-100"}  transition-all maindiv z-[9999]`}><SearchArea setActive={setSearchActive}/></div> 
        </div>
    )
}

export default TopComponent