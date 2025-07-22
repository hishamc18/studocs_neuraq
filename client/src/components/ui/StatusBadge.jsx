export function StatusBadge({ isActive }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
        isActive
          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
          : "bg-red-100 text-red-800 border border-red-200"
      }`}
    >
      <span className={`w-2 h-2 rounded-full mr-1.5 ${isActive ? "bg-emerald-500" : "bg-red-500"}`}></span>
      {isActive ? "Active" : "Inactive"}
    </span>
  )
}
