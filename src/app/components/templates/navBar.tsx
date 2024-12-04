'use client';
import { useState } from "react";
import AAncle from "../atoms/aAncle";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "My boards",
    href: "/my-boards",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How it Works",
    href: "#how-it-works",
  },
  {
    name: "Docs",
    href: "#docs",
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold">Kanban API</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <nav
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center text-white">
            {links.map((link) => (
              <li key={link.name}>
                <AAncle
                  href={link.href}
                  className="block py-2 px-4 md:inline hover:underline"
                >
                  {link.name}
                </AAncle>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
