
const { createSlice, nanoid } = require('@reduxjs/toolkit')

const initialState={
    users:[]
}
const Slice = createSlice({
    name:'Category',
    initialState,
    reducers:{
      Category:(state:any,action:any)=>{
            const data ={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data);
        },
     
    }
});

export const {Category} =Slice.actions

export default Slice.reducer