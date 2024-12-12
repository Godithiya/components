// import React, { useState } from 'react';
// import { LuAlignJustify } from "react-icons/lu";
// import { GiAstronautHelmet } from "react-icons/gi";
// import { HiOutlineHome } from "react-icons/hi2";
// import { RxComponent1 } from "react-icons/rx";
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const [open, setOpen] = useState(true);

//   const menus = [
//     {
//       title: 'home', path: 'home', icon: <HiOutlineHome />
//     },
//     {
//       title: 'components 1', path: 'compage1', icon: <RxComponent1 />
//     },
//     {
//       title: 'components 2', path: 'compage2', icon: <RxComponent1 />
//     },
//     {
//       title: 'components 3', path: 'compage3', icon: <RxComponent1 />
//     }
//   ]

//   return (
//     <div className={`${open ? 'w-64' : 'w-16'} bg-transparent border-r-2 p-3 border-black shadow-lg min-h-screen overflow-y-auto overflow-x-hidden ${open ? 'relative' : null} duration-150 transition-all ease-in-out`}>
//       {/* Sidebar Toggle Button */}
//       <div
//         className={`fixed z-10  flex justify-center items-center cursor-pointer -top-1 w-9 h-9 py-2 px-1 border-2 drop-shadow-md rounded-full rounded-t-none duration-150 ${open ? 'bg-white left-[236px]' : 'bg-black left-11'} border-black`}
//         onClick={() => setOpen(!open)}
//       >
//         <LuAlignJustify 
//           className={`w-full h-full duration-300 transition-all ease-in-out ${open ? 'rotate-0 text-black' : 'rotate-90 text-white'}`}
//         />
//       </div>

//       {/* Sidebar Header */}
//       <div className={`w-full h-24 flex justify-center duration-300 transition-all ease-in-out items-center gap-2 mb-4 border-b-2 border-black sticky top-0 bg-white z-[5] select-none`}>
//         <GiAstronautHelmet className={`${open ? 'w-10 h-10' : 'w-8 h-8'} hover:animate-pulse`} />
//         {open && (
//           <div className={`flex flex-col duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
//             <h1 className="font-bold text-lg">Godithiya's</h1>
//             <p className="text-sm text-gray-500 animate-pulse">FullStack Developer</p>
//           </div>
//         )}
//       </div>

//       {/* Sidebar Menu Items */}
//       <ul className="w-full h-auto flex flex-col justify-center items-center gap-2 ">
//         {menus.map((menu, index) => (
//           <NavLink to={menu.path} 
//             className={({isActive}) => `w-full h-12 py-2 flex items-center ${open ? 'justify-start pl-9' : 'justify-center'} hover:bg-gray-200 duration-300 transition-all ease-in-out rounded-lg cursor-pointer capitalize gap-2 border-b-2 border-black ${isActive ? 'bg-black text-white hover:bg-black border-b-[3px] border-gray-400' : ''}`}
//           >
//             <li 
//               key={index}
//               className='flex gap-2'
//             >
//                 <span className={`${open? 'text-2xl' : 'pl-2 text-2xl'}`}>
//                   {menu.icon}
//                 </span>
//                 <h1 className='text-base'>
//                   {open ? menu.title : null}
//                 </h1>
//             </li>
//           </NavLink>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Sidebar


import React, { useState } from 'react';
import { LuAlignJustify } from "react-icons/lu";
import { GiAstronautHelmet } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi2";
import { RxComponent1 } from "react-icons/rx";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null); // State untuk menu yang dipilih

  const menus = [
    { title: 'home', path: 'home', icon: <HiOutlineHome /> },
    { title: 'components 1', value: 'compage1', icon: <RxComponent1 /> },
    { title: 'components 2', value: 'compage2', icon: <RxComponent1 /> },
    { title: 'components 3', value: 'compage3', icon: <RxComponent1 /> },
  ];

  // Data opsional untuk menu components
  const options = {
    compage1: ['Option 1A', 'Option 1B', 'Option 1C'],
    compage2: ['Option 2A', 'Option 2B', 'Option 2C'],
    compage3: ['Option 3A', 'Option 3B', 'Option 3C'],
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  return (
    <div className={`${open ? 'w-64' : 'w-16'} bg-transparent border-r-2 p-3 border-black shadow-lg min-h-screen overflow-y-auto overflow-x-hidden duration-150 transition-all ease-in-out`}>
      {/* Sidebar Toggle Button */}
      <div
        className={`fixed z-10 flex justify-center items-center cursor-pointer -top-1 w-9 h-9 py-2 px-1 border-2 drop-shadow-md rounded-full rounded-t-none duration-150 ${open ? 'bg-white left-[236px]' : 'bg-black left-11'} border-black`}
        onClick={() => setOpen(!open)}
      >
        <LuAlignJustify
          className={`w-full h-full duration-300 transition-all ease-in-out ${open ? 'rotate-0 text-black' : 'rotate-90 text-white'}`}
        />
      </div>

      {/* Sidebar Header */}
      <div className={`w-full h-24 flex justify-center duration-300 transition-all ease-in-out items-center gap-2 mb-4 border-b-2 border-black sticky top-0 bg-white z-[5] select-none`}>
        <GiAstronautHelmet className={`${open ? 'w-10 h-10' : 'w-8 h-8'} hover:animate-pulse`} />
        {open && (
          <div className="flex flex-col duration-300">
            <h1 className="font-bold text-lg">Godithiya's</h1>
            <p className="text-sm text-gray-500 animate-pulse">Fullstack Developer</p>
          </div>
        )}
      </div>

      {/* Sidebar Menu Items */}
      <ul className="w-full flex flex-col gap-2 select-none">
        {menus.map((menu, index) => (
          <div key={index}>
            <div
              onClick={() => handleMenuClick(menu.value)}
              className={`w-full h-12 py-2 flex items-center ${open ? 'justify-start pl-9' : 'justify-center'} duration-300 transition-all ease-in-out rounded-lg cursor-pointer capitalize gap-2 border-b-2 border-black ${
                selectedMenu === menu.value ? 'bg-black text-white border-b-[3px] border-gray-400 hover:bg-black' : 'hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl">{menu.icon}</span>
              {open && <h1 className="text-base">{menu.title}</h1>}
            </div>

            {/* Display Options */}
            {selectedMenu === menu.value && options[menu.value] && (
              <ul className="pl-[75px] mt-2 duration-300 transition-all ease-in-out">
                {options[menu.value].map((option, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer tet-black hover:text-gray-600 "
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
