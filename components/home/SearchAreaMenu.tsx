import React from 'react'
import Menus from "@/data/Menu.json"
import { RiArrowRightSLine } from "react-icons/ri";

const SearchAreaMenu = ({ search }: { search: string }) => {

  return (
    <div className='overflow-auto h-full mt-2'>
      {Menus.map((menu, i) =>
        <div key={i} >
          {!("submenus" in menu.submenus[0]) && <div className='px-3 py-2 text-label-xs mx-2 text-[#8f8f8f]'>{menu.name}</div>}
          {menu.submenus.map(
            (submenu, index) =>
              <div key={index} className='flex flex-col'>
                {("submenus" in submenu) && <div className='px-3 py-2 text-label-xs mx-2 text-[#8f8f8f]'>{submenu.name}</div>}
                {'submenus' in submenu ? submenu.submenus.map(subsubmenu =>
                  (!search || subsubmenu.name.toLowerCase().includes(search.toLowerCase())) && <div key={subsubmenu.name} className='hovericon group text-[#c4c4c4] lg:text-gray-700 flex items-center justify-between px-3 cursor-pointer py-2 mx-2 transition-all duration-200 lg:hover:bg-[#f7f7f7] text-gray-900 text-paragraph-md'>
                    {subsubmenu.name} <RiArrowRightSLine className='lg:opacity-0  text-[#525252] duration-200 transition-all group-hover:opacity-100' />
                  </div>) :
                  (!search || submenu.name.toLowerCase().includes(search.toLowerCase())) && <div key={submenu.name} className='hovericon group text-[#c4c4c4] lg:text-gray-700  flex items-center justify-between px-3 cursor-pointer py-2 mx-2 transition-all duration-200 lg:hover:bg-[#f7f7f7] text-gray-900 text-paragraph-md'>
                    {submenu.name} <RiArrowRightSLine className='lg::opacity-0  text-[#525252] duration-200 transition-all group-hover:opacity-100' />
                  </div>
                }
                {("submenus" in submenu) && <div className="px-5 lg:px-0  my-2">
            <div className="h-px w-full bg-black/[.72] lg:bg-[#ebebeb] lg:!shadow-none [box-shadow:rgba(255,_255,_255,_0.06)_0px_1px_0px]">
            </div>
          </div>}
              </div>
          )}
           {!("submenus" in menu.submenus[0]) && <div className="px-5 lg:px-0 my-4">
            <div className="h-px w-full bg-black/[.72] lg:bg-[#ebebeb] lg:!shadow-none [box-shadow:rgba(255,_255,_255,_0.06)_0px_1px_0px]">
            </div>
          </div>}
        </div>

      )}
    </div>
  )
}

export default SearchAreaMenu