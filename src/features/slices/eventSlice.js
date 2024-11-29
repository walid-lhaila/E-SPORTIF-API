    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
    import axiosInstance from "../../config/axiosConfig"
    import { toast } from "react-toastify";



    const initialState = {
        status: 'idle',
        error: null,
        events: [],
        participants: [],
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


    export const getEvents = createAsyncThunk(
        'event/getAll',
        async(_, {rejectWithValue}) => {
            try {
                if(!token) {
                    throw new Error('No Token Found');
                }
                const response = await axiosInstance.get('/api/getEvents',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    }
                );
                return response.data.events
            } catch(error) {
                return rejectWithValue(error.response?.data?.message || error.message);
            }
        }
    )


   



    const eventSlice = createSlice({
        name: 'event',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder

            .addCase(createEvent.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.events = [action.payload.event, ...state.events];
            })
            .addCase(createEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })


            .addCase(getEvents.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.state = 'succeeded';
                state.events = action.payload;
            })
            .addCase(getEvents.rejected, (state) => {
                state.status = 'failed';
                state.error = action.payload;
            })

        }
    })


    export default eventSlice.reducer;