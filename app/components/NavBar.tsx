'use client'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [showMenu, setMenuState] = useState(false);

  const handleToggle = () => {
    setMenuState(!showMenu)
  }

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          {/* logo */}
          <Image src="assets/images/logo.svg"
            alt="logo"
            width={150}
            height={150}
          />
          {/* left menu */}
          <div className="hidden space-x-8 font-bold lg:flex">
            <Link href='#' className="text-grayishViolet">Features</Link>
            <Link href='#' className="text-grayishViolet">Pricing</Link>
            <Link href='#' className="text-grayishViolet">Resources</Link>
          </div>
        </div>
        {/* right menu */}
        <div className="hidden items-center space-x-6 font-bold text-grayisViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <Link href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">Sing Up</Link>
        </div>
        {/* Hamburger Button */}
        <button id="menu-btn" onClick={handleToggle}
          className={`block ${showMenu ? 'open' : ''} hamburger lg:hidden focus:outline-none`}
          type="button">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div id="menu" className={`absolute ${showMenu ? 'flex' : 'hidden'} p-6 r ounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}>
        <div className="flex flex-col items-center justify center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="#" className="w-full text-center">Features</a>
          <a href="#" className="w-full text-center">Pricing</a>
          <a href="#" className="w-full text-center">Resources</a>
          <a href="#" className="w-full pt-6 border-top border-gray-400 text-center">Login</a>
          <a href="#" className="w-full py-3 text-center rounded-full bg-cyan">Sign Up</a>
        </div>
      </div>
    </nav >
  )
}
