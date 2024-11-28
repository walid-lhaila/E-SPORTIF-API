    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
    import axiosInstance from "../../config/axiosConfig"
    import { toast } from "react-toastify";



    const initialState = {
        status: 'idle',
        error: null,
        event: null,
    }

    const token = localStorage.getItem('token');
    export const createEvent = createAsyncThunk(
        'event/create',
        async(eventData) => {
            try  {
                const response = await axiosInstance.post('/api/createEvent', eventData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'multipart/form-data',

                        }
                    }
                );
                toast.success('Event Created Successfully');
                return response.data;
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed Create Event');
                return error.response?.data
            }
        }
    )




    const eventSlice = createSlice({
        name: 'event',
        initialState,

        extraReducers: (builder) => {
            builder

            .addCase(createEvent.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.event = action.payload.event;
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
        }
    })


    export default eventSlice.reducer;