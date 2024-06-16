import React, { useState } from 'react'
import profile from "./images/luca.jpg"
function Test() {
    return (

        <>
            <div >
                <div className=' '>
                    {/* <div><Swipe icon="https://img.icons8.com/?size=100&id=60636&format=png&color=000000" /></div> */}
                    <div className='picture hover:shadow-2xl shadow-zinc-500 cursor-pointer p-3 flex gap-6 w-100% overflow-x-scroll whitespace-nowrap h-2/6 '>
                
                        <div className='inline-flex gap-5'>
                           
                            <img className="object-cover w-40 h-30 rounded-lg" src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30" src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                            <img className="object-cover w-40 h-30 " src={profile} alt="" />
                        </div>

                    </div>
                    {/* <div><Swipe icon={"https://img.icons8.com/?size=100&id=60671&format=png&color=000000"} /></div> */}

                </div>
                {/* <div className='flex gap-8 ml-72 ' > */}
                {/* <div className='hover:cursor-pointer '> 
                    <img onClick={()=>
                      next(!current)
                    } 
                    className='h-8 ' src={current == false ? "https://img.icons8.com/?size=100&id=581&format=png&color=000000" : "https://img.icons8.com/?size=100&id=36026&format=png&color=000000"} alt=""/>
                  </div>  */}
                {/* <div className='flex gap-2'> 
                  <input className='border border-black rounded-lg pl-3  py-1.5 size-5/6   placeholder:text-gray-400 hover:border-spacing-4' type="text" name="" id="comment" placeholder='Say Something' />
                  <button className='bg-white px-2 rounded-lg border border-black hover:bg-cyan-400'>Submit</button>
                  </div> */}
                {/* </div> */}
            </div>
        </>

    )
}

export default Test