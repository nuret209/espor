"use client"
import MainArea from '@/components/home/MainArea';
import Menu from '@/components/home/Menu';
import { useState } from 'react';
export default function Home() {

  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className={` mx-auto w-full max-w-[1488px] flex-1 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14`}>
      <Menu currentPage='/' active={menuActive} setMenuActive={setMenuActive}/>
     <div className={`${menuActive ? "overflow-hidden max-h-screen" : ""} `}><MainArea slug='/' setMenuActive={setMenuActive}/></div> 
    </div>
  );
}