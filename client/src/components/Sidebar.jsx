import React from 'react'
import Hero from './Hero'

function SideBar({name,icon}) {
  return (
    <>
    <div className=' box-border  w-p rounded-md hover:bg-transparent p-3 flex hover:border border-black flex-nowrap cursor-pointer'>
        <img className='h-6 pr-2' src={icon} alt="" />
        <h1 className='text-nowrap font-semibold'>{name}</h1>
    </div>
    </>
  )
}

export default SideBar