import React from 'react'
import { Outlet } from 'react-router-dom'

const MainContent1 = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <Outlet/>
    </div>
  )
}

export default MainContent1
