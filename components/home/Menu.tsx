import React from 'react'
import Logo from './Logo'
import Menus  from "@/data/Menu.json"
import MenuElement from './MenuElement'
const Menu = () => {
    return (
        <div className='!sticky top-0 z-30 hidden h-screen w-full shrink-0 overflow-hidden border-r px-6 py-6 lg:block'>
           <Logo />
            <div className='flex w-full flex-col gap-4 pt-2'>
            {Menus.map((menu, index) => <MenuElement key={index} name={menu.name} submenus={menu.submenus}/>)}
            </div>
        </div>
    )
}

export default Menu