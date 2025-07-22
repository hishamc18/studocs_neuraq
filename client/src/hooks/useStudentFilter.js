import { useState, useMemo } from "react"
import { calculateAge } from "../utils/dateUtils"

export function useStudentFilter(students) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("name-asc")

  const filteredAndSortedStudents = useMemo(() => {
    if (!students) return []

    // First, filter by search term
    const filtered = students.filter((student) => student.fullname?.toLowerCase().includes(searchTerm.toLowerCase()))

    // Then, sort based on the selected option
    const sorted = [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return (a.fullname || "").localeCompare(b.fullname || "")
        case "name-desc":
          return (b.fullname || "").localeCompare(a.fullname || "")
        case "age-asc":
          return calculateAge(a.DOB) - calculateAge(b.DOB)
        case "age-desc":
          return calculateAge(b.DOB) - calculateAge(a.DOB)
        case "class-asc":
          return (a.class || "").localeCompare(b.class || "")
        case "status-active":
          // Active students first, then sort by name
          if (a.isActive === b.isActive) {
            return (a.fullname || "").localeCompare(b.fullname || "")
          }
          return b.isActive - a.isActive
        default:
          return 0
      }
    })

    return sorted
  }, [students, searchTerm, sortOption])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleSort = (option) => {
    setSortOption(option)
  }

  return {
    filteredStudents: filteredAndSortedStudents,
    searchTerm,
    sortOption,
    handleSearch,
    handleSort,
    filteredCount: filteredAndSortedStudents.length,
  }
}
