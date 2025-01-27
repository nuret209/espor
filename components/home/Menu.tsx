import React from 'react'
import Logo from './Logo'
import Menus from "@/data/Menu.json"
import MenuElement from './MenuElement'
import { IoMdClose } from "react-icons/io";
const Menu = ({ active, setMenuActive }: { active: boolean, setMenuActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={`fixed lg:!sticky z-[2] top-0 ${active ? "max-w-full  " : "max-w-0"} transition-[max-width] py-3 lg:max-w-full duration-500 h-screen w-full shrink-0 overflow-y-auto overflow-x-hidden border-r box-border  max-h-screen  bg-white lg:block `}>
            <div className='min-w-[100%] absolute'>
                <div className='flex justify-between items-center px-4 lg:px-6'>
                    <Logo />
                    <IoMdClose size={20} onClick={() => setMenuActive(false)} className="lg:hidden" />
                </div>
                <div className='flex min-w-full flex-col gap-4 pt-2 px-4 lg:px-6 '>
                    {Menus.map((menu, index) => <MenuElement key={index} name={menu.name} submenus={menu.submenus} />)}
                </div>
            </div>
        </div>
    )
}

export default Menu