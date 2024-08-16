'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="relative px-2">
        <div className="max-w-screen-xl animate-pulseShadow ease-in-out flex flex-wrap items-center justify-between mx-auto p-4 h-[75px] bg-[#1e1e1e] shadow-inner border-2 rounded-2xl border-[#00e7b987] shadow-inner-dark">
        <div>
          <Link href="/">
            <span className="text-4xl font-medium whitespace-nowrap font-video text-[#00e7ba]">&gt;</span>
            <span className="self-center text-4xl font-medium whitespace-nowrap font-effra">TIMPE.Dev</span>
            <span className="text-4xl font-medium whitespace-nowrap font-video animate-blink">_</span>
          </Link>
        </div>
        <div>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#1A1A1A] focus:outline-none">
            <FaBars size={24} fill="#00e7ba" />
          </button>
            
            <div className={`${isOpen ? 'visible text-center mx-4 bg-[#1A1A1A]' : 'invisible'} absolute rounded-lg top-full right-0 w-1/2 z-10 md:visible md:static`}>
              <ul className="font-medium font-video text-lg flex flex-col p-4 md:p-0 border border-teal-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-whit">
                <li>
                <Link onClick={() => setIsOpen(false)} href="/#skills" className='navLink custom-link block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#bafef0] transition-colors duration-1000'>
                  SKILLS
                </Link>
                </li>
                <li>
                <Link onClick={() => setIsOpen(false)} href="/#projects" className='navLink custom-link block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#bafef0] transition-colors duration-1000'>
                  PROJECTS
                </Link>
                </li>
                <li className={`${isOpen ? 'my-4' : ''} flex flex-row mx-auto space-x-4`}>
                  <Link href="https://www.linkedin.com/in/tsuni" target="_blank" className='text-white hover:text-[#00e7ba] transition-colors duration-300'>
                    <FaLinkedin size={24} />
                  </Link>
                  <Link href="https://github.com/timo-suni" target="_blank" className='text-white hover:text-[#00e7ba] transition-colors duration-300'>
                      <FaGithub size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
