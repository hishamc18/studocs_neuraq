import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"

export function StudentDetailHeader({ student, onEdit, onToggleStatus }) {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate("/students")
  }

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Mobile Layout */}
        <div className="flex flex-col space-y-4 sm:hidden">
          {/* Top Row - Back button and title */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={handleBack}
              className="flex items-center space-x-2 bg-transparent px-3 py-2"
              size="sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back</span>
            </Button>
            <div className="h-5 w-px bg-gray-300"></div>
            <h1 className="text-lg font-bold text-gray-900 truncate">Student Details</h1>
          </div>

          {/* Bottom Row - Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="secondary" onClick={onToggleStatus} size="sm" className="flex-1 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              {student?.isActive ? "Deactivate" : "Activate"}
            </Button>
            <Button variant="primary" onClick={onEdit} size="sm" className="flex-1 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Edit
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={handleBack} className="flex items-center space-x-2 bg-transparent">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Students</span>
            </Button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Student Details</h1>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="secondary" onClick={onToggleStatus}>
              <svg className="w-4 h-4 mr-2 sm:mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
              <span className="hidden sm:inline lg:inline">{student?.isActive ? "Deactivate" : "Activate"}</span>
              <span className="sm:hidden">Toggle</span>
            </Button>
            <Button variant="primary" onClick={onEdit}>
              <svg className="w-4 h-4 mr-2 sm:mr-1 lg:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span className="hidden sm:inline lg:inline">Edit Student</span>
              <span className="sm:hidden">Edit</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
