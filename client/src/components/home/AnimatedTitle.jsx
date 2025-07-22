export function AnimatedTitle() {
  return (
    <div className="relative">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        <span className="inline-block animate-fade-in-up animation-delay-100">Student</span>{" "}
        <span className="inline-block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Record
        </span>{" "}
        <span className="inline-block animate-fade-in-up animation-delay-300">Management</span>
      </h1>
      <div className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-teal-100 rounded-full opacity-20 animate-pulse animation-delay-500"></div>
    </div>
  )
}
