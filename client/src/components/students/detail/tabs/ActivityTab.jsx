import { formatDate } from "@/utils/dateUtils"

export function ActivityTab() {
  const activities = [
    {
      date: "2024-01-15",
      activity: "Submitted Mathematics Assignment",
      type: "assignment",
      icon: "📝",
    },
    {
      date: "2024-01-14",
      activity: "Attended Parent-Teacher Conference",
      type: "meeting",
      icon: "👥",
    },
    {
      date: "2024-01-12",
      activity: "Received A+ in Science Test",
      type: "achievement",
      icon: "🏆",
    },
    {
      date: "2024-01-10",
      activity: "Joined Art Club",
      type: "activity",
      icon: "🎨",
    },
    {
      date: "2024-01-08",
      activity: "Perfect Attendance Week",
      type: "attendance",
      icon: "✅",
    },
  ]

  const getActivityTypeStyle = (type) => {
    switch (type) {
      case "achievement":
        return "bg-green-100 text-green-800"
      case "assignment":
        return "bg-blue-100 text-blue-800"
      case "meeting":
        return "bg-purple-100 text-purple-800"
      case "activity":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-gray-900">Recent Activity</h3>
      </div>

      {/* Activity Timeline */}
      <div className="space-y-6">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-xl">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{item.activity}</p>
              <p className="text-sm text-gray-500">{formatDate(item.date)}</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getActivityTypeStyle(item.type)}`}>
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
