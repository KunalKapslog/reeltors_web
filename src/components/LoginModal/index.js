import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import LoginPage from '../../pages/registration/login';
import SignUpPage from '../../pages/registration/signUp';
import './index.css';

const LoginModal = ({ open, onClose }) => {
  const [view, setView] = useState('login');
  const [animation, setAnimation] = useState('');

  const switchToSignup = () => {
    setAnimation('slide-out-left');
    setTimeout(() => {
      setView('signup');
      setAnimation('slide-in-right');
    }, 300);
  };

  const switchToLogin = () => {
    setAnimation('slide-out-right');
    setTimeout(() => {
      setView('login');
      setAnimation('slide-in-left');
    }, 300);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '90%', 
            sm: '80%', 
            md: '60%', 
            lg: '50%', 
          },
          bgcolor: 'white',
          boxShadow: 24,
          p: {
            xs: 2, 
            sm: 3,
            md: 4,
          },
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          className={`animated-view ${animation}`}
          sx={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {view === 'login' && (
            <LoginPage switchToSignup={switchToSignup} onClose={onClose} />
          )}
          {view === 'signup' && (
            <SignUpPage switchToLogin={switchToLogin} onClose={onClose} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
