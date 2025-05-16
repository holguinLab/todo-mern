import mongoose from "mongoose";
import schemaUsers from "./schemas/schema.users.mjs";

const Users = mongoose.model('Users',schemaUsers);

export default Users