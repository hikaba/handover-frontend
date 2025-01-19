import './App.scss';
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./components/Loading/Loading";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Header from "./components/Header/Header";
function AppContent() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Header user={currentUser} />
      {/* {currentUser ? <Header user={currentUser} /> : null} */}
      <Routes>
        <Route path="/" element={currentUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!currentUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!currentUser ? <SignUpPage /> : <Navigate to="/" />} />

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

export default App
