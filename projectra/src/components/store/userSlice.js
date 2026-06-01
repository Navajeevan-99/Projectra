import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice({
    name:'user',
    initialState:{
        name:'navajeevan',
        email:'ddsfsd'       
    },
    reducers:{
        setUserDetails:(state,action)=>{
            
            return {...state,name: action.payload.name,email: action.payload.email};
        }

    }
})
export const {setUserDetails} = userSlice.actions;
export default userSlice.reducer;
