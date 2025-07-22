import { useNavigate } from "react-router-dom";

export function DashboardButton() {
  const navigate = useNavigate();
  
  const handleDashboardClick = () => {
    navigate("/students");
  };

  return (
    <div className="mt-12 animate-fade-in-up animation-delay-800">
      <button
        onClick={handleDashboardClick}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="relative z-10">Go to Dashboard</span>
        <svg
          className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}
