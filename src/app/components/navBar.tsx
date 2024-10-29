'use client'
import { Link } from "react-router-dom";
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
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Kanban Board</span>
        {links.map( x => (
         <Link to={x.href} key={x.name}>
           <AAncle>{x.name}</AAncle> 
          </Link>
        ))}
        <AAncle>Home</AAncle>
        <AAncle>Home</AAncle>
      </div>
    </nav>
  );
}
