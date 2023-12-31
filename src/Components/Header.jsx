import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true
    }
  }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-7x mx-auto w-full'>
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={() => Navigate("/")} />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`py-3 text-sm font-semibold text-gray-400 bonrd-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-900"} cursor-pointer`}>Home</li>
            <li className={`py-3 text-sm font-semibold text-gray-400 bonrd-b-[3px] border-b-transparent ${pathMathRoute("/offers") && "text-black border-b-red-900"} cursor-pointer`} onClick={() => Navigate("/offers")}>Offers</li>
            <li className={`py-3 text-sm font-semibold text-gray-400 bonrd-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-rose-600"} cursor-pointer`} onClick={() => Navigate("/sign-in")}>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
