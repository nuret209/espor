import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src={"/images/sitelogo.svg"} height={48} width={42} alt='Site Logo'/>
            <div className="rounded-[5px] bg-gray-50 px-[4px]  py-[3px] text-subheading-xs text-gray-600 border ">V1.0</div>
        </div>
    )
}

export default Logo