import React, { useState } from 'react'
import profile from "../assets/images/luca.jpg"
import Swipe from './Swipe';

function Destination() {



  return (
    <>
      <div>
        <div className="  ">
          <div>
            <Swipe icon="https://img.icons8.com/?size=100&id=60636&format=png&color=000000" />
          </div>
          <div className="picture hover:shadow-2xl shadow-zinc-500 cursor-pointer p-3 ">
            <img className="object-cover w-48 h-36 " src={profile} alt="" />
          </div>
          <div>
            <Swipe
              icon={
                "https://img.icons8.com/?size=100&id=60671&format=png&color=000000"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination