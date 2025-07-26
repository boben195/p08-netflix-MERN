import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true; 


export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,
    message: null,
    fechingUser: false,


    signup: async (username, email, password) => {
        set({ loading: true, message: null });
        try {
            const response = await axios.post("http://localhost:5000/api/signup", { username, email, password });
            set({ user: response.data.user, loading: false, message: response.data.message });
        } catch (error) {
            set({ loading: false, error: error.response ? error.response.data.message : "An error occurred" });
            throw error; 
        }
    }
}))