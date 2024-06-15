import React from 'react'
import Modal from './Modal'
import Index from './Index'
import MiniInputBox from './MiniInputBox'

function Register() {
  return (
    <>
        <div className='flex justify-center flex-col items-center select-none '>
           <div className='font-semibold text-3xl text-nowrap '>Welcome to Khoj</div>
           <div className='font-normal text-sm text-nowrap '>Get Ready To Explore </div>
        </div>
        <br/>
        <div className='flex justify-between'>
            <div className=''>
               <div>First Name</div>
               <div><MiniInputBox /></div>
            </div>
            <div>
                <div>Last Name</div>
                <div><MiniInputBox/></div>
            </div>
        </div>
        <br />
        <div>
        <Index data={{index_id: "username" , index:"Email or Username", required: "*"}} />
                <br />
                <input className='border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1  placeholder:text-gray-400' type="text" name="email" id="username" placeholder='abc@gmail.com' />
            <br />
            <Index data={{index_id: "password" , index:"Password", required: "*"}} />
                <br />
                <input className='border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1 ' type="password" name="email" id="password"  />
                <br />
                <Index data={{index_id: "password" , index:"Confirm Password", required: "*"}} />
                <br />
                <input className='border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1 ' type="password" name="email" id="password"  />
                <br />
                <div className='mt-3'>
                <button className=' bg-blue-500 border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1 '>Sign In</button>
                <br />
            </div>
        </div>
    </>
  )
}

export default Register