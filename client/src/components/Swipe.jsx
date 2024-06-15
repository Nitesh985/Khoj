import React from 'react'

function Swipe({icon}) {
  return (
    <>
    <div className=' box-border   rounded-md hover:bg-transparent  flex hover:border border-black flex-nowrap'>
        <img className='h-8 pr-2' src={icon} alt="" />
    </div>
    </>
  )
}

export default Swipe