import axios from "@/api/axiosInstance";

export const getAllStudents = async () => {
  const res = await axios.get("/students");
  return res.data;
};

export const getStudentById = async (id) => {
  const res = await axios.get(`/students/${id}`);
  return res.data;
};

export const createStudent = async (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  const res = await axios.post("/students", formData);
  return res.data;
};

export const updateStudent = async (id, data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  const res = await axios.put(`/students/${id}`, formData);
  return res.data;
};

export const toggleStudentActive = async (id) => {
  const res = await axios.patch(`/students/${id}/toggle`);
  return res.data;
};

export const deleteStudent = async (id) => {
  const res = await axios.delete(`/students/${id}`);
  return res.data;
};
