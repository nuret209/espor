import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import MenuElement from './MenuElement'
import { IoMdClose } from "react-icons/io";
import { getMenus } from '@/lib/get';
const Menu = ({ active, setMenuActive }: { active: boolean, setMenuActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
        <div className={`fixed lg:!sticky z-[2] top-0 ${active ? "max-w-full  " : "max-w-0"} transition-[max-width] py-3 lg:max-w-full duration-500 h-screen w-full shrink-0 overflow-y-auto overflow-x-hidden border-r box-border  max-h-screen  bg-white lg:block `}>
            <div className='min-w-[100%] absolute'>
                <div className='flex justify-between items-center px-4 lg:px-6'>
                    <Logo />
                    <IoMdClose size={20} onClick={() => setMenuActive(false)} className="lg:hidden" />
                </div>
                <div className='flex min-w-full flex-col gap-4 pt-2 px-4 lg:px-6 '>
                    {data?.map((menu, index) => (
                        <MenuElement key={index} name={menu.title} submenus={menu.pages.map(page => ({ name: page.title, slug: page.slug }))} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu