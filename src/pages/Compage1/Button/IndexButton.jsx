import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexButton = () => {
  return (
    <div>
      <h1>Buttons page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexButton
