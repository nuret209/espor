"use client"
import { addContent, addMenu, addPage } from '@/lib/add';
import { getMenus, getPages } from '@/lib/get';


import React, { useEffect, useState } from 'react'
import * as Select from '@/components/ui/select';
import * as Textarea from '@/components/ui/textarea';
import * as Button from '@/components/ui/button';
import { Input } from "antd"



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
    const modes = ["Add Menu", "Add Page", "Add Content"]
    return (
        <div className=''>
            <h2 className='text-[32px]'>Add Page</h2>
            <Select.Root onValueChange={(value) => setMode(value)} >
                <Select.Trigger className='w-52 mb-5'>
                    <Select.Value placeholder='Select Mode' />
                </Select.Trigger>
                <Select.Content>
                    {modes?.map((item, i) => (
                        <Select.Item key={i} value={item}>
                            {item}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>

            {mode == "Add Menu" && <div className='flex flex-col md:flex-row gap-4'>
                <Input type="text" placeholder='Menu Title' onChange={e => setMenuName(e.target.value)} value={menuName} className='p-2 rounded-lg border-2 w-52' />
                <Button.Root onClick={HandleMenu}>Add</Button.Root>
            </div>}
            {mode == "Add Page" && <div className='flex flex-col md:flex-row gap-4'>
                <Select.Root onValueChange={(value) => setSelectedMenu(value)} >
                    <Select.Trigger className='w-52'>
                        <Select.Value placeholder='Select Menu' />
                    </Select.Trigger>
                    <Select.Content>
                        {menusData?.map((item, i) => (
                            <Select.Item key={i} value={item.toString()}>
                                {item}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Root>
                <Input type="text" placeholder='Page Title' className='p-2 rounded-lg border-2 w-52' onChange={e => setPageName(e.target.value)} value={pageName} />
                <Input type="text" placeholder='slug' className='p-2 rounded-lg border-2 w-52' onChange={e => setSlug(e.target.value)} value={slug} />
                <Button.Root onClick={handePage}>Add</Button.Root>
            </div>}
            {mode === "Add Content" &&
                <div className='flex flex-col md:flex-row gap-4'>
                    <Select.Root onValueChange={(value) => setSelectedPage(value)} >
                        <Select.Trigger className='w-52'>
                            <Select.Value placeholder='Select Page' />
                        </Select.Trigger>
                        <Select.Content>
                            {pagesData?.map((item, i) => (
                                <Select.Item key={i} value={item.toString()}>
                                    {item}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                    <Input type="text" placeholder='Content Title' className='p-2 rounded-lg border-2 w-52 h-10' onChange={e => setContentName(e.target.value)} value={contentName} />
                    <Textarea.Root placeholder='Enter Text' className='p-2  w-52' onChange={e => setText(e.target.value)} value={text} >
                        <Textarea.CharCounter current={text.length} max={1000} />
                    </Textarea.Root>
                    <Button.Root onClick={handleContent}>Add</Button.Root>
                </div>
            }
        </div>
    )
}

export default AddPage