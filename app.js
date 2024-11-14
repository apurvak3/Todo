import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js";


const app = express();

app.use(express.json());
app.use("/users",userRouter);
app.use("/task" , taskRouter );
app.get("/" , (req,res) => {
    res.send("Nice working");
});
app.listen(4000, () => {

})