import Student from "../models/student.js";
import CustomError from "../utils/customError.js";
import cloudinary from "../utils/cloudinary.js";

export const getAllStudents = async () => {
  return await Student.find();
};

export const getStudentById = async (id) => {
  const student = await Student.findById(id);
  if (!student) throw new CustomError("Student not found", 404);
  return student;
};

export const addStudent = async (data) => {
  return await Student.create(data);
};

export const updateStudent = async (id, data) => {
  const student = await Student.findByIdAndUpdate(id, data, { new: true });
  if (!student) throw new CustomError("Student not found", 404);
  return student;
};


export const toggleActive = async (id) => {
  const student = await Student.findById(id);
  if (!student) throw new CustomError("Student not found", 404);
  student.isActive = !student.isActive;
  await student.save();
  return student;
};


export const deleteStudent = async (id) => {
  const student = await Student.findByIdAndDelete(id);
  if (!student) throw new CustomError("Student not found", 404);
  return student;
};