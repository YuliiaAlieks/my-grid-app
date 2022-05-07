import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FetchUsersApiResponse, NormalizedUser } from "./types";
import { buildQuery, normalizeUsers } from "../../utils/utils";
import { baseUrl } from "../../utils/config";


type FetchUsersParams = {
    limit: number,
    page: number,
    search: string
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (params: FetchUsersParams, { rejectWithValue }) => {
        const query = buildQuery(params);
        try {
            const response = await fetch(`${baseUrl}/api/users${query}`)
                .then(res => res.json());
            return response;
        }
        catch (err) {
            console.log("🧚 ~ err", err)
            return rejectWithValue(err);
        }
    }
);


type UsersState = {
    users: NormalizedUser[],
    status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: UsersState = {
    users: [],
    status: 'idle'
}


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetUsers: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<FetchUsersApiResponse>) => {
                state.users = normalizeUsers(action.payload.results);
                state.status = 'success';
            })
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.rejected, (state) => {
                console.log('asd')
                state.status = "error";
            })
    }
});



export const { resetUsers } = usersSlice.actions;

export default usersSlice.reducer;






