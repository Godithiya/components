import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuAlignJustify } from "react-icons/lu";
import { GiAstronautHelmet } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { CgToggleOn } from 'react-icons/cg';
import { PiCards } from 'react-icons/pi';
import { IoMdImages } from 'react-icons/io';
import { BsCardText } from 'react-icons/bs';
import { RiLoginBoxLine } from 'react-icons/ri';
import { FiTable } from 'react-icons/fi';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const menus = [
    { 
      title: 'Home', 
      path: '/', 
      icon: <HiOutlineHome />,
      subItems: []
    },
    { 
      title: 'Components 1', 
      path: 'compage1', 
      icon: <RxComponent1 />,
      subItems: [
        { 
          title: 'Buttons', 
          path: '/compage1/buttons', 
          icon: <CgToggleOn /> 
        },
        { 
          title: 'Cards', 
          path: '/compage1/cards', 
          icon: <PiCards />
        },
        { 
          title: 'Images', 
          path: '/compage1/images', 
          icon: <IoMdImages />
        }
      ]
    },
    { 
      title: 'Components 2', 
      path: 'compage2', 
      icon: <RxComponent1 />,
      subItems: [
        { 
          title: 'Modals', 
          path: '/compage2/modals', 
          icon: <BsCardText /> 
        },
        { 
          title: 'Forms', 
          path: '/compage2/forms', 
          icon: <RiLoginBoxLine /> 
        },
        { 
          title: 'Tables', 
          path: '/compage2/tables', 
          icon: <FiTable /> 
        }
      ]
    },
    { 
      title: 'Components 3', 
      path: 'compage3', 
      icon: <RxComponent1 />,
      subItems: [
        { 
          title: 'Option 1', 
          path: '/compage3/option1', 
          icon: null
        },
        { 
          title: 'Option 2', 
          path: '/compage3/option2', 
          icon: null 
        },
        { 
          title: 'Option 3', 
          path: '/compage3/option3', 
          icon: null 
        }
      ]
    }
  ];

  const handleMenuClick = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Tooltip Portal Container - Outside the sidebar */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="relative w-full h-full">
          {!open && tooltip && (
            <div 
              className="absolute bg-gray-700 text-white px-3 py-2 rounded-r-full rounded-t-full shadow-lg text-nowrap z-50"
              style={{
                left: selectedMenu && tooltip !== selectedMenu ? '70px' : '70px',
                top: `${tooltip.offsetY}px`,
                transform: 'translateY(-90%)'
              }}
            >
              {tooltip.title}
            </div>
          )}
        </div>
      </div>

      <div className={`${open ? 'w-64' : 'w-20'} bg-transparent border-r-2 p-3 border-black shadow-lg min-h-screen overflow-y-auto overflow-x-hidden duration-150 transition-all ease-in-out z-0 `}>
        {/* Sidebar Toggle Button */}
        <div
          className={`fixed z-10  flex justify-center items-center cursor-pointer -top-1 w-9 h-9 py-2 px-1 border-2 drop-shadow-md rounded-full rounded-t-none duration-150 ${open ? 'bg-white left-[236px]' : 'bg-black left-[60px]'} border-black`}
          onClick={() => setOpen(!open)}
        >
          <LuAlignJustify 
            className={`w-full h-full duration-200 transition-all ease-in-out ${open ? 'rotate-0 text-black' : 'rotate-90 text-white'}`}
          />
        </div>

        {/* Sidebar Header */}
        <div className={`w-full h-24 flex justify-center duration-200 transition-all ease-in-out items-center gap-2 mb-6 border-b-2 border-black sticky top-0 bg-white z-[5] select-none`}>
          <GiAstronautHelmet className={`${open ? 'w-10 h-10' : 'w-8 h-8'} hover:animate-pulse`} />
          {open && (
            <div className={`flex flex-col duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="font-bold text-lg">Godithiya's</h1>
              <p className="text-sm text-gray-500 animate-pulse">Frontend Developer</p>
            </div>
          )}
        </div>

        {/* Sidebar Menu Items */}
        <ul className="w-full flex flex-col gap-2 select-none">
          {menus.map((menu, index) => (
            <div key={index}>
              <NavLink
                to={menu.path}
                onClick={() => handleMenuClick(menu.title)}
                className={`w-full h-12 py-2 flex items-center ${open ? 'justify-start pl-9' : 'justify-center'} duration-200 transition-all ease-in-out rounded-lg cursor-pointer capitalize gap-2 border-b-2 border-black ${selectedMenu === menu.title ? 'bg-black text-white border-b-[3px] border-gray-400 hover:bg-black duration-200' : 'hover:bg-gray-200'}`}
                onMouseEnter={(e) => setTooltip({ title: menu.title, offsetY: e.clientY })}
                onMouseLeave={() => setTooltip(null)}
              >
                <span className="text-2xl">{menu.icon}</span>
                {open && <h1 className="text-base">{menu.title}</h1>}
                {open && menu.subItems.length > 0 && (
                  selectedMenu === menu.title ? <FaChevronDown className="ml-auto mr-3" /> : <FaChevronRight className="ml-auto mr-3" />
                )}
              </NavLink>

              {selectedMenu === menu.title && menu.subItems.length > 0 && (
                <ul className={`mt-2 duration-200 transition-all ease-in-out ${!open ? 'pl-4' : 'pl-[70px]'}`}>
                  {menu.subItems.map((subItem, idx) => (
                    <NavLink
                      key={idx}
                      to={subItem.path}
                      className={({isActive}) => `flex items-center cursor-pointer text-black font-medium hover:text-gray-400 mb-2 gap-2 stroke-2 ${isActive ? 'underline decoration-black decoration-2 hover:text-black' : ''}`}
                      onMouseEnter={(e) => setTooltip({ title: subItem.title, offsetY: e.clientY })}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      <span className="text-xl stroke-2">{subItem.icon}</span>
                      {open && <span>{subItem.title}</span>}
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;