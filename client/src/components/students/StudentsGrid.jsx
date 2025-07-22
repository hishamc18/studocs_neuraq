import { StudentCard } from "./StudentCard";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { motion } from "framer-motion";

// animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function StudentsGrid({
  students,
  isLoading,
  onEdit,
  onDelete,
  onToggleStatus,
  searchTerm,
}) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-6">
        <div className="relative">
          <LoadingSpinner size="lg" />
          <div className="absolute inset-0 animate-ping">
            <LoadingSpinner size="lg" />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Loading Students
          </h3>
          <p className="text-gray-600">
            Please wait while we fetch the student records...
          </p>
        </div>
      </div>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div className="text-center py-20 animate-fade-in-up">
        <div className="relative inline-block mb-8">
          <div className="text-8xl mb-4 animate-bounce">
            {searchTerm ? "🔍" : "📚"}
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full animate-ping"></div>
        </div>
        <div className="space-y-4 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {searchTerm ? "No Students Found" : "No Students Available"}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {searchTerm
              ? `No students match "${searchTerm}". Try adjusting your search terms.`
              : "Your student database is empty. Start building your educational community by adding your first student record."}
          </p>
          {searchTerm && (
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 text-emerald-600 font-medium">
                <svg
                  className="w-5 h-5"
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
                <span>Try a different search term</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Grid Header */}
      <div className="flex items-center justify-between animate-fade-in-up">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {searchTerm ? "Search Results" : "All Students"}
            </h2>
            <p className="text-sm text-gray-600">
              {students.length} student{students.length !== 1 ? "s" : ""}
              {searchTerm ? ` matching "${searchTerm}"` : " found"}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Live results</span>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {students.map((student, index) => (
          <motion.div key={student._id} variants={cardVariants}>
            <StudentCard
              student={student}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
