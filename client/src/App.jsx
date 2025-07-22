import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";
import { StudentsPage } from "./pages/StudentsPage";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
