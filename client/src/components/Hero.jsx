
import React from 'react'
import SideBar from './SideBar'
import Destination from './Destination'
import home from "./images/home.png"
import popular from "./images/popular.png"
import profilenav from "./images/profilenav.png"
import favourites from "./images/favourites.png"
import create from "./images/create.png"

function Hero() {
  return (
    <>
    <div style={
      {
        height:"70vh"
      }
    }
    className=' w-full flex mt-2 '>
      <div className="sidebar w-1/6">
      <SideBar name="Home" icon= {home}/>
    
      <SideBar name="Popular" icon= {popular}/>
      <SideBar name="Profile" icon= {profilenav}/>
      <SideBar name="Favourites" icon={favourites} />
      <SideBar name="Create" icon= {create}/>
      </div>
      <div className="content  w-3/4">
        <Destination/>
      </div>
      <div className="rightsidebar bg-stone-100 w-1/6">c</div>
    </div>
    </>
  )
}

export default Hero