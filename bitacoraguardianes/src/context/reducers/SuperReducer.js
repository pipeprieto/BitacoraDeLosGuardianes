export const superReducer = (state,action)=>{
    switch (action.type) {
      case "ADD_HERO":
        return {heroes:[...state.heroes,action.payload]}

      case "ADD_VILLAIN":
        return { villains: [...state.villains, action.payload] };

      case "DLTE_HERO":
        return{
          heroes: state.heroes.filter((hero)=>hero.id !== action.payload)
        }

      case "DLTE_VILLAIN":
        return {
          villains: state.villains.filter((villain)=>villain.id !== action.payload)
        }
      
      case "UPDT_HERO":
        return

      case "UPDT_VILLAIN":
        return
    }
}