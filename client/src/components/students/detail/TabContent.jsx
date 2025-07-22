import { OverviewTab } from "./tabs/OverviewTab"
import { AcademicTab } from "./tabs/AcademicTab"
import { ContactTab } from "./tabs/ContactTab"
import { ActivityTab } from "./tabs/ActivityTab"

export function TabContent({ activeTab, student }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab student={student} />
      case "academic":
        return <AcademicTab />
      case "contact":
        return <ContactTab student={student} />
      case "activity":
        return <ActivityTab />
      default:
        return <OverviewTab student={student} />
    }
  }

  return <div className="p-6">{renderTabContent()}</div>
}
