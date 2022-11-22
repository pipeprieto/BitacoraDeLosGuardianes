import axios from 'axios';

const requests = {
    getHerolist: (options)=>{
        return [{
          super_id: 1,
          imagen:
            "https://s3.amazonaws.com/comicgeeks/characters/avatars/10781.jpg?t=1611911758",
          nombre: 'Mark Grayson',
          edad:17,
          habilidades:'Muchas cosas',
          debilidades:'Muchas cosas',
          rol:'heroe'
        }];
    },

    createHero: (options)=>{
        return 'Funciona el crear'
    }

}

export const {getHerolist,createHero} = requests;