import axios from 'axios'
import React, {useState, useEffect} from 'react'
import MainComponent from '../components/MainComponent'


function Explore() {
  const [categories, setCategories] = useState(null)

  useEffect(()=>{
    axios.get('/api/v1/category/get-all-categories')
    .then(res=>{
      setCategories(res?.data?.data)
    })
    .catch(error=>{
      console.log(error?.response?.data?.message || error.message)
      console.log(error)
    })
  }, [])

  return (

        <div className="content bg-pink-50 w-screen">
          {categories &&
            categories?.map((category) => (
            <MainComponent {...category} key={category?._id} />
            ))}
        </div>
    
  
  )
}

export default Explore