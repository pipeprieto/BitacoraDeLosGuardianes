import React from "react";
import HeroList from "../ListOfHeroes/HeroList.js";

const Heroes = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-4/5 pt-10">
        <h1 className="pt-5 text-center text-3xl text-amber-300">Héroes</h1>
      </div>
      <div className="">
        <div className="flex mt-8 mx-auto w-4/5 max-h-screen flex-wrap justify-center">
          <HeroList/>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
