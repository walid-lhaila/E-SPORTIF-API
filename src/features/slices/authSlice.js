import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosConfig"
import { toast } from "react-toastify";


const initialState = {
    user: null,
    token: localStorage.getItem('token'), 
    error: null,
    status: 'idle',
}


export const register = createAsyncThunk (
    'auth/register',
    async(userData) => {
        try {
            const response = await axiosInstance.post('/api/register', userData);
            toast.success('Account Created Successfully');
            return response.data
        } catch(error) {
            toast.error(error.response?.data?.message || 'Registration Failed');
            return rejectWithValue(error.response?.data || error.message);
        }
    }
)


export const login = createAsyncThunk (
    'auth/login',
    async(credentials) => {
        try {
            const response = await axiosInstance.post('/api/login', credentials);
            toast.success('Login Successfully');
            return response.data;
        } catch(error) {
            toast.error(error.response?.data?.message || 'Login failed!');
            return rejectWithValue(error.response.data || error.message);
        }
    }
);


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token'); 
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })


        .addCase(register.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.status = 'succeeded',
            state.user = action.payload.user;
        })
        .addCase(register.rejected, (state) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;