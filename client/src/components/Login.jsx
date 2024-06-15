import React from 'react'
import Index from './Index'
import InputBox from './InputBox'


function Login() {
  return (
    <>
    <form>
        <div className='flex justify-center flex-col items-center select-none '>
           <div className='font-semibold text-3xl text-nowrap '>Welcome back!</div>
           <div className='font-normal text-sm text-nowrap '>Are you ready to explore? </div>
        </div>
        <br/>
            <div>
                <Index data={{index_id: "username" , index:"Email or Username", required: "*"}} />
                <br />
                <input className='border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1  placeholder:text-gray-400' type="text" name="email" id="username" placeholder='abc@gmail.com' />
            </div>
            <br />
            <div>
            <Index data={{index_id: "password" , index:"Password", required: "*"}} />
                <br />
                <input className='border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1 ' type="password" name="email" id="password"  />
                <br />
                <a className='text-xs text-blue-500  hover:underline-offset-8 ' href="">Forgot your password ?</a>
                </div>
            <div className='mt-3'>
                <button className=' bg-blue-500 border border-black rounded-lg pl-3  py-1.5 size-3/4 mt-1 '>Sign In</button>
                <br />
                <p className='mt-2'>Need a account? <a className='text-xs text-blue-500  hover:underline-offset-8 ' href="#">Register</a></p>
            </div>
    </form>
           
    </>
  )
}

export default Login