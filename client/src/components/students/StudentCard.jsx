"use client"

import { StatusBadge } from "../ui/StatusBadge"
import { Button } from "../ui/Button"
import { calculateAge } from "../../utils/dateUtils"

export function StudentCard({ student, onEdit, onDelete, onToggleStatus }) {
  const age = calculateAge(student.DOB)

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden animate-fade-in-up">
      {/* Header with Profile Image */}
      <div className="relative bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="relative">
            {student.profileImage ? (
              <img
                src={student.profileImage || "/placeholder.svg"}
                alt={student.fullname}
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">
                  {student.fullname?.charAt(0)?.toUpperCase() || "S"}
                </span>
              </div>
            )}
            <div
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                student.isActive ? "bg-green-400" : "bg-red-400"
              }`}
            ></div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold truncate">{student.fullname || "Unknown Student"}</h3>
            <p className="text-emerald-100 text-sm">{student.class || "No Class Assigned"}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Student Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Email:</span>
            <span className="text-sm text-gray-900 truncate ml-2">{student.email || "No email"}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Age:</span>
            <span className="text-sm text-gray-900">{age} years</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Status:</span>
            <StatusBadge isActive={student.isActive} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-4 border-t border-gray-100">
          <Button variant="outline" size="sm" onClick={() => onEdit(student)} className="flex-1">
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

          <Button variant="secondary" size="sm" onClick={() => onToggleStatus(student._id)} className="flex-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            Toggle
          </Button>

          <Button variant="danger" size="sm" onClick={() => onDelete(student._id)} className="flex-1">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
