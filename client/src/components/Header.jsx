import React from 'react'
import UserProfile from './UserProfile'

function Header() {
  return (
   <>
    <div className='h-24 flex justify-between px-8 py-4'>
        <div className='text-black font-bold text-5xl font-serif select-none cursor-pointer '>Khoj</div>
        <UserProfile />
    </div>
   </>
  )
}

export default Header
