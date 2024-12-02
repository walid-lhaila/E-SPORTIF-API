import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosConfig";
import { toast } from "react-toastify";





const initialState = {
    status: 'idle',
    error: null,
    participants: [],
}



const token = localStorage.getItem('token');


export const addParticipants = createAsyncThunk(
    'participants/addParticipants',
    async({eventId, participants}) => {
        try {
            const response = await axiosInstance.post(`/api/event/${eventId}/participants`, {participants},{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success('Participant Added Successfully');
            return response.data.event;
        } catch(error) {
            toast.error(error.response?.data?.message || 'Failed Add A New Participant')
            return error.response.data; 
        }
    }
)

export const getAllParticipants = createAsyncThunk(
    'event/getAllParticipants',
    async(eventId, {rejectWithValue}) => {
        try  {
            const response = await axiosInstance.get(`/api/${eventId}/getAllParticipants`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data.participants;
        } catch(error) {
            return rejectWithValue(error.response?.data.message || error.message);
        }
    }
)


export const deleteParticipants = createAsyncThunk(
    'event/deleteParticipants',
    async({ eventId, participants }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.delete(`/api/delete/${eventId}/participants`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: { participants },
            });
            toast.success("Participants Deleted Successfully");
            return response.data.event;
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to delete participant(s)");
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);


const participantsSlice = createSlice ({
    name: 'participants',
    initialState,
    extraReducers: (builder) => {
        builder

        .addCase(addParticipants.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(addParticipants.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.participants = action.payload.participants;
        })
        .addCase(addParticipants.rejected, (state) => {
            state.status= 'failed';
            state.error = action.payload;
        })

        

        .addCase(getAllParticipants.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(getAllParticipants.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.participants = action.payload;
        })
        .addCase(getAllParticipants.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })



        .addCase(deleteParticipants.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(deleteParticipants.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const updatedEvent = action.payload;
            if (updatedEvent && updatedEvent.participants) {
                state.participants = updatedEvent.participants;
            }
        })
        .addCase(deleteParticipants.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }

})


export default participantsSlice.reducer;