"use client"
import { deleteContent, deleteMenu, deletePage } from '@/lib/delete';
import { getContentsWithMenu, getMenus, getPagesWithMenu } from '@/lib/get';
import React, { useEffect, useState } from 'react'

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
            <h2 className='text-[32px]'>Edit Page</h2>
            <select name="" onChange={e => setSelectedMenu(e.target.value.trim())} id="" className='border-2'>
                <option value="">Menu</option>
                {menus?.map((c, index) =>
                    <option key={index}>{c.title}</option>
                )}
            </select>
            <select name="" id="" className='border-2' onChange={e => setSelectedPage(e.target.value.trim())}>
                <option value="">Page</option>
                {pages?.map((e, index) => <option key={index}>{e.title}</option>)};
            </select>
            <select name="" id="" className='border-2' onChange={e => setSelectedContent(e.target.value.trim())}>
                <option value="">Content</option>
                {contents?.map((c, index) => <option key={index}>{c.title}</option>)};
            </select>
            <div className='flex flex-col w-52'>
                {selectedMenu && <> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => (deleteMenu(selectedMenu).then(c => c == true && alert("ok refresh page")))}>Menü Sil</button></>}
                {selectedPage && <> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => deletePage(selectedMenu, selectedPage).then(c => c == true && alert("ok refresh page"))}> Sayfa Sil</button></>}
                {selectedContent && <> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => deleteContent(selectedMenu, selectedPage, selectedContent).then(c => c == true && alert("ok refresh page"))}>Content Sil</button></>}
            </div>
        </div>
    )
}
export default DeletePage