
import React from 'react'
import Destination from './Destination'
import home from "../assets/images/home.png"
import popular from "../assets/images/popular.png"
import profilenav from "../assets/images/profilenav.png"
import favourites from "../assets/images/favourites.png"
import create from "../assets/images/create.png"
import MainComponent from './MainComponent'
import SideBar from './MySideBar'


function Hero() {
  return (
    <>
    <div 
    className=' w-full flex'>
      <div  className="sidebar w-1/6 h-screen bg-[#D9D9D9] bg-opacity-20  ">
        <SideBar name="Home" icon={home} />
        <SideBar name="Popular" icon={popular} />
        <SideBar name="Profile" icon={profilenav} />
        <SideBar name="Favorite" icon={favourites} />
        <SideBar name="Create" icon={create} />
      </div>
      {/* <div className="content  w-3/4">
        <Destination/>
      </div>
      <div className="rightsidebar bg-stone-100 w-1/6">c</div> */}
      <div className='content bg-pink-50 w-screen '>
        <MainComponent/>
        <MainComponent/>
        <MainComponent/>
        <MainComponent/>
        <MainComponent/>
      </div>
    </div>
    </>
  )
}

export default Hero