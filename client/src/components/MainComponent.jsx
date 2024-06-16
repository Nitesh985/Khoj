import MyDestination from "./MyDestination.jsx"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



function MainComponent({name}) {
    const [destinations, setDestinations] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        setLoading(true)
        axios.get(`/api/v1/destination/get-destination/${name}`)
        .then(res=>{
            setDestinations(res?.data?.data)
        })
        .catch(error=>{
            console.log(error?.response?.data?.message || error.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [name])

    console.log(destinations)



    return (
      <div>
        <div className="m-8 font-semibold text-2xl text-orange-500">{name}</div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex overflow-x-scroll gap-3 space-x-4 p-4">
            {destinations &&
              destinations?.map((destination) => (
                <Link to={`/explore/d/${destination?._id}`}>
                    <MyDestination key={destination._id} {...destination} />
                </Link>
              ))}
          </div>
        )}
      </div>
    );
}

export default MainComponent