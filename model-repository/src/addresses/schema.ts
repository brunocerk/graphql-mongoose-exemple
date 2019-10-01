import {Schema} from "mongoose";
import {LocationSchema} from "../utils/schema";


let AddressSchema = new Schema({
    name: String,
    postalCode: Number,
    street: String,
    number: Number,
    city: String,
    state: String,
    neighborhood: String,
    reference: String,
    country: String,
    location: LocationSchema,
    placeId: {
        googleMaps: String, 
        openStreetMap: String,
});


AddressSchema.index({location: "2dsphere"}, {sparse: 1});


export default AddressSchema
