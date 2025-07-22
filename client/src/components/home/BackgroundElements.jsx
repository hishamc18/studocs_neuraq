export function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float animation-delay-1000"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-emerald-400 rounded-full animate-bounce animation-delay-300"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-teal-400 rounded-full animate-bounce animation-delay-700"></div>
      <div className="absolute top-1/2 left-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce animation-delay-1200"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  )
}
