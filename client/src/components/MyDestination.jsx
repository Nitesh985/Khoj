import React, { useState } from 'react'
import profile from "../assets/images/luca.jpg"
function MyDestination({name, images, description}) {
    return (
      <div className='flex flex-col flex-shrink-0' >
          <img
            className="object-cover w-[290px] h-40 rounded-lg "
            src={images ? images[0] : null}
            alt={name}
          />
          <div className='text-xl font-medium ml-2 text-zinc-800'>{name}</div>
          
      </div>
    );
}

export default MyDestination