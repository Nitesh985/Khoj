import React from 'react'

function InputBox({...data}) {
  return (
    <>
    <input className='border border-black rounded-lg pl-4  py-1.5 size-3/4 mt-1 ' type={data.datatype} name={data.boxname} id={data.boxid}  />
    </>
  )
}

export default InputBox