import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-8 shadow-lg rounded w-80 bg-white"
      >
        <h2 className="text-2xl mb-6 text-center font-bold">Login</h2>

        <select
          name="role"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Role</option>
          <option value="contractor">Contractor</option>
          <option value="client">Client</option>
        </select>

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don't have account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}