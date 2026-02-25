import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaUserTag, FaEdit, FaSignOutAlt } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        No user data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="relative w-full max-w-3xl bg-gray-800 text-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-32 relative">
          <div className="absolute -bottom-12 left-6 text-gray-800 text-7xl bg-white rounded-full p-2 shadow-lg">
            <FaUserCircle />
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-4 right-4 bg-gray-900 text-yellow-400 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-700 transition"
          >
            <FaEdit />
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Body */}
        <div className="pt-16 pb-10 px-8 space-y-6">

          {/* Name */}
          <div className="flex items-center gap-4">
            <FaUserTag className="text-yellow-400 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-lg font-semibold">
                {user.name || "Not Provided"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-yellow-400 text-xl" />
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-lg font-semibold capitalize">{user.role}</p>
            </div>
          </div>

        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>
    </div>
  );
}