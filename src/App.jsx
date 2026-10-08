
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import React from "react";  
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    }
  />
     
</Routes>

    
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
      />

    </BrowserRouter>
  );
}


export default App;



