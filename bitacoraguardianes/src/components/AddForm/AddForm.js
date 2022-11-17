import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHero } from '../../features/heroslice';
import {redirect} from 'react-router-dom'

export const AddForm = () => {
    const selector = useSelector((state)=>state.heroSlice.listHeroes)
    const dispatch = useDispatch();
    const handleAdd = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        dispatch(addHero(data));
        redirect("/heroes");
    }

  return (
    <div className="min-h-screen  p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 border-2 border-cyan-300 bg-gradient-to-br from-cyan-700/90 to-cyan-600/75 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold text-amber-300 mb-8">Añadir Héroe</h1>
        <form id="form" onSubmit={handleAdd}>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent text-amber-300 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="imagen"
              placeholder="Link de Imagen"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none text-amber-300 focus:outline-none  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="edad"
              placeholder="edad"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="habilidades"
              placeholder="habilidades"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="debilidades"
              placeholder="debilidades"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <button
            id="button"
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-amber-300 transition-all duration-150 ease-linear rounded-lg shadow outline-none border-cyan-300 bg-cyan-500/50 hover:bg-cyan-600/60 hover:shadow-lg focus:outline-none"
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
  );
}
