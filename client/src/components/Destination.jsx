import React, { useState } from 'react'
import profile from "./images/luca.jpg"

import Swipe from './Swipe';

function Destination() {
  const [current,next] = useState(false);
  return (
    
        <>
          <div >
            <div className=' flex justify-center items-center ml-12 mr-12 h-96'>
              <div><Swipe icon="https://img.icons8.com/?size=100&id=60636&format=png&color=000000" /></div>
              <div className='picture hover:shadow-2xl shadow-zinc-500 cursor-pointer p-3 '>
                <img  className="object-cover w-80 h-80 " src={profile} alt="" />
              </div>
              <div><Swipe icon={"https://img.icons8.com/?size=100&id=60671&format=png&color=000000"} /></div>
              
            </div>
            <div className='flex gap-8 ml-72 ' >
              <div className='hover:cursor-pointer '> 
                <img onClick={()=>
                  next(!current)
                } 
                className='h-8 ' src={current == false ? "https://img.icons8.com/?size=100&id=581&format=png&color=000000" : "https://img.icons8.com/?size=100&id=36026&format=png&color=000000"} alt=""/>
              </div>
              <div className='flex gap-2'>
              <input className='border border-black rounded-lg pl-3  py-1.5 size-5/6   placeholder:text-gray-400 hover:border-spacing-4' type="text" name="" id="comment" placeholder='Say Something' />
              <button className='bg-white px-2 rounded-lg border border-black hover:bg-cyan-400'>Submit</button>
              </div>
            </div>
          </div>
        </>
    
  )
}

export default Destination