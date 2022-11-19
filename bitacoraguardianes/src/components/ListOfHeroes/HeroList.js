import axios from 'axios'
import Card from "../../components/Card/Card.js";
import { useSelector, useDispatch } from 'react-redux';
import { getHeroes } from '../../features/heroslice.js';
import { AddButton } from '../AddButton/AddButton.js';
import { useState,useEffect } from 'react';

const HeroList = ()=> {
    const url = "http://localhost:3002";
    const heroList = useSelector((state) => state.heroSlice.listHeroes);
    const dispatch = useDispatch();
    const [list,setList] = useState([]);
        
   const getHeroesList = async()=>{
      try {
       let response = await axios.get(`${url}/heroes`);
       console.log(response.data);
       setList(response.data)
       console.log(list);
       dispatch(getHeroes(list));
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(()=>{
       getHeroesList();
       console.log(heroList);
    },[])



    return (
      <>
        {heroList.map((hero,i) =>{
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
export default HeroList;