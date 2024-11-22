// app.js
import express from "express";
import userRouter from "./routes/users.js";
//import taskRouter from "./routes/task.js";

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);
//app.use("/task", taskRouter);

app.get("/", (req, res) => {
    res.send("Nice working");
});

// Export the app
export { app };
