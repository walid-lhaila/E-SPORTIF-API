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



    export const updateEvent = createAsyncThunk(
        'event/updated',
        async ({ eventId, eventData }, { rejectWithValue }) => {
            try {
    
                const response = await axiosInstance.put(`/api/update/${eventId}`, eventData, {
                    headers: {
                    'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });
        
                if (!response.data || !response.data.data) {
                    throw new Error("Invalid API response");
                }
    
                const updatedEvent = response.data.data;
                toast.success('Event Updated Successfully');
    
                return updatedEvent;
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed To Update Event');
                return rejectWithValue(error.response?.data || error.message);
            }
        }
    );



    export const deleteEvent = createAsyncThunk(
        'event/delete',
        async(eventId, {rejectWithValue}) => {
            try {
                const response = await axiosInstance.delete(`/api/delete/${eventId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                return response.data;
            } catch(error) {
                return rejectWithValue(error.response?.data);
            }
        }
    )

   

    const eventSlice = createSlice({
        name: 'event',
        initialState,
        reducers: {
            logout: (state) => {
                state.events = [];
            }
        },
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
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(getEvents.rejected, (state) => {
                state.status = 'failed';
                state.error = action.payload;
            })


            .addCase(updateEvent.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedEvent = action.payload;
                if (!updatedEvent) {
                    console.error("Updated event is undefined or malformed:", action.payload);
                    return;
                }            
                state.events = state.events.map((event) =>
                    event._id === updatedEvent._id ? updatedEvent : event
                );
            })
            .addCase(updateEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })


            .addCase(deleteEvent.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.status = 'succeded';
                state.events = state.events.filter((event) => event._id !== action.payload.eventId);
            })
            .addCase(deleteEvent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

        }
    })


    export default eventSlice.reducer;