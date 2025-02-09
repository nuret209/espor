"use client"
import { addContent, addMenu, addPage } from '@/lib/add';
import { getMenus, getPages } from '@/lib/get';
import React, { useEffect, useState } from 'react'


const AddPage = () => {
    const [mode, setMode] = useState("");
    const [selectedMenu, setSelectedMenu] = useState("");
    const [selectedPage, setSelectedPage] = useState("");

    const [menusData, setMenusData] = useState<Array<string>>([]);
    const [pagesData, setPagesData] = useState<Array<string>>([]);

    const [slug, setSlug] = useState("")
    const [text, setText] = useState("")

    const [menuName, setMenuName] = useState("");
    const [pageName, setPageName] = useState("");
    const [contentName, setContentName] = useState("");


    const HandleMenu = () => {
        if (!menuName) {
            alert('Please enter menu name');
            return;
        }
        addMenu(menuName).then(res => res ? alert("Success!") : alert("Something went wrong check console"));
    }
    const handePage = () => {
        if (!pageName || !selectedMenu || !slug) {
            alert('Please enter page name and select menu and enter slug');
            return;
        }
        addPage(pageName, slug, selectedMenu).then(res => res ? alert("Success!") : alert("Something went wrong check console"));
    }
    const handleContent = () => {
        if (!contentName || !selectedPage || !text) {
            alert('Please enter content name and select page and enter text');
            return;
        }
        addContent(text, contentName, selectedPage).then(res => res ? alert("Success!") : alert("Something went wrong check console"));
    }
    useEffect(() => {
        if (mode == "Add Page")
            getMenus().then(menus => menus.map(menuName => setMenusData(prevState => [...prevState, menuName.title])))

        if (mode == "Add Content")
            getPages().then(pages =>
                pages.map(pageName =>
                    setPagesData(prevState =>
                        [...prevState, pageName.title])))

    }, [mode])

    return (
        <div className=''>
            <h2 className='text-[32px]'>Add Page</h2>
            <select name="" id="" className="border-2" onChange={(e) => setMode(e.target.value)}>
                <option value="">Select Mode</option>
                <option >Add Menu</option>
                <option >Add Page</option>
                <option >Add Content</option>
            </select>
            {mode == "Add Menu" && <div>
                <input type="text" placeholder='Menu Title' onChange={e => setMenuName(e.target.value)} value={menuName} className='p-2 rounded-lg border-2' />
                <button onClick={HandleMenu}>Add</button>
            </div>}
            {mode == "Add Page" && <div>
                <select value={selectedMenu} onChange={e => setSelectedMenu(e.target.value)}>
                    <option value="">Select Menu</option>
                    {menusData.map((menu, index) => <option key={index} value={menu.toString()}>{menu}</option>)}
                </select>
                <input type="text" placeholder='Page Title' className='p-2 rounded-lg border-2' onChange={e => setPageName(e.target.value)} value={pageName} />
                <input type="text" placeholder='slug' className='p-2 rounded-lg border-2' onChange={e => setSlug(e.target.value)} value={slug} />
                <button onClick={handePage}>Add</button>
            </div>}
            {mode === "Add Content" &&
                <div>
                    <select value={selectedPage} onChange={e => setSelectedPage(e.target.value)}>
                        <option value="">Select Page</option>
                        {pagesData.map((menu, index) => <option key={index} value={menu.toString()}>{menu}</option>)}
                    </select>
                    <input type="text" placeholder='Content Title' className='p-2 rounded-lg border-2' onChange={e => setContentName(e.target.value)} value={contentName} />
                    <br />
                    <textarea placeholder='slug' className='p-2 rounded-lg border-2' onChange={e => setText(e.target.value)} value={text}></textarea>
                    <br />
                    <button onClick={handleContent}>Add</button>
                </div>
            }
        </div>
    )
}

export default AddPage