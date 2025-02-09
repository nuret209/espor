"use client"
import { editContent, editContentText, editMenu, editPage } from '@/lib/edit';
import { getContents, getMenus } from '@/lib/get';
import React, { useEffect, useState } from 'react'

const PAGE = () => {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [selectedContent, setSelectedContent] = useState("");
    const [editedMenu, setEditedMenu] = useState(selectedMenu);
    const [editedPage, setEditedPage] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const [editedContentText, setEditedContentText] = useState("");


    const [data, setData] = useState<
        {
            title: string;
            pages: {
                title: string
                , slug: string,
                Content: {
                    title: string,
                    content: string
                }[]
            }[]
        }[]>();

    useEffect(() => {
        getMenus().then(res => setData(res))
    }, [])
    useEffect(() => {
        setEditedMenu(selectedMenu)
        setEditedPage(selectedPage)
        setEditedContent(selectedContent)
        getContents(selectedMenu, selectedPage, selectedContent)
            .then(content => setEditedContentText(content?.content ?? ''))

    }, [selectedMenu, selectedContent, selectedPage])
    return (
        <div>
            <h2 className='text-[32px]'>Edit Page</h2>
            <select name="" onChange={e => setSelectedMenu(e.target.value.trim())} id="" className='border-2'>
                <option value="">Menu</option>
                {data?.map((c, index) =>
                    <option key={index}>{c.title}</option>
                )}
            </select>
            <select name="" id="" className='border-2' onChange={e => setSelectedPage(e.target.value.trim())}>
                <option value="">Page</option>
                {data?.map(e => (e.title.trim() == selectedMenu) && e.pages.map((p, index) => <option key={index}>{p.title}</option>))};
            </select>
            <select name="" id="" className='border-2' onChange={e => setSelectedContent(e.target.value.trim())}>
                <option value="">Content</option>
                {data?.map(e => (e.title.trim() == selectedMenu) && e.pages.map(p => (p.title.trim() == selectedPage) && p.Content.map((c, index) => <option key={index}>{c.title}</option>)))};
            </select>
            <div className='flex flex-col w-52'>
                {selectedMenu && <> <input type="text" value={editedMenu} onChange={e => setEditedMenu(e.target.value)} className='border-2 p-2 rounded-10' /> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => (editMenu(selectedMenu, editedMenu || "").then(c => c == true && alert("ok refresh page")))}>Menü Kaydet</button></>}
                {selectedPage && <> <input type="text" value={editedPage} onChange={e => setEditedPage(e.target.value)} className='border-2 p-2 rounded-10' /> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => editPage(selectedMenu,selectedPage, editedPage || "").then(c => c == true && alert("ok refresh page"))}> Sayfa Kaydet</button></>}
                {selectedContent && <> <input type="text" value={editedContent} onChange={e => setEditedContent(e.target.value)} className='border-2 p-2 rounded-10' /> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => editContent(selectedMenu,selectedPage,selectedContent, editedContent || "").then(c => c == true && alert("ok refresh page"))}>Content Kaydet</button></>}
                {selectedContent && <> <textarea value={editedContentText} onChange={e => setEditedContentText(e.target.value)} id=""></textarea> <button className='bg-red-600 p-3 rounded-lg text-white mt-1 mb-3' onClick={() => editContentText(selectedMenu,selectedPage,selectedContent, editedContentText || "").then(c => c == true && alert("ok refresh page"))}>Content Text Kaydet</button></>}
            </div>
        </div>
    )
}



export default PAGE