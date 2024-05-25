// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

const Client = React.lazy(() => import('./pages/client'));
const Login = React.lazy(() => import('./pages/login'));
const Admin = React.lazy(() => import('./pages/admin'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
