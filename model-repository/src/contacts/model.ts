import {model} from "mongoose";
import ContactSchema from "./schema";
import IContact from "./interface";

let ContactModel = model<IContact>('Contacts', ContactSchema);

export default ContactModel