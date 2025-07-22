export function FeaturesSection() {
  const features = [
    {
      title: "Smart Analytics Dashboard",
      description:
        "Get comprehensive insights into student performance, attendance patterns, and academic trends with our advanced analytics engine.",
      icon: "📊",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Automated Report Generation",
      description:
        "Generate detailed academic reports, transcripts, and certificates automatically with customizable templates and formats.",
      icon: "📋",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "Real-time Communication",
      description:
        "Keep parents, students, and faculty connected with instant notifications, messaging, and announcement systems.",
      icon: "💬",
      gradient: "from-cyan-500 to-emerald-500",
    },
    {
      title: "Secure Data Management",
      description:
        "Enterprise-grade security with encrypted data storage, role-based access control, and comprehensive audit trails.",
      icon: "🔒",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Mobile-First Design",
      description:
        "Access your student records anywhere, anytime with our responsive design optimized for all devices and screen sizes.",
      icon: "📱",
      gradient: "from-teal-600 to-cyan-600",
    },
    {
      title: "Integration Ready",
      description:
        "Seamlessly integrate with existing school systems, LMS platforms, and third-party educational tools through our robust API.",
      icon: "🔗",
      gradient: "from-cyan-600 to-emerald-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Powerful Features for Modern Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover how our comprehensive suite of tools can transform your educational institution's record management
            and streamline administrative processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
