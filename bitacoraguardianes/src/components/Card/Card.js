import Info from '../InfoButton/Info';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Card = ({
  imagen,
  id,
  nombre,
  edad,
  rol,
}) => {
  
  return (
    <div className="border-2 border-cyan-300 bg-gradient-to-br from-cyan-700/40 to-cyan-600/75 rounded-tl-3xl mx-3 flex w-96 h-44 rounded-br-3xl my-5">
      <div className="flex-1 justify-center ml-2 mt-5">
        <img
          src={
            imagen !== "" || imagen === null || imagen === undefined
              ? imagen
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="imagen"
          className="h-36"
        />
      </div>
      <div className="flex flex-1 ml-3 flex-col">
        <div className="">
          <label className="font-bold text-xs text-amber-300">Nombre:</label>
          <p className="my-1 text-xs text-amber-300">{nombre}</p>
          <label className="font-bold text-xs text-amber-300">Edad:</label>
          <p className="my-1 text-xs text-amber-300">{edad} años</p>
        </div>
        <div>
          <Info />
        </div>
        <div className="flex w-30 ">
          <div className="flex-1">
            <Link
              to={
                rol === "Heroe"
                  ? `/update/hero/${id}`
                  : `/update/villain/${id}`
              }
            >
              <AiFillEdit className="text-amber-300 mx-auto mt-3 w-5 h-5 hover:cursor-pointer" />
            </Link>
          </div>
          <div className="flex-1">
            <Link
              to={
                rol === "Heroe"
                  ? `/delete/hero/${id}`
                  : `/delete/villain/${id}`
              }
            >
              <AiFillDelete className="text-red-600 mx-auto mt-3 w-5 h-5 hover:cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card