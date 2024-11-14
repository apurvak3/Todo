import {app} from "./app.js";
import { connectDb } from "./data/database.js"; 
connectDb();
console.log(process.env.PORT);
app.listen(4000,() => {
    console.log("server is listening to port 4000");
})