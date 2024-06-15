import React from 'react'

function Index({data}) {
  return (
    <>
    <label className='font-semibold text-sm ' htmlFor={data.index_id}>{data.index}<span className='text-red-500'>*</span></label>
      
    </>
  )
}

export default Index
