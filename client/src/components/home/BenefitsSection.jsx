export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Student Record Management System?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform your educational institution with a system designed by educators, for educators. Experience the
              difference that thoughtful design and powerful functionality can make.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Administrative Workload</h3>
                  <p className="text-gray-600">
                    Automate repetitive tasks and free up valuable time for what matters most - education.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Improve Data Accuracy</h3>
                  <p className="text-gray-600">
                    Eliminate manual errors with automated data validation and real-time synchronization.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Communication</h3>
                  <p className="text-gray-600">
                    Foster better relationships between students, parents, and faculty with integrated communication
                    tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative z-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Goal Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor academic objectives</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Progress Reports</h4>
                  <p className="text-sm text-gray-600">Detailed performance analytics</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🔔</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Alerts</h4>
                  <p className="text-sm text-gray-600">Automated notifications</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
                  <p className="text-sm text-gray-600">Enterprise-grade protection</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse animation-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
