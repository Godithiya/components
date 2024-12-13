import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexModals = () => {
  return (
    <div>
      <h1>Modal page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexModals
