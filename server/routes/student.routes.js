import express from "express";
import * as studentController from "../controllers/student.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.post("/", upload.single("profileImage"), studentController.createStudent);
router.put("/:id", upload.single("profileImage"), studentController.updateStudent);
router.get("/:id", studentController.getStudentById);
router.patch("/:id/toggle", studentController.toggleStudentActive);
router.delete("/:id", studentController.deleteStudent);

export default router;
