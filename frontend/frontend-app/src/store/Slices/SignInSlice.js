import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    password: "",
    isTouched: {
        username: false,
        email: false,
        password: false,
    },
};

const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setIsTouched(state, action) {
            state.isTouched = action.payload;
        },
    }
});

export const { setUsername, setEmail, setPassword, setIsTouched } = signInSlice.actions;
export default signInSlice.reducer;