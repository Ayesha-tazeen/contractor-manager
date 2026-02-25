import { useEffect, useState } from "react";
import { FaHome, FaInfoCircle, FaUser, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideNavbar";
import Carousal from "../components/Carousal";

export default function LandingPage() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Analytics",
      img: "https://picsum.photos/400/200?1",
      desc: "Powerful dashboards and reports"
    },
    {
      title: "Project Tracking",
      img: "https://picsum.photos/400/200?2",
      desc: "Manage projects easily"
    },
    {
      title: "Security",
      img: "https://picsum.photos/400/200?3",
      desc: "Your data is protected"
    },
    {
      title: "Automation",
      img: "https://picsum.photos/400/200?4",
      desc: "Smart workflows save time"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
<Sidebar/>
      {/* SIDEBAR
      <div className="w-16 bg-gray-800 text-white fixed h-full flex flex-col items-center py-6 space-y-10 shadow-xl">
        <FaHome className="text-xl cursor-pointer hover:text-yellow-400 transition" />
        <FaInfoCircle className="text-xl cursor-pointer hover:text-yellow-400 transition" />
        <FaUser className="text-xl cursor-pointer hover:text-yellow-400 transition" />
        <FaCog className="text-xl cursor-pointer hover:text-yellow-400 transition" />
      </div> */}

      {/* MAIN CONTENT */}
      <div className="ml-16 flex-1 flex flex-col items-center p-10 scroll-smooth">

        {/* HERO IMAGE */}
        <img
          src="https://cdn.cpdonline.co.uk/wp-content/uploads/2023/03/04151341/Everything-you-need-to-know-about-Construction-Site-Safety.jpg"
          alt="hero"
          className="rounded-3xl shadow-lg mb-8"
        />

        {/* BUTTONS */}
        <div className="flex gap-6 mb-14">
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-gray-800 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
          >
            Register
          </button>
        </div>

        {/* SERVICES TITLE */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Services We Offer
        </h2>

        {/* AUTO SLIDER CARD */}
        <div className="w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700">
          <img
            src={services[index].img}
            alt="service"
            className="w-full h-48 object-cover"
          />

          <div className="p-5 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {services[index].title}
            </h3>
            <p className="text-gray-600">
              {services[index].desc}
            </p>
          </div>

         
        </div>

        {/* EXTRA SPACE FOR SCROLL TEST */}
       
         <div>
            <Carousal/>
          </div>

      </div>
    </div>
  );
}