import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userSlice = createSlice({
    name: 'user',
    initialState:"",
    reducers: {
        userName: (state,actions) => {
            return actions.payload
        }
    }
})

export const {userName} = userSlice.actions;

export default userSlice.reducer;