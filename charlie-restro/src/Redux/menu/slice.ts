
const { createSlice, nanoid } = require('@reduxjs/toolkit')

const initialState = {
    users: []
  };
  
  const Slice = createSlice({
    name: 'MenuProduct',
    initialState,
    reducers: {
      MenuData: (state:any, action:any) => {
        const data ={
            id:nanoid(),
            name:action.payload
        }
        state.users = data;
      }
    }
  });

export const {MenuData} =Slice.actions

export default Slice.reducer