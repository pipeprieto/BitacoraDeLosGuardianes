import Card from "../../components/Card/Card.js";
import { AddButton } from '../AddButton/AddButton.js';
import { useContext } from 'react';
import { SuperContext } from "../../context/Super/SuperContext.js";

const HeroList = ()=> {
    const {heroes} = useContext(SuperContext);
    return (
      <>
        {heroes.map((hero,i)=>{
          return (
            <Card
              key={hero.super_id}
              imagen={hero.imagen}
              nombre={hero.nombre}
              edad={hero.edad}
              habilidades={hero.habilidades}
              debilidades={hero.debilidades}
            />
          );
        })}
        <AddButton></AddButton>
      </>
    )
  }
export default HeroList;