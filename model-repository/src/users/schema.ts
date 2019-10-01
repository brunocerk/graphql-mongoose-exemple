import {Schema, SchemaTypes} from "mongoose";
import AddressModel from "../addresses/model";
import ContactModel from "../contacts/model";


let UsersSchema = new Schema({
    type: String,
    profile: {
        cpf: String,
        address: {
            type: SchemaTypes.ObjectId,
            ref: AddressModel
        },
        contact: {
            type: SchemaTypes.ObjectId,
            ref: ContactModel
        }
    },
});


export default UsersSchema