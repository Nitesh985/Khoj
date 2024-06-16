
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { CgProfile } from "react-icons/cg";
import Header from './components/Header';
import Modal from './components/Modal';
import Login from './components/Login';
import FirstLogin from './components/FirstLogin'
import ModelFront from './components/ModelFront'
import InputBox from './components/InputBox'
import Register from './components/Register'

function App() {

  const [open , setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
   
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
            <
            <h2 className="cursor-pointer hover:opacity-80 transition-opacity duration-200 ">
              <Link to="/popular">Popular</Link>
            </h2>
            <h2 className="cursor-pointer hover:opacity-80 transition-opacity duration-200 ">
              <Link to="/about">About us</Link>
            </h2>

            <CgProfile className=" w-12 h-10 cursor-pointer text-[#e0d6d6] hover:text-blue" onClick={handleOpen}/>
            <ModelFront isOpen={open} onClose={handleClose} boxHeight="70vh" boxWidth="35vw" >
                    <>
                       <Login/>
                    </>
                </ModelFront>
            </div>

          </div>

        </div>

      </div>



      <div className="btns ml-40 p-0 gap-0">
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
  );

}

export default App
