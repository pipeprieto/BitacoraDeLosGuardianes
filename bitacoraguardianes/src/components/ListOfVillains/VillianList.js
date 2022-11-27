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
              key={hero.super_id}
              imagen={hero.imagen}
              id={hero.super_id}
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
export default VillianList;