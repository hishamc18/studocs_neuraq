import { StatusBadge } from "@/components/ui/StatusBadge"
import { calculateAge } from "@/utils/dateUtils"

export function StudentHeroSection({ student }) {
  const age = calculateAge(student.DOB)

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8">
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-8 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Profile Image */}
          <div className="relative">
            {student.profileImage ? (
              <img
                src={student.profileImage || "/placeholder.svg"}
                alt={student.fullname}
                className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-2xl bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-emerald-600">
                  {student.fullname?.charAt(0)?.toUpperCase() || "S"}
                </span>
              </div>
            )}
            <div
              className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white shadow-lg ${
                student.isActive ? "bg-green-400" : "bg-red-400"
              }`}
            ></div>
          </div>

          {/* Student Info */}
          <div className="flex-1 text-center lg:text-left text-white">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">{student.fullname}</h1>
            <p className="text-xl text-emerald-100 mb-4">{student.class}</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">Age: {age} years</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <StatusBadge isActive={student.isActive} />
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-medium">ID: {student?._id}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-sm text-emerald-100">Grade</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-emerald-100">Attendance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-emerald-100">Subjects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
