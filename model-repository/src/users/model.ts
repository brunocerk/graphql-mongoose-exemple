import {model} from "mongoose";
import usersSchema from "./schema";
import IUser from "./interface";

let UserModel = model<IUser>('Users', usersSchema);

export default UserModel