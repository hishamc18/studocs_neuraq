import * as studentService from "../services/student.service.js";

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.json(student);
  } catch (err) {
    next(err);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      profileImage: req.file?.path,
    };

    const student = await studentService.addStudent(data);
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

export const updateStudent = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      ...(req.file && { profileImage: req.file.path }),
    };

    const student = await studentService.updateStudent(req.params.id, data);
    res.json(student);
  } catch (err) {
    next(err);
  }
};


export const toggleStudentActive = async (req, res, next) => {
  try {
    const student = await studentService.toggleActive(req.params.id);
    res.json(student);
  } catch (err) {
    next(err);
  }
};

export const deleteStudent = async (req, res, next) => {
  try {
    const student = await studentService.deleteStudent(req.params.id);
    res.json({ success: true, message: "Student deleted", student });
  } catch (err) {
    next(err);
  }
};
