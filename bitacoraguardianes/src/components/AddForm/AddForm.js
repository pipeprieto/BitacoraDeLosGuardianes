import {useNavigate,useParams,useLocation} from 'react-router-dom'
import { SuperContext } from "../../context/Super/SuperContext.js";
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AddForm = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    console.log(location)
    const { addHero, addVillain, updateHero, updateVillain, heroes, villains} =
      useContext(SuperContext);

    const handleAdd = (e)=>{
        e.preventDefault();
        let inputs = document.querySelectorAll('input');
        let datos = {};
        inputs.forEach(e=>{
           datos = {
             ...datos,
             super_id: uuidv4(),
             [e.name]: e.value,
           };
        })
        const data = datos;
        if(data.rol_super === 'Heroe'){
          addHero(data);
          navigate('/heroes');
        }
        
        if (data.rol_super === 'Villano') {
          addVillain(data);
          navigate('/villanos')
        }
    }

    const handleUpdate = (e)=>{
      e.preventDefault();
      let inputs = document.querySelectorAll("input");
      let datos = {};
      inputs.forEach((e) => {
        datos = {
          ...datos,
          [e.name]: e.value,
        };
      });
      const data = datos;
      if(data.rol_super === 'Heroe'){
        updateHero(data)
        navigate('/heroes')
      }
      if (data.rol_super === 'Villano') {
        updateVillain(data)
        navigate('/villanos')
      }

    }


  return (
    <div className="min-h-screen sm:p-12 ">
      <div className="mx-auto max-w-md px-6 py-12 border-2 border-cyan-300 bg-gradient-to-br from-cyan-700/90 to-cyan-600/75 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold text-amber-300 mb-8">Super</h1>
        <form id="form">
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
              name="image_link"
              placeholder="Link de Imagen"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none text-amber-300 focus:outline-none  border-cyan-300 placeholder:text-amber-300"
            />
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="edad"
              placeholder="Edad"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="habilidades"
              placeholder="Habilidades"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="debilidades"
              placeholder="Debilidades"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="relaciones"
              placeholder="Relaciones"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="origen"
              placeholder="Viltrum"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="rol_super"
              placeholder="Rol"
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2  text-amber-300 appearance-none focus:outline-none focus:ring-0  border-cyan-300 placeholder:text-amber-300"
              required
            />
          </div>
          <button
            id="button"
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-amber-300 transition-all duration-150 ease-linear rounded-lg shadow outline-none border-cyan-300 bg-cyan-500/50 hover:bg-cyan-600/60 hover:shadow-lg focus:outline-none"
            onClick={handleAdd}
          >
            Añadir
          </button>
        </form>
      </div>
    </div>
  );
}
