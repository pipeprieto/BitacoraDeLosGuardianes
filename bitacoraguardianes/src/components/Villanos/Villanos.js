import React from "react";
import Filtro from "../../components/Filtro/Filtro.js";
import VillianList from "../ListOfVillains/VillianList.js";

const Villanos = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-4/5">
        <h1 className="pt-5 text-center text-3xl text-amber-300">Villanos</h1>
      </div>
      <div className="">
        <div>
          <Filtro texto1="Nombre" texto2="Origen" texto3="Debelidad" />
        </div>
        <div className="flex mt-8 mx-auto w-4/5 max-h-screen flex-wrap ">
          <VillianList/>
        </div>
      </div>
    </div>
  );
};

export default Villanos;
