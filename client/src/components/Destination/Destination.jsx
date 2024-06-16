import React, { useEffect, useState } from 'react'
import axios from 'axios'


function GetDestinationByCategory({category}) {
    const [destination, setDestination] = useState(null)

    useEffect(()=>{
        axios.get(`/api/v1/`)
    }, [])

    return (
    <div>Destination</div>
  )
}

export default Destination