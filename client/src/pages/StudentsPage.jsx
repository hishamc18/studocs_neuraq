import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchAllStudents,
  updateStudentById,
  deleteStudentById,
  toggleStudentStatus,
  createNewStudent,
} from "../features/student/studentSlice"
import { StudentsHeader } from "../components/students/StudentsHeader"
import { SearchAndSort } from "../components/students/SearchAndSort"
import { StudentsGrid } from "../components/students/StudentsGrid"
import { EditStudentModal } from "../components/students/EditStudentModal"
import { AddStudentModal } from "../components/students/AddStudentModal"
import { useStudentFilter } from "../hooks/useStudentFilter"

export function StudentsPage() {
  const dispatch = useDispatch()
  const { students, isLoading, error } = useSelector((state) => state.students)

  const [editingStudent, setEditingStudent] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const { filteredStudents, searchTerm, sortOption, handleSearch, handleSort, filteredCount } =
    useStudentFilter(students)

  useEffect(() => {
    dispatch(fetchAllStudents())
  }, [dispatch])

  const handleEdit = (student) => {
    setEditingStudent(student)
    setIsEditModalOpen(true)
  }

  const handleSaveEdit = async (id, data) => {
    await dispatch(updateStudentById({ id, data }))
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await dispatch(deleteStudentById(id))
    }
  }

  const handleToggleStatus = async (id) => {
    await dispatch(toggleStudentStatus(id))
  }

  const handleAddStudent = () => {
    setIsAddModalOpen(true)
  }

  const handleSaveNewStudent = async (formData) => {
    await dispatch(createNewStudent(formData))
  }

  const activeStudents = students.filter((student) => student.isActive).length

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => dispatch(fetchAllStudents())}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <StudentsHeader
          totalStudents={students.length}
          activeStudents={activeStudents}
          onAddStudent={handleAddStudent}
        />

        <SearchAndSort
          onSearch={handleSearch}
          onSort={handleSort}
          totalStudents={students.length}
          filteredCount={filteredCount}
        />

        <StudentsGrid
          students={filteredStudents}
          isLoading={isLoading}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
          searchTerm={searchTerm}
        />

        {/* Edit Student Modal */}
        <EditStudentModal
          isOpen={isEditModalOpen}
          onClose={() => {
            setIsEditModalOpen(false)
            setEditingStudent(null)
          }}
          student={editingStudent}
          onSave={handleSaveEdit}
        />

        {/* Add Student Modal */}
        <AddStudentModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleSaveNewStudent}
        />
      </div>
    </div>
  )
}
