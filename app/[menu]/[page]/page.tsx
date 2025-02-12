"use client"
import MainArea from '@/components/home/MainArea';
import Menu from '@/components/home/Menu';
import React from 'react';
import { useParams } from "next/navigation";

import { useState } from 'react';
export default function Home() {
    const params = useParams();
    const { page }  = params;
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className={` mx-auto w-full max-w-[1488px] flex-1 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14`}>
            <Menu currentPage={page?.toString() ?? ''} active={menuActive} setMenuActive={setMenuActive} />
            <div className={`${menuActive ? "overflow-hidden max-h-screen" : ""} `}>
                <MainArea slug={page?.toString() ?? ''} setMenuActive={setMenuActive} />
            </div>
        </div>
    );
}