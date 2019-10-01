import {Schema} from "mongoose";


let ContactSchema = new Schema({
    type: {
        type: String,
        enum: ['email', 'mobile', 'landline', 'fax']
    },
    contact: String,
    active: Boolean,
    dont_disturb: Boolean,
});


export default ContactSchema