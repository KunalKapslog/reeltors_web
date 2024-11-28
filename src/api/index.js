import axios from 'axios';

const API_BASE_URL = 'https://api.rentlog.thekapslog.com/user-service/v0/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', 
      },
      
});

// Sign-up

const userApi = {
    signUp: async (userData) => {
        try {
            const response = await api.post('/sign-up', userData);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    // Google Login/Signup
    googleAuth: async (idToken) => {
        try {
            const response = await api.post('/auth/google', { idToken });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    // Apple Login
    appleAuth: async (idToken) => {
        try {
            const response = await api.post('/auth/apple', { idToken });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    // Email/Phone Login
    login: async (loginData) => {
        console.log('called')

        try {
            const response = await api.post('/login', loginData);
            console.log('response',response.data)
            return response.data;
            
        } catch (error) {
            throw error.response ? error.response.data : error;
        }
    },

    getMyProfile: async (authToken) => {
        try {
          const response = await api.get(
            "https://api.rentlog.thekapslog.com/user-service/v1/api/valid-user",
            {},
            {
              headers: {
                Authorization: authToken, 
              },
            }
          );
          return response.data;
        } catch (error) {
          console.error("Error fetching profile:", error);
          throw error.response ? error.response.data : error;
        }
      },
      
};

export default userApi;
