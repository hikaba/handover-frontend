import './App.scss';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./components/Loading/Loading";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Header from "./components/Header/Header";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import AddPatientPage from './pages/AddPatientPage/AddPatientPage';
import PatientPage from './pages/PatientPage/PatientPage';
import LandingPage from './pages/LandingPage/LandingPage';
function AppContent() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      {currentUser ? <Header user={currentUser} /> : null}
      <Routes>
        <Route path="/" element={currentUser ? <LandingPage /> : <Navigate to="/login" />} />
        <Route path="/patients" element={currentUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!currentUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/addPatient" element={<AddPatientPage />}/>
        <Route path="/patient/:id/handover" element={<PatientPage />}/>
      </Routes> 
    </BrowserRouter>
  )
}
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )

}

export default App;
