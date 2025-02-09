"use client"
import AddPage from '@/components/admin/AddPage';
import EditPage from '@/components/admin/EditPage';
import { handleSubmit } from '@/lib/login';
import React, { FormEvent, useState } from 'react'
const Page = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLogginIn] = useState(false);
    const [mode, setMode] = useState(0);
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
        <div className=''>
            <div className='mb-5'>
                <h1 className='text-[24px]'>Hoşgeldiniz!</h1>
                <button onClick={() => setLogginIn(false)}>Çıkış Yap</button>
            </div>

            <div className='text-blue-500 flex gap-5'>
                <a href="#editpage" className={`${mode == 0 && "text-blue-800"}`} onClick={() => setMode(0)}>Edit Page</a>
                <a href="#addpage" className={`${mode == 1 && "text-blue-800"}`} onClick={() => setMode(1)}>Add Href</a>
            </div>
            {mode == 0 &&
                <EditPage />
            }
            {mode == 1 &&
                <AddPage />
            }
        </div>
    )

}

export default Page