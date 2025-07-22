import { useState } from "react"

export function SearchAndSort({ onSearch, onSort, totalStudents, filteredCount }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("name-asc")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleSortChange = (e) => {
    const value = e.target.value
    setSortOption(value)
    onSort(value)
  }

  const clearSearch = () => {
    setSearchTerm("")
    onSearch("")
  }

  const sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "age-asc", label: "Age (Youngest First)" },
    { value: "age-desc", label: "Age (Oldest First)" },
    { value: "class-asc", label: "Class (A-Z)" },
    { value: "status-active", label: "Active Students First" },
  ]

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 animate-fade-in-up">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Search & Filter</h2>
              <p className="text-sm text-gray-600">
                {filteredCount !== totalStudents
                  ? `Showing ${filteredCount} of ${totalStudents} students`
                  : `${totalStudents} students available`}
              </p>
            </div>
          </div>

          {/* Results Counter */}
          {filteredCount !== totalStudents && (
            <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-2 rounded-full border border-emerald-200">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm font-medium text-emerald-700">{filteredCount} results</span>
            </div>
          )}
        </div>

        {/* Search and Sort Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Search Input */}
          <div className="lg:col-span-2 relative">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? "transform scale-105" : ""}`}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isSearchFocused ? "text-emerald-500" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search students by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full pl-12 pr-12 py-4 bg-gradient-to-r from-gray-50 to-emerald-50 border-2 rounded-2xl text-gray-900 placeholder-gray-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-100 ${
                  isSearchFocused ? "border-emerald-300 bg-white shadow-lg" : "border-gray-200 hover:border-gray-300"
                }`}
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="w-full appearance-none bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200 rounded-2xl px-4 py-4 pr-12 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 hover:border-gray-300 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button
            onClick={() => onSort("status-active")}
            className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              sortOption === "status-active"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700 border border-gray-200"
            }`}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            Active Only
          </button>

          <button
            onClick={() => onSort("age-asc")}
            className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              sortOption === "age-asc"
                ? "bg-blue-100 text-blue-800 border border-blue-200"
                : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
            }`}
          >
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
            Youngest First
          </button>

          <button
            onClick={() => onSort("age-desc")}
            className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              sortOption === "age-desc"
                ? "bg-purple-100 text-purple-800 border border-purple-200"
                : "bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-700 border border-gray-200"
            }`}
          >
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
            </svg>
            Oldest First
          </button>

          <button
            onClick={() => onSort("name-asc")}
            className={`inline-flex items-center px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
              sortOption === "name-asc"
                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                : "bg-gray-100 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200"
            }`}
          >
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
              />
            </svg>
            A-Z
          </button>
        </div>
      </div>
    </div>
  )
}
