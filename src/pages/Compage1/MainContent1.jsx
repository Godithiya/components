import React from 'react'
import { Outlet } from 'react-router-dom'

const MainContent1 = () => {
  return (
    <div className='w-screen min-h-screen overflow-x-hidden'>
      <h1 className='text-xl font-semibold'>Components 1</h1>
      <Outlet/>
    </div>
  )
}

export default MainContent1
