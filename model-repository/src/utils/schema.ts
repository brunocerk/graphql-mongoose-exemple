import {Schema} from "mongoose";

/**
 * Location schema based on GeoJSON
 */

export let LocationSchema = new Schema({
    type: {
        type: String,
        enum: ['Point'], // We only accept Point GeoLocation
    },
    coordinates: [Number, Number]
}, {_id: false});


