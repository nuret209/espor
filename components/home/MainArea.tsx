"use client"
import TitleMenu from './TitleMenu';
import TopComponent from './TopComponent';
import Copyright from "./Copyright"
import { useEffect, useState } from 'react';
import { getContentsWithSlug } from '@/lib/get';
import Content from './Content';

const MainArea = ({ setMenuActive, slug }: { setMenuActive: React.Dispatch<React.SetStateAction<boolean>>, slug: string }) => {
    const [data, setData] = useState<{
        title: string;
        content: string;
    }[]>();
    useEffect(() => {
        getContentsWithSlug(slug).then((res) => {
            if (res) {
                setData(res.Content.map((content) => ({
                    title: content.title,
                    content: content.content,
                })));
            }
        });
    });
    return (
        <div className='flex flex-col px-4 lg:pl-0 lg:pr-6 text-gray-900 '>
            <TopComponent setMenuActive={setMenuActive} />
            <hr />
            <div className='relative flex-1 xl:grid xl:grid-cols-[minmax(0,1fr)_288px]'>
                <div className='markdown flex w-full flex-1 flex-col pt-2 lg:max-w-3xl overflow-auto lg:pr-6'>
                    { /*   <div>
                        <h1>{title}</h1>
                        <DashedLine />
                    </div>*/}
                    {data?.map((c,i) => <Content key={i} title={c.title} content={c.content} /> )}
                    <Copyright />
                </div>
                {data && <TitleMenu />}
            </div>
        </div>
    )
}

export default MainArea