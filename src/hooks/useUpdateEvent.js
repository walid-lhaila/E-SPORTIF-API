import { toast } from "react-toastify";
import axiosInstance from "../config/axiosConfig";

export const updateEvent =
    async ( eventId, formData ) => {
        
        try {
            const token = localStorage.getItem('token');
            const response = await axiosInstance.put(`/api/update/${eventId}`,  formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
                
            });
            toast.success('Event Updated Successfully');
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to Update Event');
            return error.response?.data;
        }
    };