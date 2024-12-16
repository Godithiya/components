import React from 'react';
import contentMedia from '../assets/ContentMedia.svg';
import onlineTest from '../assets/OnlineTest.svg';
import postIt from '../assets/PostIt.svg';
import thankYou from '../assets/ThankYou.svg';
import slacking from '../assets/Slacking.svg';
import programmer from '../assets/ProgrammerCoding.svg';
import emptyState from '../assets/EmptyState.svg';



const Home = () => {
  return (
    <main className='w-full h-full bg-white flex flex-col items-start justify-start overflow-x-hidden'>
      <h1 className='text-5xl font-semibold mb-3'>Introduction</h1>
      <div className="w-full h-52 mb-3 bg-transparent flex justify-between border-black border-2 p-2 rounded-lg">
        <img src={contentMedia} alt="pict one" className='w-44 ' />
        <img src={slacking} alt="pict one" className='w-44 ' />
        <img src={onlineTest} alt="pict one" className='w-44 ' />
        <img src={programmer} alt="pict one" className='w-44 ' />
        <img src={postIt} alt="pict one" className='w-44 ' />
        <img src={emptyState} alt="pict one" className='w-44 ' />
        <img src={thankYou} alt="pict one" className='w-44' />
      </div>
      <p className='first-line:uppercase first-line:tracking-widest first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left'>Welcome to my dashboard website. <br />My goal in creating this dashboard is to <span className='italic'>practice my frontend skills</span> by building components that will be useful and can be used for upcoming projects. <br /> I created these components without using any frameworks that are typically used for component creation. I only utilized <span className='font-bold'>React JS</span> and <span className='font-bold'>Tailwind CSS</span> for styling. </p>
    </main>
  )
}

export default Home