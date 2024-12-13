import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <div className='flex w-screen min-h-screen overflow-hidden selection:bg-black selection:text-white'>
      <Sidebar/>
      <div className="w-screen min-h-screen flex-1 p-6 overflow-y-auto">
        {/* Main Content Area */}
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout