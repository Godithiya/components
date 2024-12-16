import React from 'react'
import { Outlet } from 'react-router-dom'

const IndexTable = () => {
  return (
    <div>
      <h1>Table page main content</h1>
      <Outlet/>
    </div>
  )
}

export default IndexTable
