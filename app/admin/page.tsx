"use client"
import AdminPage from '@/components/admin/AdminPage';
import { handleSubmit } from '@/lib/login';
import React, { FormEvent, useState } from 'react'
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
            <form className='border rounded-lg flex flex-col gap-4 p-4' onSubmit={handleLogin}>
                <label htmlFor="" className='text-center'>Admin</label>
                <input type="text" placeholder='username' value={userName} onChange={e => setUserName(e.target.value)} className='p-2 border rounded' />
                <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} className='p-2 border rounded' />
                <button type='submit' className='p-2 border bg-gray-300 rounded'>Giriş Yap</button>
            </form>
        </div>
        :
        <AdminPage setLoggedIn={setLogginIn}/>
    )

}

export default Page