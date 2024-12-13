import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-2 justify-center items-center h-screen w-screen'>
        <h1 className='text-3xl font-bold text-red-500'>404 Pages Not Found</h1>
        <p>Please go <span className='text-blue-500 cursor-pointer' onClick={() => navigate(-1)}>Back</span></p>
    </div>
  )
}

export default NotFound