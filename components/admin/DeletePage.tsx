"use client"
import { deleteContent, deleteMenu, deletePage } from '@/lib/delete';
import { getContentsWithMenu, getMenus, getPagesWithMenu } from '@/lib/get';
import React, { useEffect, useState } from 'react'

import * as Select from '@/components/ui/select';
import * as Button from '@/components/ui/button';

const DeletePage = () => {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [selectedContent, setSelectedContent] = useState("");
    const [menus, setMenus] = useState<{ title: string }[]>();
    const [pages, setPages] = useState<{ title: string, slug: string }[]>();
    const [contents, setContent] = useState<{ title: string, content: string }[]>();

    useEffect(() => {
        getMenus().then(res => {
            if (res) {
                setMenus(res.map(menu => ({ ...menu })));
            }
        });
        getPagesWithMenu(selectedMenu).then(res => {
            if (res) {
                setPages(res.map(page => ({ ...page })));
            }
        }
        )
        getContentsWithMenu(selectedMenu, selectedPage).then(res => {
            if (res) {
                setContent(res.map(content => ({ ...content })));
            }
        });
    }, [selectedMenu, selectedPage, selectedContent]);
    return (
        <div>
            <h2 className='text-[32px]'>Delete Page</h2>
           <div className='flex gap-4'>
                           <Select.Root onValueChange={(value) => setSelectedMenu(value.trim())}>
                               <Select.Trigger className='w-52'>
                                   <Select.Value placeholder='Select Menu' />
                               </Select.Trigger>
                               <Select.Content>
                                   {menus?.map((item, i) => (
                                       <Select.Item key={i} value={item.title}>
                                           {item.title}
                                       </Select.Item>
                                   ))}
                               </Select.Content>
                           </Select.Root>
                           <Select.Root onValueChange={(value) => setSelectedPage(value.trim())}>
                               <Select.Trigger className='w-52'>
                                   <Select.Value placeholder='Select Page' />
                               </Select.Trigger>
                               <Select.Content>
                                   {pages?.map((item, i) => (
                                       <Select.Item key={i} value={item.title}>
                                           {item.title}
                                       </Select.Item>
                                   ))}
                               </Select.Content>
                           </Select.Root>
                           <Select.Root onValueChange={(value) => setSelectedContent(value.trim())}>
                               <Select.Trigger className='w-52'>
                                   <Select.Value placeholder='Select Content' />
                               </Select.Trigger>
                               <Select.Content>
                                   {contents?.map((item, i) => (
                                       <Select.Item key={i} value={item.title}>
                                           {item.title}
                                       </Select.Item>
                                   ))}
                               </Select.Content>
                           </Select.Root>
                       </div>
            <div className='flex flex-col w-52'>
                {selectedMenu && <> <Button.Root className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => (deleteMenu(selectedMenu).then(c => c == true && alert("ok refresh page")))}>Menü Sil</Button.Root></>}
                {selectedPage && <> <Button.Root className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => deletePage(selectedMenu, selectedPage).then(c => c == true && alert("ok refresh page"))}> Sayfa Sil</Button.Root></>}
                {selectedContent && <> <Button.Root className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => deleteContent(selectedMenu, selectedPage, selectedContent).then(c => c == true && alert("ok refresh page"))}>Content Sil</Button.Root></>}
            </div>
        </div>
    )
}
export default DeletePage