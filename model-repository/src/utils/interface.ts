import {Document} from "mongoose";

export interface ILocation extends Document {
    type: string,
    coordinates: [number, number]
}


