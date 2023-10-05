import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";

export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error: "Error in create mentor" });
  }
};
export const getMentor =async(req, res)=>{
try {
  const mentor = await Mentor.find();
  res.status(200).json(mentor);
} catch (error) {
  res.status(500).json(error)
}
}
export const getMentorbyId = async (req, res) => {
  try {
    // const mentor = await Mentor.find().populate();
    const mentor = await Mentor.findById("651e7089b4e0674626298a88").populate(
      "assignedStudents"
    );
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error: "Error in Get Mentor" });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.find();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Error in Get Student" });
  }
};
export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).json({ data: student });
  } catch (error) {
    res.status(500).json({ error: "Error in create student" });
  }
};
export const assignStudentsToMentor = async (req, res) => {
  try {
    const { mentorId, studentIds } = req.body;

    // Find the mentor by ID
    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }

    // Add the selected students to the mentor's assignedStudents array
    mentor.assignedStudents.push(...studentIds);

    // Save the updated mentor
    await mentor.save();
    return res.status(200).json({ message: "Students assigned successfully." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while assigning students." });
  }
};

export const oneMentortooneStudent = async (req, res) => {
  try {
    const { mentorId, studentId } = req.params;

    // Find the mentor by ID
    const mentor = await Mentor.findById(mentorId);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }

    // Check if the student is already assigned to this mentor
    if (mentor.assignedStudents.includes(studentId)) {
      return res
        .status(200)
        .json({ message: "Student assigned to mentor successfully." });
    }

    // Add the student to the mentor's assignedStudents array
    mentor.assignedStudents.push(studentId);

    // Save the updated mentor
    await mentor.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while assigning student to mentor.",
    });
  }
};

export const getonementortoonestudent = async (req, res) => {
  try {
    const { mentorId } = req.params; // Retrieve mentorId from request parameters

    // Find the mentor by ID and populate the "assignedStudents" field
    const mentor = await Mentor.findById(mentorId).populate("assignedStudents");

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found." });
    }

    // Check if there is at least one assigned student
    if (mentor.assignedStudents.length === 0) {
      return res
        .status(200)
        .json({ message: "Mentor has no assigned students." });
    }

    // Assuming you want to return only one assigned student, you can access it by index (e.g., the first assigned student)
    const assignedStudent = mentor.assignedStudents[0];

    // Return the mentor and assigned student directly
    res.status(200).json({ mentor, assignedStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "An error occurred while fetching mentor with one assigned student.",
    });
  }
};
