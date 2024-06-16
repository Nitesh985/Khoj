import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import lakeImage from '../assets/images/Fewa-lake.webp'


function MainPage() {
    const {destinationId} = useParams()
    console.log(destinationId)
    const [destination, setDestination] = useState(null)

    useEffect(()=>{
        axios.get(`/api/v1/destination/get-destination/d/${destinationId}`)
        .then(res=>{
            setDestination(res?.data?.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

  return (

    <div className='flex flex-col items-center w-full mt-[100px]'>
      <div className='text-2xl font-semibold text-orange-400' >{destination?.name}</div>  
      <div className='mt-1' >
        <img src={destination?.images?destination?.images[0]:null} />
      </div>
      <div className='justify-center text-center text-xl mt-6 w-[75%]'>{destination?.description}</div>
      <div>
      </div>
    </div>

  );
}

export default MainPage