import mongoose from "mongoose";

const mentorschema = mongoose.Schema({
  first_name: String,
  last_name: String,
  designation: String,
  email_id: String,
  assignedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});
const Mentor = mongoose.model("Mentor", mentorschema);
export default Mentor;
