import React from "react";
import Card from "../../components/Card/Card.js";
import Filtro from "../../components/Filtro/Filtro.js";

const Villanos = () => {
  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-4/5">
        <h1 className="pt-5 text-center text-3xl text-amber-300">Héroes</h1>
      </div>
      <div className="">
        <div>
          <Filtro texto1="Nombre" texto2="Origen" texto3="Debelidad" />
        </div>
        <div className="flex mt-8 mx-auto w-4/5 max-h-screen flex-wrap ">
          <Card
            imagen="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758"
            nombre="Mark Grayson"
            edad="17"
            habilidades="Volar, super fuerza, invulnerabilidad sobrehumana."
            debilidades="Muchas cosas."
          />
          <Card
            imagen="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758"
            nombre="Mark Grayson"
            edad="17"
            habilidades="Volar, super fuerza, invulnerabilidad sobrehumana."
            debilidades="Muchas cosas."
          />
          <Card
            imagen="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758"
            nombre="Mark Grayson"
            edad="17"
            habilidades="Volar, super fuerza, invulnerabilidad sobrehumana."
            debilidades="Muchas cosas."
          />
          <Card
            imagen="https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758"
            nombre="Mark Grayson"
            edad="17"
            habilidades="Volar, super fuerza, invulnerabilidad sobrehumana."
            debilidades="Muchas cosas."
          />
        </div>
      </div>
    </div>
  );
};

export default Villanos;
