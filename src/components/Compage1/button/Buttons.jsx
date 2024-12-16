import React, { useState } from 'react'
import { FaArrowRight, FaRegTrashAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Buttons = () => {
  const [hover, setHover] = useState(true)

  return (
    <div className={`bg-white w-full h-full grid grid-cols-4 gap-12`}>
      {/* button 1 */}
      <div className="w-72 h-36 bg-slate-100 rounded-md border-2 border-black p-2 flex flex-col items-center justify-evenly shadow-md gap-2">
        <h1 className='font-medium capitalize text-center'>BnW explore button</h1>
        <div className="flex gap-2">
          <NavLink
            to={''}
          >
            <button className='w-28 h-12 bg-black text-white flex justify-center items-center gap-1 rounded-md shadow-m px-2 py-1'>
              Explore
              <FaArrowRight className='text-white'/>
            </button>
          </NavLink>
          <NavLink
            to={''}
          >
            <button className='w-28 h-12 bg-white text-black flex justify-center items-center gap-1 rounded-md shadow-md px-2 py-1'>
              Explore
              <FaArrowRight className='text-black'/>
            </button>
          </NavLink>
        </div>
      </div>

      {/* button 2 */}
      <div className="w-72 h-36 bg-slate-100 rounded-md border-2 border-black p-2 flex flex-col items-center justify-evenly shadow-md gap-2">
        <h1 className='font-medium capitalize text-center'>BnW explore button with animation</h1>
        <div className="flex gap-2">
          <NavLink
            to={''}
            className={`relative`}
          >
            <button className='relative w-32 h-12 bg-black text-white flex justify-center items-center gap-1 rounded-full shadow-md px-4 py-2 border-2 border-[#FF6F00] group transition-all duration-200 ease-out hover:rounded-2xl hover:border-[#FF6F00] active:scale-95 hover:bg-[#FF6F00] '>
              {/* left arrow */}
              <FaArrowRight className='text-transparent absolute z-10 -left-5 transition-all duration-500 ease-in-out opacity-0 group-hover:left-5 group-hover:opacity-100 group-hover:text-white'/>
              <span className="absolute z-10 left-5 transition-all duration-500 ease-in-out group-hover:left-12">Explore</span>
              {/* circle shockwave */}
              <span
              className="absolute inset-0 bg-[#FF6F00] rounded-full scale-0 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:opacity-0 group-hover:rounded-xl"
              aria-hidden="true"
              ></span>
              {/* right arrow */}
              <FaArrowRight className='text-white absolute z-10 right-5 transition-all duration-500 ease-in-out opacity-100 group-hover:-right-6 group-hover:opacity-0 group-hover:text-transparent'/>
            </button>
          </NavLink>

          <NavLink
            to={''}
            className={`relative`}
          >
            <button className='relative w-32 h-12 bg-white text-black flex justify-center items-center gap-1 rounded-full shadow-md px-4 py-2 border-2 border-[#5D3FD3] group transition-all duration-200 ease-out hover:rounded-2xl hover:border-[#5D3FD3] active:scale-95 hover:bg-[#5D3FD3]'>
              {/* left arrow */}
              <FaArrowRight className='text-transparent absolute z-10 -left-5 transition-all duration-500 ease-in-out opacity-0 group-hover:left-5 group-hover:opacity-100 group-hover:text-white'/>
              <span className="absolute z-10 left-5 transition-all duration-500 ease-in-out group-hover:left-12 group-hover:text-white">Explore</span>
              {/* circle shockwave */}
              <span
              className="absolute inset-0 bg-[#5D3FD3] rounded-full scale-0 opacity-100 transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:opacity-0 group-hover:rounded-xl"
              aria-hidden="true"
              ></span>
              {/* right arrow */}
              <FaArrowRight className='text-black absolute z-10 right-5 transition-all duration-500 ease-in-out opacity-100 group-hover:-right-6 group-hover:opacity-0 group-hover:text-transparent'/>
            </button>
          </NavLink>
        </div>
      </div>

      {/* button 3 */}
      <div className="w-72 h-36 bg-slate-100 rounded-md border-2 border-black p-2 flex flex-col items-center justify-evenly shadow-md gap-2">
        <h1 className='font-medium capitalize text-center'>delete button with animation</h1>
        <div className="flex items-center gap-2">
            <button className="relative w-32 h-12 bg-white text-red-500 rounded-lg shadow-lg border-2 border-red-500 overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-red-500 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span className="transition-colors duration-300 group-hover:text-white">Delete</span>
                <FaRegTrashAlt className="transition-colors duration-300 group-hover:text-white" />
              </div>
            </button>

            <button 
              className={`${hover ? 'relative w-32 h-12 bg-white text-red-500 rounded-full shadow-lg border-2 border-red-500 overflow-hidden group transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95' : 'relative w-8 h-8 bg-white text-red-500 rounded-full shadow-lg border-2 border-red-500 overflow-hidden group transition-all duration-100 ease-in-out transform hover:scale-105 active:scale-95'} `}
              onMouseEnter={() => setHover(!hover)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="absolute inset-0 bg-red-500 border-2 border-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
              <div className="relative z-10 flex items-center justify-center gap-2">
                {hover? (<span className="transition-colors duration-500 group-hover:text-white">Delete</span>) : null}
                <FaRegTrashAlt className="transition-colors duration-300 group-hover:text-white" />
              </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Buttons
