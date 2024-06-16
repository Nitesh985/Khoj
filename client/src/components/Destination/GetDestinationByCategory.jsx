import React, { useEffect, useState } from 'react'
import axios from 'axios'


function GetDestinationByCategory({category}) {
    const [destination, setDestination] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        axios.get(`/api/v1/destination/get-destination/${category}`)
        .then(res=>{
            setDestination(res?.data?.data)
        })
        .catch(error=>{
            alert(error?.response?.data?.message || error.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [category])

    return {destination, loading}
}

export default GetDestinationByCategory