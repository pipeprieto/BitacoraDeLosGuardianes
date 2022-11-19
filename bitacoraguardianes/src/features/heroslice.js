import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listHeroes: [],
};
export const heroSlice = createSlice({
    name:'heroSlice',
    initialState,
    reducers:{
        getHeroes:(state,action)=>{
            state.listHeroes = action.payload;
        },
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
export const { addHero, deleteHero, getHeroes } = heroSlice.actions;
export default heroSlice.reducer