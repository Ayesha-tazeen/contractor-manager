import React from "react";

export default function Dashboard() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-xl">No user logged in</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">Welcome {user.name}</p>
      <p className="text-gray-600">Role: {user.role}</p>
    </div>
  );
}