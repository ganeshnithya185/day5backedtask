import express from "express";
import { createStudent, getStudent } from "../Controllers/mentor.controller.js";

const studentRouter = express.Router();
studentRouter.post("/create/student", createStudent);
studentRouter.get("/", getStudent)

export default studentRouter;
