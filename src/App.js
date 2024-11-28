import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import RouterComponent from './route/router';
import { Context } from './context';
import { setUser,clearUser } from './redux/features/users/userSlice';
import userApi from './api';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken"); 
      if (!token) {
        dispatch(clearUser());
        return;
      }

      try {
        const profileResponse = await userApi.getMyProfile(token);
        dispatch(setUser({ user: profileResponse.userDetails, token })); 
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        dispatch(clearUser()); 
      }
    };

    fetchProfile();
  }, [dispatch]);

  return (
    <Context>
      <CssBaseline />
      <RouterComponent />
    </Context>
  );
}

export default App;
