import mongoose from "mongoose";
const studentschema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email_id: String,
  course: String,
});
const Student = mongoose.model("Student", studentschema);
export default Student;
