import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true; 

const API_URL = "http://localhost:5000/api";


export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    message: null,
    fechingUser: false,


    signup: async (name, email, password) => {
        set({ loading: true, message: null });
        try {
            const response = await axios.post(`${API_URL}/signup`, { name, email, password });
            set({ user: response.data.user, loading: false, message: response.data.message });
        } catch (error) {
            set({ loading: false, error: error.response ? error.response.data.message : "An error occurred" });
            throw error; 
        }
    },

    login: async (name, password) => {
        set({ loading: true, error: null, message: null });
        try {
            const response = await axios.post(`${API_URL}/login`, { name, password });
            set({ user: response.data.user, loading: false });
        } catch (error) {
            set({ loading: false, error: error.response ? error.response.data.message : "An error occurred" });
            throw error; 
        }
    }


}))