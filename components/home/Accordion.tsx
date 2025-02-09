"use client"
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface AccordionProps {
    title: string
    children?: React.ReactNode
    classname : string
}


const Accordion = (props: AccordionProps) => {
    const [active, setActive] = React.useState(true)
    const divRef = React.useRef<HTMLDivElement>(null)
    return (
        <div>
            <div className='cursor-pointer py-2 w-full flex justify-between items-center' onClick={() => setActive(!active)}>{props.title} <IoIosArrowDown size={12} className='text-gray-500'/></div>
            <div ref={divRef} className={`transition-all duration-300 overflow-hidden ${props.classname} `} style={{maxHeight : active ? divRef.current?.scrollHeight + "px" : "0px"}}>{props.children}</div>
        </div>
    )
}



export default Accordion