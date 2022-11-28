export const superReducer = (state,action)=>{
    switch (action.type) {
      case "ADD_HERO":
        let heroe = JSON.parse(window.localStorage.getItem('heroes'))
        heroe.push(action.payload);
        window.localStorage.setItem('heroes',JSON.stringify(heroe));
        state.heroes.push(action.payload)
        return {heroes:state.heroes}

      case "ADD_VILLAIN":
        let villanos = JSON.parse(window.localStorage.getItem("villanos"));
        villanos.push(action.payload);
        window.localStorage.setItem("villanos", JSON.stringify(villanos));
        state.villains.push(action.payload)
        return { villains: state.villain };

      case "DLTE_HERO":
        let hero = JSON.parse(window.localStorage.getItem('heroes'))
        let newheroes = hero.filter(h=> h.super_id === action.payload)
        window.localStorage.setItem('heroes',JSON.stringify(newheroes));
        state.heroes = newheroes;
        return{
          heroes: state.heroes
        }

      case "DLTE_VILLAIN":
        let villano = JSON.parse(window.localStorage.getItem("villanos"));
        let newvillano = villano.filter((h) => h.super_id === action.payload);
        window.localStorage.setItem("heroes", JSON.stringify(newvillano));
        state.villains = newvillano;
        return {
          villains: state.villains
        }
      
      case "UPDT_HERO":
        let heroes = JSON.parse(window.localStorage.getItem('heroes'))
        const found = heroes.find(heroe => heroe.super_id === action.payload.super_id)
        found.nombre = action.payload.nombre
        found.image_link = action.payload.image_link;
        found.edad = action.payload.edad;
        found.relaciones = action.payload.relaciones;
        found.origen = action.payload.origen;

        return

      case "UPDT_VILLAIN":
        return
    }
}