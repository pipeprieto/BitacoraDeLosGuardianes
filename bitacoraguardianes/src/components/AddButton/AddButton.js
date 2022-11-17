import React from 'react'
import { IoAddOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const AddButton = () => {
  return (
    <Link to="/addform">
      <div className="border-2 border-cyan-300 bg-gradient-to-br from-cyan-700/40 to-cyan-600/75  mx-3 flex w-24 h-24 my-5">
        <IoAddOutline className="text-cyan-300 w-16 h-16 my-auto mx-auto hover:cursor-pointer" />
      </div>
    </Link>
  );
}
