import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaChartBar,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // get stored user
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const token = localStorage.getItem("token");

  // ROLE BASED MENU
  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },

    ...(user?.role === "contractor"
      ? [{ name: "Projects", icon: <FaProjectDiagram />, path: "/projects" }]
      : []),

    ...(user?.role === "client"
      ? [{ name: "Reports", icon: <FaChartBar />, path: "/reports" }]
      : []),

    { name: "Profile", icon: <FaUserCircle />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  // navigation handler
  const handleNav = (path) => {
    if (!token) {
      navigate("/login");
      return;
    }
    navigate(path);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 transition-all duration-300
        ${isHovered ? "w-56" : "w-16"}
        md:block hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col mt-6 space-y-6">

          {/* USER ROW */}
          <div
            onClick={() => handleNav("/profile")}
            className="flex items-center space-x-4 px-4 py-3 text-yellow-400 border-b border-gray-700 cursor-pointer"
          >
            <div className="text-xl">
              <FaUserCircle />
            </div>

            <span
              className={`whitespace-nowrap transition-all duration-300 overflow-hidden font-semibold ${
                isHovered ? "opacity-100" : "opacity-0 w-0"
              }`}
            >
              {user ? user.name || user.email : "Login"}
            </span>
          </div>

          {/* MENU */}
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNav(item.path)}
              className="flex items-center space-x-4 px-4 py-3 text-yellow-400 hover:bg-gray-700 cursor-pointer transition"
            >
              <div className="text-xl">{item.icon}</div>

              <span
                className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${
                  isHovered ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-800 flex justify-around items-center md:hidden z-50">
        {menu.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNav(item.path)}
            className="text-yellow-400 text-xl hover:scale-110 transition cursor-pointer"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </>
  );
}