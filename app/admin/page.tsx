"use client"
import AdminPage from '@/components/admin/AdminPage';
import { handleSubmit } from '@/lib/login';
import React, { FormEvent, useState } from 'react'

import { Input } from "antd"
import * as Button from '@/components/ui/button';
import { Label } from '@/components/ui/dropdown';


const Page = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLogginIn] = useState(false);
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!userName || !password) {
            alert('Kullanıcı adı ve şifre boş bırakılamaz!')
            return;
        }
        handleSubmit(userName, password).then(res => setLogginIn(res))
        setUserName('');
        setPassword('');
    }

    return ((!loggedIn) ?
        <div className='justify-center h-full items-center flex'>
            <form className='border rounded-lg flex flex-col gap-4 p-4 w-72' onSubmit={handleLogin}>
                <Label className='text-center'>Admin</Label>
                <Input type="text" placeholder='Username' value={userName} onChange={e => setUserName(e.target.value)} className='p-2 border rounded' />
                <Input.Password  placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='p-2 border rounded' />
                <Button.Root type='submit'>Giriş Yap</Button.Root>
            </form>
        </div>
        :
        <AdminPage setLoggedIn={setLogginIn}/>
    )

}

export default Page