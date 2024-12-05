import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    currentRequest:null,
    requestHistory:[]
 }

export const requestSlice=createSlice({
    name:"request",
    initialState,
    reducers:{
        addRequest:(state,action)=>{
           state.currentRequest=action.payload
           state.requestHistory.push(action.payload)
        },
        removeRequest:(state)=>{
            state.currentRequest=null
        },
        clearHistory:(state)=>{
            state.requestHistory=[]
        },
        clearOne:(state,action)=>{
            state.currentRequest =state.currentRequest.filter((r)=>r._id !== action.payload)
            if(state.currentRequest?._id===action.payload){
                state.currentRequest=null
            }
           
        }

    }

})
export const selectCurrentRequest= (state)=>state.request.currentRequest;
export const selectRequestHistory=(state)=>state.request.requestHistory;

export const{addRequest,removeRequest,clearHistory}=requestSlice.actions;
export default requestSlice.reducer