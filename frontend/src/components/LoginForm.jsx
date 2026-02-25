// import React, { useState } from "react";
// import API from "../services/api";
// import { Link, useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", formData);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data));

//       navigate("/dashboard");
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center w-full">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-gray-800/90 backdrop-blur-md border border-yellow-400/20 rounded-2xl shadow-2xl p-8 transition-all duration-300"
//       >
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">
//           Welcome Back
//         </h2>

//         {/* Email */}
//         <input
//           name="email"
//           type="email"
//           placeholder="Email Address"
//           onChange={handleChange}
//           className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//         />

//         {/* Password */}
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           className="w-full mb-5 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//         />

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg shadow-lg transition duration-300"
//         >
//           Log In
//         </button>

//         {/* Signup Link */}
//         <p className="text-gray-300 text-center mt-4 text-sm">
//           Don’t have an account?{" "}
//           <Link className="text-yellow-400 hover:underline" to="/signup">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800/90 backdrop-blur-md border border-yellow-400/20 rounded-2xl shadow-2xl p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">
          Welcome Back
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        {/* PASSWORD */}
        <div className="relative mb-2">
          <input
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-4 text-gray-400 cursor-pointer"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* ERROR */}
        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg shadow-lg flex justify-center items-center gap-2 disabled:opacity-60"
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="text-gray-300 text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link className="text-yellow-400 hover:underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}