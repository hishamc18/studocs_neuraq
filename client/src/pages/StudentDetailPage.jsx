import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentById, updateStudentById, toggleStudentStatus } from "@/features/student/studentSlice";
import { EditStudentModal } from "../components/students/EditStudentModal";
import { LoadingSpinner } from "../components/ui/LoadingSpinner";
import { Button } from "../components/ui/Button";
import { StudentDetailHeader } from "../components/students/detail/StudentDetailHeader";
import { StudentHeroSection } from "../components/students/detail/StudentHeroSection";
import { TabNavigation } from "../components/students/detail/TabNavigation";
import { TabContent } from "../components/students/detail/TabContent";

export function StudentDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { singleStudent, isLoading, error } = useSelector((state) => state.students);

    const [activeTab, setActiveTab] = useState("overview");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchStudentById(id));
        }
    }, [dispatch, id]);

    const handleEdit = () => {
        setIsEditModalOpen(true);
    };

    const handleSaveEdit = async (studentId, data) => {
        await dispatch(updateStudentById({ id: studentId, data }));
        dispatch(fetchStudentById(id));
    };

    const handleToggleStatus = async () => {
        if (singleStudent) {
            await dispatch(toggleStudentStatus(singleStudent._id));
            dispatch(fetchStudentById(id));
        }
    };

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <LoadingSpinner size="lg" />
                    <p className="text-gray-600">Loading student details...</p>
                </div>
            </div>
        );
    }

    if (error || !singleStudent) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h3 className="text-xl font-semibold text-gray-900">Student Not Found</h3>
                    <p className="text-gray-600">{error || "The requested student could not be found."}</p>
                    <Button onClick={() => window.history.back()} variant="primary">
                        Back to Students
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
            {/* Header */}
            <StudentDetailHeader student={singleStudent} onEdit={handleEdit} onToggleStatus={handleToggleStatus} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Student Hero Section */}
                <StudentHeroSection student={singleStudent} />

                {/* Tabs Container */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8 overflow-scroll">
                    <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
                    <TabContent activeTab={activeTab} student={singleStudent} />
                </div>
            </div>

            {/* Edit Modal */}
            <EditStudentModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                student={singleStudent}
                onSave={handleSaveEdit}
            />
        </div>
    );
}
