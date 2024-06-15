import React from 'react'
import Login from './Login'

function Index({data}) {
  return (
    <>
    <label className='text-black text-sm ' htmlFor={data.index_id}>{data.index}<span className='text-red-500'>*</span></label>
      
    </>
  )
}

export default Index
