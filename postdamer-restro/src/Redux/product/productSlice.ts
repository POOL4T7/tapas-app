
const { createSlice, nanoid } = require('@reduxjs/toolkit')

const initialState={
    users:[]
}
const Slice = createSlice({
    name:'MenuProduct',
    initialState,
    reducers:{
        MenuProduct:(state:any,action:any)=>{
            console.log(action);
            const data ={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data);
        },
     
    }
});

export const {MenuProduct} =Slice.actions

export default Slice.reducer