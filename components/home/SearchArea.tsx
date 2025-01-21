import React from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri'
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

const SearchArea = ({ setActive }: { setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className='fixed inset-0 z-50 md:py-36 flex flex-col overflow-y-auto md:items-center md:justify-center md:bg-overlay md:p-4 md:backdrop-blur-[10px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'>
      <div className='bg-white rounded-lg flex flex-col justify-center lg:min-w-[540px]'>
        <div className='flex items-center h-16'>
          <RiSearchLine size={24} className='m-4' />
          <input type="text" className='outline-none caret-[#f05023] w-full' placeholder="Type a command or search..." />
          <RiCloseLine size={24} className='m-4 cursor-pointer' onClick={() => setActive(false)} />
        </div>
        <div className='flex justify-between h-16 items-center px-5 border-t border-gray-100 bg-[#f7f7f7] rounded-b-lg'>
          <div className='flex gap-2  text-gray-500'>
            <div className='flex h-6 w-7 shrink-0 items-center justify-center rounded-[5px] bg-gray-200'><HiArrowNarrowUp size={18} /></div>
            <div className='flex h-6 w-7 shrink-0 items-center justify-center rounded-[5px] bg-gray-200'><HiArrowNarrowDown size={18} /></div>
            Navigate
            <div className='flex h-6 w-7 shrink-0 items-center justify-center rounded-[5px] bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" className="size-[18px]"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="m5.455 13-2.36-2.202a.29.29 0 0 1 0-.427l2.36-2.201m-1.618 2.415h9.869c.715 0 1.294-.54 1.294-1.208v-3.17C15 5.542 14.42 5 13.706 5H8.852"></path></svg></div>
            Select
          </div>
          <div className='flex gap-2 text-gray-500'>
            Close
            <div className='flex h-6 w-7 shrink-0 text-label-xs items-center justify-center rounded-[5px] bg-gray-200'>ESC</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchArea