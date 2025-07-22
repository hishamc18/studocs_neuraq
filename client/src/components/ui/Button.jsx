export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 disabled:bg-emerald-300",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 disabled:bg-gray-50",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300",
    outline: "border border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
