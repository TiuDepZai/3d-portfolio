import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#0F1923]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className='w-10 h-10 flex items-center justify-center border-2 border-[#66FCFF] hover:border-[#FF4655] transition-colors duration-300'>
            <span className='text-[#66FCFF] font-bold text-xl'>T</span>
          </div>
          <p className='text-[#ECE8E1] text-[18px] font-bold cursor-pointer flex'>
            Tiu &nbsp;
            <span className='sm:block hidden text-[#66FCFF]'>| Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                  ? 'text-[#66FCFF]' 
                  : 'text-[#ECE8E1]'
              } hover:text-[#66FCFF] text-[18px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] cursor-pointer border-2 border-[#66FCFF] flex items-center justify-center'
            onClick={() => setToggle(!toggle)}
          >
            <span className={`block w-4 transition-transform duration-300 ${toggle ? 'rotate-45 translate-y-[2px]' : ''}`}>
              <span className='block w-full h-[2px] bg-[#66FCFF] mb-1'></span>
              <span className={`block w-full h-[2px] bg-[#66FCFF] ${toggle ? 'hidden' : ''}`}></span>
              <span className={`block w-full h-[2px] bg-[#66FCFF] ${toggle ? '-rotate-90 -translate-y-[2px]' : ''}`}></span>
            </span>
          </div>

          <motion.div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#1F2B3E] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 border border-[#66FCFF]`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title 
                      ? 'text-[#66FCFF]' 
                      : 'text-[#ECE8E1]'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;