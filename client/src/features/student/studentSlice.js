import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as studentService from "./studentService";
import { toast } from "sonner";

const initialState = {
  students: [],
  singleStudent: null,
  isLoading: false,
  error: null,
};

// Thunks
export const fetchAllStudents = createAsyncThunk(
  "students/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await studentService.getAllStudents();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchStudentById = createAsyncThunk(
  "students/fetchById",
  async (id, thunkAPI) => {
    try {
      return await studentService.getStudentById(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const createNewStudent = createAsyncThunk(
  "students/create",
  async (data, thunkAPI) => {
    try {
      const res = await studentService.createStudent(data);
      toast.success("Student created successfully");
      return res;
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const updateStudentById = createAsyncThunk(
  "students/update",
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await studentService.updateStudent(id, data);
      toast.success("Student updated successfully");
      return res;
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const toggleStudentStatus = createAsyncThunk(
  "students/toggle",
  async (id, thunkAPI) => {
    try {
      const res = await studentService.toggleStudentActive(id);
      toast.success("Student status toggled");
      return res;
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const deleteStudentById = createAsyncThunk(
  "students/delete",
  async (id, thunkAPI) => {
    try {
      await studentService.deleteStudent(id);
      toast.success("Student deleted successfully");
      return id;
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Slice
const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(fetchAllStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = action.payload;
      })
      .addCase(fetchAllStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch by ID
      .addCase(fetchStudentById.fulfilled, (state, action) => {
        state.singleStudent = action.payload;
      })

      // Create
      .addCase(createNewStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })

      // Update
      .addCase(updateStudentById.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s._id === action.payload._id);
        if (index !== -1) state.students[index] = action.payload;
      })

      // Toggle
      .addCase(toggleStudentStatus.fulfilled, (state, action) => {
        const index = state.students.findIndex((s) => s._id === action.payload._id);
        if (index !== -1) state.students[index] = action.payload;
      })

      // Delete
      .addCase(deleteStudentById.fulfilled, (state, action) => {
        state.students = state.students.filter((s) => s._id !== action.payload);
      });
  },
});

export default studentSlice.reducer;
