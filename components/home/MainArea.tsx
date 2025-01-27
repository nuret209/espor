"use client"
import TitleMenu from './TitleMenu';
import TopComponent from './TopComponent';
import DS from "@/docs/introduction.mdx";
import Copyright from "./Copyright"

const MainArea = ({setMenuActive} : {setMenuActive: React.Dispatch<React.SetStateAction<boolean>>}) => {

    return (
        <div className='flex flex-col px-4 lg:pl-0 lg:pr-6 text-gray-900  '>
            <TopComponent setMenuActive={setMenuActive} />
            <hr />
            <div className='relative flex-1 xl:grid xl:grid-cols-[minmax(0,1fr)_288px]'>
                <div className='markdown flex w-full flex-1 flex-col pt-2 lg:max-w-3xl overflow-auto lg:pr-6'>
                    <DS />    
                    <Copyright />
                </div>
                <TitleMenu />
            </div>
        </div>
    )
}

export default MainArea