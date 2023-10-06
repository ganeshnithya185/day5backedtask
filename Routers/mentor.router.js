import express from "express";
import {
  assignStudentsToMentor,
  createMentor,
  getMentor,
  getMentorbyId,
  getonementortoonestudent,
  oneMentortooneStudent
  
} from "../Controllers/mentor.controller.js";
const menrouter = express.Router();
menrouter.post('/create', createMentor);
menrouter.get('/get/mentor', getMentor)
menrouter.get('/get/', getMentorbyId);
menrouter.post('/assign-students', assignStudentsToMentor)
menrouter.post("/assign-mentor/:mentorId/:studentId", oneMentortooneStudent);
menrouter.get('/get/onementor/:mentorId', getonementortoonestudent)

export default menrouter;  