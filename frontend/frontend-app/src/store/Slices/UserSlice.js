import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userName: "",
        email: "",
        picture: "",
        isAuthenticated: false,
        authMethod: "", // "google" or "email"
        likedGames: [], // Array of liked quizzes
    },
    reducers: {
        setUser: (state, action) => {
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.picture = action.payload.picture || "";
            state.isAuthenticated = true;
            state.authMethod = action.payload.authMethod;
        },
        clearUser: (state) => {
            state.userName = "";
            state.email = "";
            state.picture = "";
            state.isAuthenticated = false;
            state.authMethod = "";
            state.likedGames = [];
        },
        toggleLikeGame: (state, action) => {
            const gameId = action.payload;
            if (state.likedGames.includes(gameId)) {
                state.likedGames = state.likedGames.filter(id => id !== gameId);
            } else {
                state.likedGames.push(gameId);
            }
        }
    },
});

export const { setUser, clearUser, toggleLikeGame } = userSlice.actions;
export default userSlice.reducer;
