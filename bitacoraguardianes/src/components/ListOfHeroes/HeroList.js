import Card from "../../components/Card/Card.js";
import { AddButton } from '../AddButton/AddButton.js';
import { useContext } from 'react';
import { SuperContext } from "../../context/Super/SuperContext.js";


const HeroList = ()=> {
    const {heroes} = useContext(SuperContext);

    return (
      <>
        {heroes.map((hero)=>{
          return (
            <Card
              id={hero.super_id}
              imagen={hero.image_link}
              nombre={hero.nombre}
              edad={hero.edad}
              rol={hero.rol_super}            
            />
          );
        })}
        <AddButton></AddButton>
      </>
    )
  }
export default HeroList;