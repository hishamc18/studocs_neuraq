import { useState } from "react"

export function TabNavigation({ activeTab, onTabChange }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const tabs = [
    { id: "overview", label: "Overview", icon: "👤", shortLabel: "Info" },
    { id: "academic", label: "Academic", icon: "📚", shortLabel: "Grades" },
    { id: "contact", label: "Contact", icon: "📞", shortLabel: "Contact" },
    { id: "activity", label: "Activity", icon: "📊", shortLabel: "Activity" },
  ]

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  const handleTabSelect = (tabId) => {
    onTabChange(tabId)
    setIsDropdownOpen(false)
  }

  return (
    <div className="border-b border-gray-200">
      {/* Mobile Dropdown Navigation */}
      <div className="sm:hidden px-4 py-3">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{activeTabData?.icon}</span>
              <span className="font-medium text-gray-900">{activeTabData?.label}</span>
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                    activeTab === tab.id ? "bg-emerald-50 text-emerald-600" : "text-gray-700"
                  } ${tab.id === tabs[0].id ? "rounded-t-lg" : ""} ${
                    tab.id === tabs[tabs.length - 1].id ? "rounded-b-lg" : ""
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                  {activeTab === tab.id && (
                    <svg className="w-4 h-4 ml-auto text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Tab Navigation */}
      <nav className="hidden sm:flex">
        {/* Tablet View (sm to lg) */}
        <div className="sm:flex lg:hidden w-full">
          <div className="flex space-x-1 px-4 w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex-1 py-3 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <span className="text-base">{tab.icon}</span>
                  <span className="text-xs">{tab.shortLabel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop View (lg and up) */}
        <div className="hidden lg:flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-emerald-500 text-emerald-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && <div className="fixed inset-0 z-0 sm:hidden" onClick={() => setIsDropdownOpen(false)} />}
    </div>
  )
}
