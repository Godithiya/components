import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexCards = () => {
  return (
    <div>
      <h1>Cards page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexCards
