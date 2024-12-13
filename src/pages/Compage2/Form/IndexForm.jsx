import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexForm = () => {
  return (
    <div>
      <h1>Form page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexForm
