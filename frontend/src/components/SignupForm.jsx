// import React, { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// export default function SignupForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/signup", formData);
//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert("Signup failed.");
//     }
//   };

//   return (
//     <>
 
//   <div className="flex items-center justify-center w-full">
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-md bg-gray-800/90 backdrop-blur-md border border-yellow-400/20 rounded-2xl shadow-2xl p-8 transition-all duration-300"
//     >
//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">
//         Create Account
//       </h2>

//       {/* Name */}
//       <input
//         name="name"
//         type="text"
//         placeholder="Full Name"
//         onChange={handleChange}
//         className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//       />

//       {/* Email */}
//       <input
//         name="email"
//         type="email"
//         placeholder="Email Address"
//         onChange={handleChange}
//         className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//       />

//       {/* Role */}
//       <select
//         name="role"
//         onChange={handleChange}
//         className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//       >
//         <option value="">Select Role</option>
//         <option value="client">Client</option>
//         <option value="contractor">Contractor</option>
//       </select>

//       {/* Password */}
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//         className="w-full mb-5 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
//       />

//       {/* Button */}
//       <button
//         type="submit"
//         className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg shadow-lg transition duration-300"
//       >
//         Sign Up
//       </button>

//       {/* Login Link */}
//       <p className="text-gray-300 text-center mt-4 text-sm">
//         Already have an account?{" "}
//         <Link className="text-yellow-400 hover:underline" to="/login">
//           Login
//         </Link>
//       </p>
//     </form>
//   </div>
//     </>
//   );
// }
import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

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
      await API.post("/auth/signup", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
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
          Create Account
        </h2>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none"
        >
          <option value="">Select Role</option>
          <option value="client">Client</option>
          <option value="contractor">Contractor</option>
        </select>

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

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 rounded-lg shadow-lg flex justify-center items-center gap-2 disabled:opacity-60"
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          )}
          {loading ? "Creating..." : "Sign Up"}
        </button>

        <p className="text-gray-300 text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link className="text-yellow-400 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}