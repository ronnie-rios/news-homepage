import React from 'react'

const Navbar = () => {
  return (
    <nav className="px-2 py-2.5 mb-6">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="self-center text-5xl  font-bold whitespace-nowrap">W.</h1>
        <ul className="flex flex-row p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium md:border-0">
         <li className="block py-2 pl-3 pr-4 text-blue hover:text-black md:p-0">Home</li>
          <li className="block py-2 pl-3 pr-4 text-blue hover:text-black md:p-0">New</li>
          <li className="block py-2 pl-3 pr-4 text-blue hover:text-black md:p-0">Popular</li>
          <li className="block py-2 pl-3 pr-4 text-blue hover:text-black md:p-0">Trending</li>
          <li className="block py-2 pl-3 pr-4 text-blue hover:text-black md:p-0">Categories</li>
        </ul>
    </div>
  </nav>
  )
}

export default Navbar