import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { CgProfile } from "react-icons/cg";

function App() {

  return (
    <div className='bg-[url("src/components/images/bg.jpeg")] h-screen w-screen bg-cover bg-no-repeat'>
      <div className="bg-[#000000] bg-opacity-25 h-26 mt-0 pt-0 ">
        <div className="flex justify-between ml-8 mr-8   text-white font-bold   ">
          <div className="ml-12">
            <img
              src="src/components/images/logo.png"
              alt=""
              className="h-28 w-30"
            />
          </div>
          <div className="flex justify-evenly gap-20 mt-8 text-2xl  yeseva-one-regular">
            <h2 className="cursor-pointer hover:opacity-80 transition-opacity duration-200  ">
              <Link to="/explore">Explore</Link>
            </h2>
            <h2 className="cursor-pointer hover:opacity-80 transition-opacity duration-200 ">
              <Link to="/popular">Popular</Link>
            </h2>
            <h2 className="cursor-pointer hover:opacity-80 transition-opacity duration-200 ">
              <Link to="/about">About us</Link>
            </h2>
            <div className="group w-12 h-10">
              <CgProfile className=" w-12 h-10 cursor-pointer text-[#e0d6d6] hover:text-blue-500 transition-colors duration-300 ease-in-out "></CgProfile>
              <div className="relative bg-gray-500 text-sm rounded-lg w-16 h-5 text-center font-normal mr-5 mt-1 group-hover:scale-100 scale-0 transition-transform duration-300 ease-linear">
                Sign in
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" ml-24 p-0 gap-0 btns">
        <Link to="/explore">
          <button
            className="text-black bg-white w-36 h-12 mr-0 text-xl font-semibold border-none hover:bg-[#0c0c0c] hover:text-white transition-color duration-300"
            style={{
              borderTopLeftRadius: "14px",
              borderBottomLeftRadius: "14px",
            }}
          >
            Get Started
          </button>
        </Link>
        <Link to="/about">
          <button
            className="bg-[#ede3e327] text-white w-36 h-12 ml-0 text-xl font-semibold border-none hover:underline delay-1000"
            style={{
              borderTopRightRadius: "14px",
              borderBottomRightRadius: "14px",
            }}
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );

}

export default App
