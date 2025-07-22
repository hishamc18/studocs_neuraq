import { useNavigate } from "react-router-dom"
import { Button } from "./Button"

export function NotFoundPage({
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or has been moved.",
  showHomeButton = true,
  showBackButton = true,
  icon = "🔍",
}) {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="text-8xl mb-4 animate-bounce">{icon}</div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Error Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600 leading-relaxed">{message}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {showBackButton && (
              <Button onClick={handleGoBack} variant="outline" className="group bg-transparent">
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Go Back
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
