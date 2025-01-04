import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:"1",
        title:'1'
    },
    {
        id:"2",
        title:'2'
    },
    {
        id:"3",
        title:'3'
    },
    {
        id:"4",
        title:'4'
    }
    
]
const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {},
  });
  
  export const categorySelector = createSelector(
    [(store) => store.category],
    (category) => category
  );
  
  export default categorySlice.reducer;