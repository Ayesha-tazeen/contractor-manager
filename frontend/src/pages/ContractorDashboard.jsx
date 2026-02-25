import { useNavigate } from "react-router-dom";
import {
  FaProjectDiagram,
  FaChartBar,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function ContractorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:ml-16 mt-16 md:mt-0">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Contractor Dashboard
      </h1>

      {/* CARDS CONTAINER */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* PROJECTS CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaProjectDiagram className="text-3xl text-yellow-400" />
            <h2 className="text-xl font-semibold text-gray-800">
              Projects
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            View and manage all ongoing and completed projects.
          </p>

          <button
            onClick={() => navigate("/projects")}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            View Projects
          </button>
        </div>

        {/* REPORTS CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaChartBar className="text-3xl text-yellow-400" />
            <h2 className="text-xl font-semibold text-gray-800">
              Reports
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Access project reports, updates, and documents.
          </p>

          <button
            onClick={() => navigate("/reports")}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            View Reports
          </button>
        </div>

        {/* EXPENDITURE CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition">
          <div className="flex items-center gap-4 mb-4">
            <FaMoneyBillWave className="text-3xl text-yellow-400" />
            <h2 className="text-xl font-semibold text-gray-800">
              Material Expenditure
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Track expenses and material costs for projects.
          </p>

          <button
            onClick={() => navigate("/expenses")}
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            View Expenses
          </button>
        </div>

      </div>
    </div>
  );
}