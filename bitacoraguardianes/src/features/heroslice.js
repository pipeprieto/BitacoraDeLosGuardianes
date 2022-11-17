import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listHeroes: [],
};
export const heroSlice = createSlice({
    name:'heroSlice',
    initialState,
    reducers:{
        addHero:(state,action)=>{
            state.listHeroes.push(action.payload);
        },
        deleteHero:(state,action)=>{
            const exists = state.listHeroes.find(hero => hero.key === action.payload);
            if (exists) {
             state.listHeroes.slice(state.listHeroes.indexOf(action.payload), 1);    
            }
        }
        

    }
})
export const {addHero} = heroSlice.actions;
export default heroSlice.reducer