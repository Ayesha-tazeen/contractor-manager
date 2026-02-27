import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import RoleBasedDashboard from "./routes/RoleBasedDashboard";
import Profile from "./pages/ProfilePage";
import ContractorDashboard from "./pages/ContractorDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
        


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
            <RoleBasedDashboard />
            </ProtectedRoute>
          }
        />
         <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}