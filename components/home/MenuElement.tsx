import React from 'react'
import DashedLine from './DashedLine';
import Accordion from './Accordion';

interface MenuElementProps {
    name: string
    submenus: Array<{ name: string, slug: string }>
}

const MenuElement = (props: MenuElementProps) => {
    return (
        <>
            <DashedLine />
            <Accordion title={props.name} classname='flex flex-col min-w-full'>
                {props.submenus?.map((menu , index) => <div key={index} className={`text-label-sm cursor-pointer min-w-full  transition-all text-[#707070] hover:text-gray-900 pt-4`}>
                    <a href={`/${props.name.toLowerCase()
                        .replace(/\s+/g, '')
                        .replace(/[^\w\-]+/g, '')}/${menu.slug}`} className='flex whitespace-nowrap items-center'>{menu.name}</a>
                </div>)}
            </Accordion>
        </>
    )
}

export default MenuElement