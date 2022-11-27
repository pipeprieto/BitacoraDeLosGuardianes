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
    
    const addHero = (data)=>{
        dispatch({type:'ADD_HERO', payload:data})
    }
    const deleteHero = (data)=>{
        dispatch({type:'DLTE_HERO', payload:data})
    }

    const updateHero = (data)=>{
        dispatch({ type: "UPDT_HERO", payload: data });
    }

    const addVillain = (data)=>{
        dispatch({type:'ADD_VILLAIN',payload:data})
    }

    const deleteVillain = (data) => {
      dispatch({ type: "DLTE_VILLAIN", payload: data });
    };

    const updateVillain = (data) => {
      dispatch({ type: "UPDT_VILLAIN", payload: data });
    };

    return (
      <SuperContext.Provider
        value={{
          ...state,
          addHero,
          addVillain,
          deleteHero,
          updateHero,
          deleteVillain,
          updateVillain,
        }}
      >
        {children}
      </SuperContext.Provider>
    );
    
}
