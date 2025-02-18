"use client"
import { editContent, editContentText, editMenu, editPage } from '@/lib/edit';

import { getContents, getContentsWithMenu, getMenus, getPagesWithMenu } from '@/lib/get';
import React, { useEffect, useState } from 'react'

import * as Select from '@/components/ui/select';
import * as Button from '@/components/ui/button';
import { Input } from "antd"


const EditPage = () => {
    const [selectedMenu, setSelectedMenu] = useState("");
    const [selectedPage, setSelectedPage] = useState("");
    const [selectedContent, setSelectedContent] = useState("");
    const [editedMenu, setEditedMenu] = useState(selectedMenu);
    const [editedPage, setEditedPage] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const [editedContentText, setEditedContentText] = useState("");
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
    useEffect(() => {
        setEditedMenu(selectedMenu)
        setEditedPage(selectedPage)
        setEditedContent(selectedContent)
        setEditedContentText("loading content...")
        getContents(selectedMenu, selectedPage, selectedContent)
            .then(content => setEditedContentText(content?.content ?? ''))

    }, [selectedMenu, selectedContent, selectedPage])

    return (
        <div>
            <h2 className='text-[32px]'>Edit Page</h2>
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
            <div className='flex gap-5 mt-5'>
                {selectedMenu && <div className='flex flex-col gap-5 w-52'>
                    <Input placeholder='Enter Menu Name' className='p-2 rounded-lg border-2 w-52' value={editedMenu} onChange={e => setEditedMenu(e.target.value)}
                    />
                    <Button.Root onClick={() => editMenu(selectedMenu, editedMenu || "").then(c => c == true && alert("ok refresh page"))}>
                        Save Menu
                    </Button.Root>
                </div>
                }
                {selectedPage && <div className='flex flex-col gap-5 w-52'>
                    <Input placeholder='Enter Page Name' className='p-2 rounded-lg border-2 w-52' value={editedPage} onChange={e => setEditedPage(e.target.value)}
                    />
                    <Button.Root onClick={() => editPage(selectedMenu, selectedPage, editedPage || "").then(c => c == true && alert("ok refresh page"))}>
                        Save Page
                    </Button.Root>
                </div>
                }
                {selectedContent && <div className='flex flex-col gap-5 w-52'>
                    <Input placeholder='Enter Content Name'  className='p-2 rounded-lg border-2 w-52'value={editedContent} onChange={e => setEditedContent(e.target.value)}
                    />
                    <Button.Root onClick={() => editContent(selectedMenu, selectedPage, selectedPage, editedContent || "").then(c => c == true && alert("ok refresh page"))}>
                        Save Content
                    </Button.Root>
                </div>
                }
                {selectedContent && <div className='flex flex-col gap-5 w-52'>
                    <Input placeholder='Enter Content Text' className='p-2 rounded-lg border-2 w-52' value={editedContentText} onChange={e => setEditedContentText(e.target.value)}
                    />
                    <Button.Root onClick={() => editContentText(selectedMenu, selectedPage, selectedContent, editedContentText || "").then(c => c == true && alert("ok refresh page"))}>
                        Save Content Text
                    </Button.Root>
                </div>
                }
            </div>
        </div>
    )
}
export default EditPage