import React from 'react'
import Info from '../InfoButton/Info';
const Card = ({ imagen, nombre, edad, habilidades, debilidades }) => {
  return (
    <div className="border-2 border-cyan-300 bg-gradient-to-br from-cyan-700/40 to-cyan-600/75 rounded-tl-3xl mx-3 flex w-96 h-60 rounded-br-3xl my-5">
      <div className="flex-1 justify-center ml-2 mt-5">
        <img src={imagen} alt="imagen" className="h-36x" />
      </div>
      <div className="flex flex-1 ml-3 flex-col">
        <div className="">
          <label className="font-bold text-xs text-amber-300">Nombre:</label>
          <p className="my-1 text-xs text-amber-300">{nombre}</p>
          <label className="font-bold text-xs text-amber-300">Edad:</label>
          <p className="my-1 text-xs text-amber-300">{edad} años</p>
          <label className="font-bold text-xs text-amber-300">Habilidades:</label>
          <p className="my-1 text-xs text-amber-300"> {habilidades}</p>
          <label className="font-bold text-xs text-amber-300">Debilidades:</label>
          <p className="my-1 text-xs text-amber-300">{debilidades}</p>
        </div>
        <div>
          <Info/>
        </div>
      </div>
    </div>
  );
};

export default Card