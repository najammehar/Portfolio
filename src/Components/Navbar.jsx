// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = ({ sectionRefs }) => {
  const [navbar, setNavbar] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className={`sticky top-0 z-30 transition-all duration-1000 ${
        navbarBg ? 'bg-grey-5' : ''
      }`}>
      <nav
        className={`flex justify-between items-center h-16 max-w-7xl mx-auto px-4 text-gray-400 `}
      >
        <NavLink to="/" className="flex items-center">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559.69 542.99" className="w-8 h-8">
                <path d="m-7.2,216.98h614.05c19.06,0,34.53,15.47,34.53,34.53h0c0,41.11-33.38,74.49-74.49,74.49H-47.16c-19.06,0-34.53-15.47-34.53-34.53h0c0-41.11,33.38-74.49,74.49-74.49Z" transform="translate(273.94 -118.36) rotate(45)" style={{fill: '#00df9a'}}/>
                <path d="m551.34,79.02c0,43.64-35.38,151.78-79.02,151.78s-79.02-108.14-79.02-151.78S428.67,0,472.32,0s79.02,35.38,79.02,79.02Z" style={{fill: '#00df9a'}}/>
                <path d="m8.35,463.97c0-43.64,35.38-151.78,79.02-151.78s79.02,108.14,79.02,151.78-35.38,79.02-79.02,79.02S8.35,507.61,8.35,463.97Z" style={{fill: '#00df9a'}}/>
            </svg>
          <h1 className="w-full text-gray-100 text-xl font-semibold italic ml-2">
            Najam Ul Hassan
          </h1>
        </NavLink>
        <ul className="hidden md:flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                onClick={() => scrollToSection(sectionRefs[index])}
                className={({ isActive }) =>
                  `p-4 cursor-pointer ${
                    isActive ? 'text-primary-100' : 'hover:text-primary-100'
                  }`
                }
                // activeClassName="text-primary-100"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          onClick={handleNavbar}
          className="block md:hidden cursor-pointer hover:text-primary-100"
        >
          {!navbar ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
        </div>
      </nav>
    </header>
        {navbar && <div className="fixed h-screen w-screen bg-[#00000062] z-40 -mt-16" onClick={handleNavbar} ></div>}
      {navbar &&
          <ul
            className={`fixed left-0 top-0 w-72 sm:w-[60%] h-screen border-r border-gray-900 bg-[#000300]  text-gray-400 z-50 ${
              navbar ? 'left-0 ease-in-out duration-500' : 'left-[-100%] ease-in-out duration-500'
            }`}
          >
            <div className="w-full mx-4 h-16 flex justify-left items-center">
              <NavLink to="/" className="flex items-center">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559.69 542.99" className="w-8 h-8">
                <path d="m-7.2,216.98h614.05c19.06,0,34.53,15.47,34.53,34.53h0c0,41.11-33.38,74.49-74.49,74.49H-47.16c-19.06,0-34.53-15.47-34.53-34.53h0c0-41.11,33.38-74.49,74.49-74.49Z" transform="translate(273.94 -118.36) rotate(45)" style={{fill: '#00df9a'}}/>
                <path d="m551.34,79.02c0,43.64-35.38,151.78-79.02,151.78s-79.02-108.14-79.02-151.78S428.67,0,472.32,0s79.02,35.38,79.02,79.02Z" style={{fill: '#00df9a'}}/>
                <path d="m8.35,463.97c0-43.64,35.38-151.78,79.02-151.78s79.02,108.14,79.02,151.78-35.38,79.02-79.02,79.02S8.35,507.61,8.35,463.97Z" style={{fill: '#00df9a'}}/>
            </svg>
                <h1 className="w-full text-gray-100 text-xl font-semibold italic ml-2">
                  Najam Ul Hassan
                </h1>
              </NavLink>
            </div>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-gray-800 mx-4 py-6 px-2"
              >
                <NavLink
                  to={item.href}
                  onClick={() => scrollToSection(sectionRefs[index])}
                  className={({ isActive }) =>
                    `cursor-pointer ${
                      isActive ? 'text-primary-100' : 'hover:text-primary-100'
                    }`
                  }
                  activeClassName="text-primary-100"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
      }
    </>
  );
};

export default Navbar;