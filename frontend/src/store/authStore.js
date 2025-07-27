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
    },

    fetchUser: async () => {
        set({ fetchingUser: true, error: null });
        try {
            const response = await axios.get(`${API_URL}/fetch-user`);
            set({ user: response.data.user, fetchingUser: false });
        } catch (error) {
            set({ fetchingUser: false, error: error.response ? error.response.data.message : "An error occurred" });
        }
    },

    logout: async () => {
        set({ loading: true, error: null, message: null });
        try {
            const response = await axios.post(`${API_URL}/logout`);
            const {message} = response.data;
            set({ user: null, loading: false, message, error: null });
            return message;
        } catch (error) {
            set({ loading: false, error: error.response ? error.response.data.message : "An error occurred" });
        }
    },


}))