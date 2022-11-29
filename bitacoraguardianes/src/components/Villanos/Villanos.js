import React from "react";
import VillianList from "../ListOfVillains/VillianList.js";

const Villanos = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-4/5 pt-10">
        <h1 className="pt-5 text-center text-3xl text-amber-300">Villanos</h1>
      </div>
      <div className="">
        <div className="flex mt-8 mx-auto w-4/5 max-h-screen flex-wrap justify-center">
          <VillianList/>
        </div>
      </div>
    </div>
  );
};

export default Villanos;
