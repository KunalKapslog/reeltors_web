import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/404Page';

const LandingPage = lazy(() => import('../pages/landingPage'));
const LoginPage = lazy(() => import('../pages/registration/login'));
const SignUpPage = lazy(() => import('../pages/registration/signUp'));



const RouterComponent = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;
