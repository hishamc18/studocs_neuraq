import { formatDate } from "@/utils/dateUtils"

export function OverviewTab({ student }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Personal Information */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Full Name</span>
              <span className="text-sm font-semibold text-gray-900">{student.fullname}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Email Address</span>
              <span className="text-sm font-semibold text-gray-900">{student.email}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Date of Birth</span>
              <span className="text-sm font-semibold text-gray-900">{formatDate(student.DOB)}</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Class</span>
              <span className="text-sm font-semibold text-gray-900">{student.class}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h3 className="text-xl font-semibold text-gray-900">Academic Summary</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Overall Performance</span>
              <span className="text-2xl font-bold text-emerald-600">A+</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">92% Average Score</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-blue-700">Attendance</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12</div>
                <div className="text-sm text-purple-700">Subjects</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
            <h4 className="font-semibold text-gray-900 mb-2">Recent Achievements</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>🏆 Mathematics Excellence Award</li>
              <li>📚 Perfect Attendance (3 months)</li>
              <li>🎨 Art Competition Winner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
