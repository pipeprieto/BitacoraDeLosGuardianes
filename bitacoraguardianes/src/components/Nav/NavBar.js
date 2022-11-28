import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
      <nav className="bg-cyan-600 text-amber-300 flex h-12 w-full">
        <div className="flex-1 w-64">
          <h1 className="my-2 text-xl mx-10">Guardians of the globe</h1>
        </div>
        <div className="flex-1">
          <ul className="flex text-center">
              <li className="flex-1 w-6 justify-evenly mx-10 my-3">
                <Link to="/heroes" className="">
                  Héroes
                </Link>
              </li>
              <li className="flex-1 w-6 justify-evenly mx-10 my-3">
                <Link to="/villanos" className="">
                  Villanos
                </Link>
              </li>
            
          </ul>
        </div>
      </nav>
    
  );
}
