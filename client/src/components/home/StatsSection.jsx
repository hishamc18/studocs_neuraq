export function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Students Managed", icon: "👥" },
    { number: "500+", label: "Educational Institutions", icon: "🏫" },
    { number: "99.9%", label: "System Uptime", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Trusted by Educational Leaders
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up animation-delay-200">
            Join thousands of institutions already using our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
