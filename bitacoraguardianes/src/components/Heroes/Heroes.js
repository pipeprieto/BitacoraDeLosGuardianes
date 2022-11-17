import React from "react";
import Filtro from "../../components/Filtro/Filtro.js";
import HeroList from "../ListOfHeroes/HeroList.js";

const Heroes = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-4/5">
        <h1 className="pt-5 text-center text-3xl text-amber-300">Héroes</h1>
      </div>
      <div className="">
        <div>
          <Filtro texto1="Nombre" texto2="Habilidades" texto3="Relaciones" />
        </div>
        <div className="flex mt-8 mx-auto w-4/5 max-h-screen flex-wrap">
          <HeroList/>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
