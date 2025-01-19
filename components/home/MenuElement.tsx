import React from 'react'
import DashedLine from './DashedLine';
import Accordion from './Accordion';

interface MenuElementProps {
    name: string
    icon?: string
    submenus?: Array<{ name: string, icon?: string, submenus: Array<{ name: string }> }>
}

const MenuElement = (props: MenuElementProps) => {
    console.log();

    return (
        <>
            <DashedLine />
            <Accordion title={props.name} classname='flex flex-col'>
                {props.submenus?.map(menu => <div key={menu.name} className={`text-label-sm cursor-pointer  transition-all ${typeof menu.submenus == 'object' ? "text-gray-900 pt-3" : "text-[#707070] hover:text-gray-900 pt-4"}`}>
                    <div className='flex items-center'>{menu.icon && <img src={`/images/${menu.icon}`} alt={menu.name} className='w-4 h-4' />}{menu.name}</div>
                    {typeof menu.submenus == 'object' && <div className='pl-5 relative border-l border-gray-200 flex flex-col gap-4 mt-5'>
                      {menu.submenus.map(m => <div key={m.name} className='text-[#707070] hover:text-gray-900'>  {m.name}</div>)}
                    </div>}
                    
                </div>)}
            </Accordion>
        </>
    )
}

export default MenuElement