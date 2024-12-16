import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexImages = () => {
  return (
    <div>
      <h1>Images page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexImages
