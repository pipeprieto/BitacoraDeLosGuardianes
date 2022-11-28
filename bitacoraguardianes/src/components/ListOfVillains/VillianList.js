import Card from '../Card/Card';
import { AddButton } from '../AddButton/AddButton';
import { useContext } from 'react';
import { SuperContext } from '../../context/Super/SuperContext';

const VillianList = ()=> {
  const {villains} = useContext(SuperContext);

 return (
      <>
        {villains.map((hero,i) =>{
          return (
            <Card
              imagen={hero.imagen_link}
              id={hero.super_id}
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
export default VillianList;