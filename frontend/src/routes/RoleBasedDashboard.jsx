import { Navigate } from "react-router-dom";

export default function RoleBasedDashboard() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // if contractor
  if (user.role === "contractor") {
    return <Navigate to="/contractor-dashboard" replace />;
  }

  // if client
  if (user.role === "client") {
    return <Navigate to="/client-dashboard" replace />;
  }

  // fallback
  return <Navigate to="/login" replace />;
}