import React from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// import Heroes  from '../../components/Heroes/Heroes';
// import { Villanos } from '../Villanos/Villanos';

export const NavBar = () => {
  return (
    <nav className="bg-cyan-600 text-amber-300 flex h-12 sticky w-full">
      <div className="flex-1 w-64">
          <h1 className="my-2 text-xl mx-10">Guardians of the globe</h1>  
      </div>
      <div className="flex-1">
        <ul className="flex text-center">
          <li className="flex-1 w-6 justify-evenly mx-10 my-3">
            <a href="#" className="">
              Héroes
            </a>
          </li>
          <li className="flex-1 w-6 justify-evenly mx-10 my-3">
            <a href="#" className="">
              Villanos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
