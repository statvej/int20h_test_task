import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "",
        email: "",
        picture: "", // Store profile picture if needed
    },
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.picture = action.payload.picture;
        },
        clearUser: (state) => {
            state.userName = "";
            state.email = "";
            state.picture = "";
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
