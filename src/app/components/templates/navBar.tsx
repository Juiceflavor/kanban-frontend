'use client'
import { useState } from 'react';
import Link from 'next/link';
import AAncle from "../atoms/aAncle";

const links = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "My boards",
    href: "/my-boards"
  }
]

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Kanban Board</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            {links.map(x => (
              <li key={x.name}>
                <AAncle>{x.name}</AAncle>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
