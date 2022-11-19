import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    listVilains :[],
}

export const villainSlice = createSlice({
    name:'villainSlice',
    initialState,
    reducers:{
        getVillains:(state,action)=>{
            state.listVilains = action.payload;
        },
        addVillain:(state,action)=>{
            state.listVilains.push(action.payload);
        },
        deleteVillain:(state,action)=>{}
    }
})
export const { addVillain, getVillains, deleteVillain } = villainSlice.actions;
export default villainSlice.reducer;