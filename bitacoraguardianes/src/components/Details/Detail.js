import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
  render() {
    return (
      <>
        <div className="h-screen">
          <div className="mx-auto w-4/5">
            <h1 className="pt-5 text-center text-3xl text-amber-300">
              Detalles
            </h1>
          </div>
          <div className="flex mt-5">
            <div className="flex-1 flex-col w-1/3 sticky px-5 mt-5 max-h-80">
              <div className="mx-auto h-44 w-44 pt-3">
                <img
                  src="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758"
                  alt=""
                  className="h-36 w-36 mx-auto"
                />
              </div>
              <div>
                <p className="text-customyellow">
                  Esto es solo un texto de prueba para colocar cierta
                  información en esta vuelta.
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
                        Hola
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Como estás
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        bien
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        y
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        tu
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
                        Hola
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        Como estás
                      </td>
                      <td className="border border-spacing-4 border-cyan-500 text-amber-300">
                        bien
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
}
