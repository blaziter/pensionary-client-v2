import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLogged: boolean;
}

const initialState: AuthState = {
    isLogged: true,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload;
        },
    },
});

export const { setLogged } = authSlice.actions;

export default authSlice.reducer;
