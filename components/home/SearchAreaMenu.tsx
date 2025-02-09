import React, { useEffect, useState } from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import { getMenus } from '@/lib/get';

const SearchAreaMenu = ({ search }: { search: string }) => {
  const [data, setData] = useState<
    {
      title: string;
      pages: {
        title: string
        , slug: string
      }[]
    }[]>();
  useEffect(() => {
    getMenus().then(res => setData(res))
  }, [])
  return (
    <div className='overflow-auto h-full mt-2'>
      {data?.map((menu, i) =>
        <div key={i} >
          <div className='px-3 py-2 text-label-xs mx-2 text-[#8f8f8f]'>{menu.title}</div>
          {menu.pages.map(
            (submenu, index) =>
              <a href={`/${menu.title.toLowerCase()
                .replace(/\s+/g, '')
                .replace(/[^\w\-]+/g, '')}/${submenu.slug}`} key={index} className='flex flex-col'>
                {(!search || submenu.title.toLowerCase().includes(search.toLowerCase())) && <div key={submenu.title} className='hovericon group text-[#b8b8b8] lg:text-gray-700  flex items-center justify-between px-3 cursor-pointer py-2 mx-2 transition-all duration-200 lg:hover:bg-[#f7f7f7] text-paragraph-md'>
                  {submenu.title} <RiArrowRightSLine className='lg:opacity-0  text-[#525252] duration-200 transition-all group-hover:opacity-100' />
                </div>}
                {("submenus" in submenu) && <div className="px-5 lg:px-0  my-2">
                  <div className="h-px w-full bg-black/[.72] lg:bg-[#ebebeb] lg:!shadow-none [box-shadow:rgba(255,_255,_255,_0.06)_0px_1px_0px]">
                  </div>
                </div>}
              </a>
          )}
          <div className="px-5 lg:px-0 my-4">
            <div className="h-px w-full bg-black/[.72] lg:bg-[#ebebeb] lg:!shadow-none [box-shadow:rgba(255,_255,_255,_0.06)_0px_1px_0px]">
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchAreaMenu