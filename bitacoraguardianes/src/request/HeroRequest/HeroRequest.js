import axios from 'axios';
import {heroes} from "../../config/supers";

let url = "https://localhost:7046";
const localstorage = window.localStorage.getItem('heroes');
const requests = {
    getHerolist: ()=>{
        if (localstorage === null) {
          window.localStorage.setItem('heroes',JSON.stringify(heroes))
        }
        let supers = JSON.parse(window.localStorage.getItem('heroes'))
        
        return supers;
    },

    getHeroById: async (id)=>{
      const res = await axios.get(`${url}/api/v1/supers/heroe/${id}`);
      console.log(res)
      return res.data
    },

    getAgenda: async (id)=>{
      const res = await axios.get(`${url}/api/v1/eventos/agenda/${id}`);
      return res.data
    },
    getBestSponsor: async (id)=>{
      const res = await axios.get(
        `${url}/api/v1/supers/mostFoughtVillanoByHeroe/${id}`
      );
      return res.data;
    },

    createHero: (options)=>{
        return 'Funciona el crear'
    }

}

export const {getHerolist,createHero} = requests;