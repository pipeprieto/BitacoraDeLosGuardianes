import React from 'react'
import Card from '../Card/Card';
import { AddButton } from '../AddButton/AddButton';


const VillianList = ()=> {
 const vilianList =[]
 return (
      <>
        {vilianList.map((hero,i) =>{
          return (
            <Card
              key={hero[i].super_id}
              imagen={hero[i].imagen}
              nombre={hero[i].nombre}
              edad={hero[i].edad}
              habilidades={hero[i].habilidades}
              debilidades={hero[i].debilidades}
            />
          );
        })}
        <AddButton></AddButton>
      </>
    )

  
}
export default VillianList;