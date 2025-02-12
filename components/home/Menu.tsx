import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { IoMdClose } from "react-icons/io";
import { getMenus } from '@/lib/get';
import MenuItem from './MenuItem';
import { HiOutlineLightningBolt, HiOutlineDocumentText } from "react-icons/hi";
import { MdOutlinePrivacyTip, MdOutlineSettings } from "react-icons/md";

const iconByName = [
    { name: "Introduction", icon: <HiOutlineLightningBolt size={24} /> },
    { name: "Privacy Policy", icon: <MdOutlinePrivacyTip size={24} /> },
    { name: "About", icon: <HiOutlineDocumentText size={24} /> }
]


const Menu = ({ active, setMenuActive, currentPage }: { currentPage: string, active: boolean, setMenuActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
        <>
            <div className={`fixed lg:!sticky z-[2] top-0 ${active ? "max-w-full  " : "max-w-0"} transition-[max-width] py-3 lg:max-w-full duration-500 h-screen w-full shrink-0 overflow-y-auto overflow-x-hidden border-r box-border  max-h-screen  bg-white lg:block `}>
                <div className='min-w-[100%]  h-[calc(100%-16px)] absolute flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between items-center px-4 lg:px-6'>
                            <Logo />
                            <IoMdClose size={20} onClick={() => setMenuActive(false)} className="lg:hidden" />
                        </div>
                        <div className='flex min-w-full flex-col gap-1 pt-2 px-4'>
                            {data?.map((menu, index) => (
                                menu.title == "main-items" ?
                                    menu.pages.map((page, index) =>
                                        <a key={index} href={`/${menu.title.toLowerCase()
                                            .replace(/\s+/g, '')
                                            .replace(/[^\w\-]+/g, '')}/${page.slug}`} className={`flex whitespace-nowrap items-center hover:bg-gray-50 px-2 ${currentPage == page.slug ? "bg-gray-50 text-gray-600" : "text-[#333]"}`}>
                                            <span className='text-gray-400'>{iconByName.find(item => item.name == page.title)?.icon}</span>
                                            <span className=' font-semibold  p-2'>
                                                {page.title}
                                            </span>
                                        </a>
                                    )
                                    :
                                    <MenuItem currentPage={currentPage} key={index} name={menu.title} submenus={menu.pages.map(page => ({ name: page.title, slug: page.slug }))} />
                            ))}
                        </div>
                        
                    </div>
                    <div className='p-2'>
                        <a href={`/settings`} className={`flex whitespace-nowrap items-center hover:bg-gray-50 px-2 ${currentPage == "settings" ? "bg-gray-50 text-gray-600" : "text-[#333]"}`}>
                            <span className='text-gray-400'><MdOutlineSettings size={24} /> </span>
                            <span className=' font-semibold  p-2'>
                                Settings
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu