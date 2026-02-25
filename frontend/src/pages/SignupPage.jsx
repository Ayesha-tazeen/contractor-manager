import { useEffect, useState } from "react";
import SignupForm from "../components/SignupForm";
import SideNavbar from "../components/SideNavbar";

export default function SignupPage() {
  const images = [
    "/images/construction.jpg",
    "/images/construction3.jpg",
    "/images/construction1.jpg",
    "/images/construction4.jpg",
  ];

  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex bg-gray-900 min-h-screen">

      {/* Sidebar */}
      <SideNavbar />

      {/* Page Content */}
      <div className="flex-1 md:ml-16 p-4 md:p-8">

        <div className="flex flex-col md:flex-row gap-6">

          {/* FORM FIRST (mobile top) */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md border border-yellow-400/20">
              <SignupForm />
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="relative w-full md:w-1/2 h-64 md:h-[500px] overflow-hidden rounded-2xl">

            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* overlay text */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
                  Build Smart
                </h1>
                <p className="text-gray-200 text-sm md:text-lg">
                  Manage projects, reports, and progress seamlessly.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}