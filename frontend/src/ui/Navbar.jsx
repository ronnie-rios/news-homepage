import React from 'react'

const Navbar = () => {
  return (
    <nav className="py-2.5 mb-10">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="self-center text-5xl  font-bold whitespace-nowrap font-display">W.</h1>
        <ul className="flex flex-row p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium md:border-0">
         <li className="block py-2 pl-3 pr-4 text-dark-blue hover:text-blue md:p-0 font-display ">Home</li>
          <li className="block py-2 pl-3 pr-4 text-dark-blue hover:text-blue md:p-0 font-display">New</li>
          <li className="block py-2 pl-3 pr-4 text-dark-blue hover:text-blue md:p-0 font-display">Popular</li>
          <li className="block py-2 pl-3 pr-4 text-dark-blue hover:text-blue md:p-0 font-display">Trending</li>
          <li className="block py-2 pl-3 pr-4 text-dark-blue hover:text-blue md:p-0 font-display">Categories</li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar