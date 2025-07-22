import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  DOB: Date,
  class: String,
  profileImage: String,
  isActive: { type: Boolean, default: true },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
