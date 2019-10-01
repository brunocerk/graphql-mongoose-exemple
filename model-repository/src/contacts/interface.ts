import {Document} from "mongoose";

enum typeEnum {
    email = 'email',
    mobile = 'mobile',
    landline = 'landline',
    fax = 'fax'
}

export default interface IContact extends Document {
    type: typeEnum,
    contact: string,
    active: boolean,
    dont_disturb: boolean,
}


