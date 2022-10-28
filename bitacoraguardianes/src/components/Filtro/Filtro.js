import React from 'react'

const Filtro = () => {
  return (
    <div className="flex w-4/5 mx-auto mt-6 justify-self-center">
      <div className="flex-1">
        <label className="text-amber-300 mr-4">Filtro 1</label>
        <select className="bg-cyan-500/50 text-amber-300 mx-3">
          <option className="bg-cyan-500/50 text-amber-300">Opcion 1</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 2</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 3</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="text-amber-300 mr-4">Filtro 2</label>
        <select className="bg-cyan-500/50 text-amber-300 mx-3">
          <option className="bg-cyan-500/50 text-amber-300">Opcion 1</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 2</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 3</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="text-amber-300 mr-4">Filtro 3</label>
        <select className="bg-cyan-500/50 text-amber-300 mx-3">
          <option className="bg-cyan-500/50 text-amber-300">Opcion 1</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 2</option>
          <option className="bg-cyan-500/50 text-amber-300">Opcion 3</option>
        </select>
      </div>
      <div className="flex-1">
        <div className="bg-cyan-500/50 text-amber-300 text-center w-14">
          <p>Filtrar</p>
        </div>
      </div>
    </div>
  );
}

export default Filtro