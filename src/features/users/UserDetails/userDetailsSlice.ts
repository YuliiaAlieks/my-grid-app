import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { baseUrl } from "../../../utils/config";
import { normalizeUserDetails, normalizeUsers } from "../../../utils/utils";
import { FetchUserDetailsApiResponse, NormalizedUserDetails } from "../types";

type FetchUserId = string;

export const fetchUserDetails = createAsyncThunk(
    'users/fetchUserDetails',
    async (params: FetchUserId, { rejectWithValue }) => {
        try {
            const response = await fetch(`${baseUrl}/api/users/${params}`)
                .then(res => res.json());
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

type UserDetailsState = {
    userDetails: NormalizedUserDetails,
    status: 'idle' | 'loading' | 'success' | 'error'
}

const initialState: UserDetailsState = {
    userDetails: {
        gender: 'n/a',
        name: 'n/a',
        email: 'n/a',
        username: 'n/a',
        registerDate: 'n/a',
        phone: 'n/a',
        image: 'n/a',
        nationality: 'n/a',
        address: 'n/a',
        age: 0
    },
    status: 'idle'
}


export const userDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.fulfilled, (state, action: PayloadAction<FetchUserDetailsApiResponse>) => {
                state.userDetails = normalizeUserDetails(action.payload);
                state.status = 'success';                
            })
            .addCase(fetchUserDetails.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUserDetails.rejected, (state) => {
                console.log('asd')
                state.status = "error";
            })
    }

});

export default userDetailsSlice.reducer;