import axios from 'axios';
import Card from '../Card/Card';
import { AddButton } from '../AddButton/AddButton';
import {getVillains} from '../../features/villianslice';
import {useSelector,useDispatch} from 'react-redux';
import { useState,useEffect } from 'react';

const VillianList = ()=> {
 const url = "http://localhost:3002";
 const vilianList = useSelector((state) => state.villainSlice.listVilains);
 const dispatch = useDispatch();
 const [list,setList] = useState([]);

 const getVillainList = async()=>{
  try {
    let response = await axios.get(`${url}/villains`);
    console.log(response.data);
    setList(response.data)
    console.log(list)
    dispatch(getVillains(list));
  } catch (error) {
    console.log(error);
  }
 }

 useEffect(()=>{
  getVillainList();
 },[])

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