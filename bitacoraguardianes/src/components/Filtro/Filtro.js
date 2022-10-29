import React from 'react'

const Filtro = ({texto1,texto2,texto3}) => {
  return (
    <div className="flex w-3/4 mx-auto mt-6 justify-self-center">
      <div className="flex-1">
        <label className="text-amber-300 mr-4">{texto1}</label>
        <input
          type="text"
          className="bg-cyan-500/50 text-amber-300 mx-3 outline-none"
        />
      </div>
      <div className="flex-1">
        <label className="text-amber-300 mr-4">{texto2}</label>
        <input
          type="text"
          className="bg-cyan-500/50 text-amber-300 mx-3 outline-none"
        />
      </div>
      <div className="flex-1">
        <label className="text-amber-300 mr-4">{texto3}</label>
        <input
          type="text"
          className="bg-cyan-500/50 text-amber-300 mx-3 outline-none"
        />
      </div>
      <div className="flex-1">
        <div className="bg-cyan-500/50 text-amber-300 text-center w-14 hover:cursor-pointer hover:bg-cyan-600 ml-10">
          <p>Filtrar</p>
        </div>
      </div>
    </div>
  );
}

export default Filtro