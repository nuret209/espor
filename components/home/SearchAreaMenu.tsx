import React from 'react'
import Menus from "@/data/Menu.json"
import { RiArrowRightSLine } from "react-icons/ri";

const SearchAreaMenu = ({search} : {search : string}) => {
  
  return (
    <div className='overflow-auto h-60 '>
      {Menus.map((menu, i) =>
        <div key={i} >
          {!("submenus" in menu.submenus[0]) && <div className='px-3 py-2 mx-2 text-label-sm'>{menu.name}</div>}
          {menu.submenus.map(
            (submenu, index) =>
              <div key={index} className='flex flex-col'>
                {("submenus" in submenu) && <div className='px-3 py-2 text-label-sm mx-2'>{submenu.name}</div>}
                {'submenus' in submenu ? submenu.submenus.map(subsubmenu =>
                  (!search || subsubmenu.name.toLowerCase().includes(search.toLowerCase())) &&  <div key={subsubmenu.name} className='hovericon group flex items-center justify-between px-3 cursor-pointer py-2 mx-2 transition-all duration-200 hover:bg-[#f7f7f7] text-gray-900 text-paragraph-md'>
                  {subsubmenu.name} <RiArrowRightSLine  className='opacity-0 duration-200 transition-all group-hover:opacity-100'/>
                  </div>) :
                  (!search || submenu.name.toLowerCase().includes(search.toLowerCase())) &&  <div key={submenu.name} className='hovericon group flex items-center justify-between px-3 cursor-pointer py-2 mx-2 transition-all duration-200 hover:bg-[#f7f7f7] text-gray-900 text-paragraph-md'>
                    {submenu.name} <RiArrowRightSLine  className='opacity-0 duration-200 transition-all group-hover:opacity-100'/>
</div>
                }
              </div>
          )} </div>
      )}
    </div>
  )
}

export default SearchAreaMenu