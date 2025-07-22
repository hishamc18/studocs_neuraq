import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import { StudentsPage } from "./pages/StudentsPage";
import { StudentDetailPage } from "./pages/StudentDetailPage";
import { NotFoundPage } from "./components/ui/NotFoundPage";

const App = () => {
    return (
        <Router>
            <Toaster />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/student/:id" element={<StudentDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;
