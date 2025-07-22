import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate("/students");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Ready to Transform Your Institution?
        </h2>
        <p className="text-xl text-emerald-100 mb-8 animate-fade-in-up animation-delay-200">
          Join thousands of educational institutions already using our platform
          to streamline their student record management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={handleStartTrial}
            className="group px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Go to Dashboard
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">30 Days</div>
            <div className="text-emerald-100">Free Trial</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">No Setup</div>
            <div className="text-emerald-100">Fees Required</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-emerald-100">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
