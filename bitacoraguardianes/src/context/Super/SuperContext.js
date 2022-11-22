import { createContext,useReducer } from "react";
import { superReducer } from "../reducers/SuperReducer";
import { getHerolist } from "../../request/HeroRequest/HeroRequest";
import { getVillainList } from "../../request/VillainRequest/VillainRequest";

const heroList = getHerolist('');
const villainList = getVillainList('')

const initialState = {
    heroes:heroList,
    villains:villainList
}
export const SuperContext = createContext(initialState)

export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(superReducer, initialState)
    
    const addHero = (action)=>{
        console.log(state.heroes);
        dispatch({type:'ADD_HERO', payload:action})
    }
    const addVillain = (action)=>{
        dispatch({type:'ADD_VILLAIN',payload:action})
    }
    return <SuperContext.Provider value={{...state,addHero,addVillain}}>
            {children}
        </SuperContext.Provider>
    
}
