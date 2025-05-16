import mongoose from "mongoose";
import schemaTasks from "./schemas/scheme.task.mjs";

const Tasks =  mongoose.model('Tasks',schemaTasks)

export default Tasks