import {Document} from "mongoose";
import IAddress from "../addresses/interface";
import IContact from "../contacts/interface";


export default interface IUser extends Document {
    type: string,
    profile: {
        cpf: string,
        address: IAddress['_id'],
        contact: IContact['_id']
    },

}


