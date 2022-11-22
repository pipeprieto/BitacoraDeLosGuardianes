import axios from "axios";

const requests ={
    getVillainList : (options)=>{
    return [{
        super_id:1,
        imagen:'',
        nombre:'Joker',
        habilidades:'Desconocidas',
        debilidades:'Muchas cosas',
        rol:'villano'
    }]
}
}
export const {getVillainList} = requests;