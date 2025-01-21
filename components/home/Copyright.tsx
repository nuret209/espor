import React from 'react'
import { Geist_Mono } from 'next/font/google'
const geist = Geist_Mono({ weight: ["400", "500"], subsets: ["latin", "latin-ext"] })
const Copyright = () => {
  return (
    <div className={`${geist.className} md mb:pb-10 mt-auto pb-4 pt-10 text-paragraph-xs font-medium text-gray-500 md:text-paragraph-sm`}>© 2025 Wagmigg. All rights reserved.</div>
  )
}

export default Copyright