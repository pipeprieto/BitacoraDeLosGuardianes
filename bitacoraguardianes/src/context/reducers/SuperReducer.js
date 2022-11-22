export const superReducer = (state,action)=>{
    switch (action.type) {
      case "ADD_HERO":
        return {heroes:[...state.heroes,action.payload]}

      case "ADD_VILLAIN":
        return { villains: [...state.villains, action.payload] };
    }
}