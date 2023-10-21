import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Menrouter from "./Routers/mentor.router.js";
import connectDB from "./Database/dbConfig.js";
import studentRouter from "./Routers/student.router.js";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/men", Menrouter);
app.use("/api/student", studentRouter);
connectDB();
app.get("/", (req, res) => {
  res.send("Hello, this is your Express API!");
});
app.listen(port, () => {
  console.log("My app is listening in port", port);
});
