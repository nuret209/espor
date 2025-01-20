import React, { useEffect, useState } from 'react'

const TitleMenu = () => {
    const [titles, setTitles] = useState<string[]>([]);
    const [activeTitle, setActiveTitle] = useState<string>()
    const checkTitles = () => {
        document.querySelectorAll("h2").forEach(title => {
            const rect = title.getBoundingClientRect();
            if (
                rect.top >=  0&&
                rect.left >= 0 &&
                rect.bottom <=  -500 + (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                setActiveTitle(title.innerText)
                return;
            }
        })
    }
    React.useEffect(() => {
        window.addEventListener("scroll", checkTitles)
    })
    useEffect(() => {
        document.querySelectorAll("h2").forEach(title => {
            setTitles(prevTitles => [...prevTitles, title.innerText])
            title.id = (title.innerText.toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-'))
        })

    }, [])
    return (

        <div className='mt-8 hidden border-l border-gray-100 xl:block '>
            <div className='sticky top-6'>
                <div className='flex items-center gap-1.5 text-[11px]/[12px] font-550 px-6 text-[#a3a3a3] uppercase'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className="size-3"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.375 6h9.25m-9.25-3.125h9.25m-9.25 6.25H5.75"></path></svg>
                    On this Page
                </div>
                <div className='flex flex-col text-label-xs mt-4 gap-4 text-[#525252]'>
                    {titles.map(title =>
                        <a key={title} className={`${title == activeTitle ? "text-[#f05023]  border-l border-[#f05023] " : " "}px-6`} href={`#${title.toLowerCase()
                            .trim()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-')
                            .replace(/-+/g, '-')}`}>{title}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TitleMenu