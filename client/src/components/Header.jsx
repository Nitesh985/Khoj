import React from 'react'
import UserProfile from './UserProfile'

import { CiSearch } from "react-icons/ci";
import Hero from './Hero';

function Header() {
  return (
    <>
      <div 
       className="bg-[#d9d9d977] flex justify-between h-30% w-full">
        <img src="src/components/images/logoblack.png" className='h-20 ml-6' alt="" />
        <div className="flex justify-center items-center gap-3">
          <input type="search" placeholder="Search here..." className="w-80 h-12 indent-5 rounded-xl" />
          <div className="bg-white h-12 w-14 flex justify-center items-center rounded-xl cursor-pointer">
            <CiSearch className="h-8 w-10 " />
          </div>
        </div>
        <div className="flex justify-center items-center mr-7">
          <UserProfile />
        </div>
      </div>

      <div>
        <Hero />
      </div>
    </>
  )
}

export default Header
