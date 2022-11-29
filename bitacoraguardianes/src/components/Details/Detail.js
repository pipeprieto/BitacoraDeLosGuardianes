import React, { Component } from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = ()=> {
 const params = useParams();
  const [info,setInfo] = useState({
    nombre:'',
    edad: 0,
    image_link : '',
    origen:'',
    patrocinadores:[],
    rasgos:[],
    relaciones: '',
    rol_super:''

  })
  let found ={};
   const getSuperInfo = ()=>{
    const heroes = JSON.parse(window.localStorage.getItem('heroes'));
     found = heroes.find((h)=>h.super_id === params.id);
    if (found === []) {
      const villanos = JSON.parse(window.localStorage.getItem("villanos"))
      found = villanos.find((v)=>v.super_id === params.id)
    }
    setInfo({nombre:found.nombre,edad:found.edad,image_link:found.image_link,origen:found.origen,patrocinadores:found.patrocinadores,rasgos:found.rasgosSuper,relaciones:found.relaciones,rol_super:found.rol_super})
      console.log(info)
   }
   useEffect(()=>{
    getSuperInfo()
   },[])
  
    return (
      <>
        <div className="h-screen">
          <div className="mx-auto w-4/5 pt-10">
            <h1 className="pt-5 text-center text-3xl text-amber-300">
              Detalles
            </h1>
          </div>
          <div className="flex mt-5">
            <div className="flex-1 flex-col w-1/3 sticky px-5 mt-5 max-h-80">
              <div className="mx-auto h-44 w-44 pt-3">
                <img
                  src={info.image_link}
                  alt=""
                  className="h-36 w-36 mx-auto"
                />
              </div>
              <div>
                <p className="text-customyellow">
                  <span>Nombre: </span>
                  {info.nombre}
                </p>
                <p className="text-customyellow">
                  <span>Edad: </span>
                  {info.edad} años
                </p>
                <p className="text-customyellow">
                  <span>origen: </span>
                  {info.origen}
                </p>
                <p className="text-customyellow">
                  <span>Relaciones: </span>
                  {info.relaciones}
                </p>
                <p className="text-customyellow">
                  <span>Rol: </span>
                  {info.rol_super}
                </p>
                <p className="text-customyellow">
                  <span>Habilidades: </span>
                  Desconocidas
                </p>
              </div>
            </div>
            <div className="flex-auto w-2/3 overflow-y-auto">
              <div>
                <h1 className="pt-5 text-center text-2xl text-amber-300">
                  Actividades
                </h1>
              </div>
              <div className="mx-auto mt-4 w-4/5">
                <table className="border border-spacing-4 border-cyan-500 table-fixed w-full max-h-72">
                  <thead className="bg-cyan-900 items-center">
                    <tr>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Evento
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Título
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Lugar
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Inicio
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Fin
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-cyan-600 overflow-y-scroll w-full scrollbar-thin scrollbar-track-cyan-900 scrollbar-thumb-cyan-500">
                    <tr>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Evento 1
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Titulo Evento
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Lugar evento
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Inicio Evento
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Fin evento
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h1 className="pt-5 text-center text-2xl text-amber-300 mt-5">
                  Patrocinadores
                </h1>
              </div>
              <div className="mx-auto mt-4 w-4/5">
                <table className="border border-spacing-4 border-cyan-500 table-fixed w-full max-h-72">
                  <thead className="bg-cyan-900 items-center">
                    <tr>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Patrocinador
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Monto
                      </th>
                      <th className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Origen
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-cyan-600 overflow-y-scroll w-full scrollbar-thin scrollbar-track-cyan-900 scrollbar-thumb-cyan-500">
                    <tr>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Nombre Patrocinador
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Monto Patrocinador
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Origen Patrocinador
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


