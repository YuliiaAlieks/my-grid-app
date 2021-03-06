import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import usersReducer from './features/users/usersSlice';
import userDetailsReducer from './features/users/UserDetails/userDetailsSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        userDetails: userDetailsReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>()