import { Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CgProfile } from "react-icons/cg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[url("src/assets/images/bg.jpeg")] h-screen w-screen bg-cover'>
      <div className=" pb-4 bg-[#0000003a] h-28 mt-0 pt-0 ">
        <div className="flex justify-around pt-4  text-white font-bold   ">
          <div>
            <h1 className="text-6xl ml-7">
              <Link to="/" >Khoj</Link>
            </h1>
          </div>
          <div className="flex justify-evenly gap-20 mt-5 text-2xl">
            <h2 className="cursor-pointer hover:underline ease-out delay-1000 ">
              <Link to="/explore" >Explore</Link>
            </h2>
            <h2 className="cursor-pointer hover:underline ease-out delay-1000">
              <Link to="/popular" >Popular</Link>
            </h2>
            <h2 className="cursor-pointer hover:underline ease-out delay-1000">
              <Link to="/about" >About us</Link>
            </h2>
            <CgProfile className=" w-12 h-10 cursor-pointer text-[#e0d6d6] hover:text-blue" />
          </div>
        </div>
      </div>

      <div className="mt-96 ml-40 p-0 gap-0">
        <button
          className="text-black bg-white w-36 h-12 mr-0 text-xl font-semibold border-none hover:bg-[#0c0c0c] hover:text-white"
          style={{
            borderTopLeftRadius: "14px",
            borderBottomLeftRadius: "14px",
          }}
        >
          <Link to="/explore"> Get Started </Link>
        </button>
        <button
          className="bg-[#ede3e327] text-white w-36 h-12 ml-0 text-xl font-semibold border-none hover:underline ease-out delay-1000"
          style={{
            borderTopRightRadius: "14px",
            borderBottomRightRadius: "14px",
          }}
        >
          <a href="#"> Learn More </a>
        </button>
      </div>
    </div>
  );
}

export default App