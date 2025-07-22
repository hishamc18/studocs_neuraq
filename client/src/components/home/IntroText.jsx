export function IntroText() {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up animation-delay-400">
        Streamline your educational institution with our comprehensive student record management system. Track academic
        progress, manage enrollments, and maintain detailed student profiles with ease.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
        <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Academic Tracking</h3>
          <p className="text-sm text-gray-600">Monitor grades and progress</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Student Profiles</h3>
          <p className="text-sm text-gray-600">Comprehensive student data</p>
        </div>

        <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Analytics</h3>
          <p className="text-sm text-gray-600">Insights and reporting</p>
        </div>
      </div>
    </div>
  )
}
