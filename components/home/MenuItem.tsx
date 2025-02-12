import React from 'react'


interface MenuItemProps {
    name: string
    submenus: Array<{ name: string, slug: string }>
    currentPage : string
}

const MenuItem = (props: MenuItemProps) => {
    return (
        <div className='flex flex-col min-w-full mt-5'>
            <div className='text-label-xs font-semibold leading-6 text-gray-400 px-2'>
                {props.name}
            </div>
            <div className='mt-2 flex-col flex gap-2'>
                {props.submenus.map((menu, index) => (
                    <a key={index}  href={`/${props.name.toLowerCase()
                        .replace(/\s+/g, '')
                        .replace(/[^\w\-]+/g, '')}/${menu.slug}`} className={`flex whitespace-nowrap items-center hover:bg-gray-50 p-2 px-2 ${props.currentPage == menu.slug ? "bg-gray-50 text-gray-600" : "text-[#333]"}`}>
                        <span className='h-6 w-6 flex items-center justify-center text-label-xs border text-[#a3a3a3] rounded-md '>{menu.name[0].toUpperCase()}</span>
                        <span className='ml-3 font-semibold'>
                            {menu.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MenuItem