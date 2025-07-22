export function AcademicTab() {
  const subjects = [
    { subject: "Mathematics", grade: "A+", score: 95, color: "emerald" },
    { subject: "English", grade: "A", score: 88, color: "blue" },
    { subject: "Science", grade: "A+", score: 92, color: "purple" },
    { subject: "History", grade: "B+", score: 85, color: "orange" },
    { subject: "Art", grade: "A+", score: 96, color: "pink" },
    { subject: "Physical Education", grade: "A", score: 90, color: "teal" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-gray-900">Academic Performance</h3>
      </div>

      {/* Subject Grades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-${subject.color}-50 to-${subject.color}-100 rounded-2xl p-6 border border-${subject.color}-200`}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">{subject.subject}</h4>
              <span className={`text-2xl font-bold text-${subject.color}-600`}>{subject.grade}</span>
            </div>
            <div className="w-full bg-white rounded-full h-2 mb-2">
              <div
                className={`bg-gradient-to-r from-${subject.color}-500 to-${subject.color}-600 h-2 rounded-full transition-all duration-1000`}
                style={{ width: `${subject.score}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">{subject.score}% Score</p>
          </div>
        ))}
      </div>
    </div>
  )
}
