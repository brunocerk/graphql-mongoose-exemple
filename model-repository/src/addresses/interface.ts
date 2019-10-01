import {Document} from "mongoose";

enum typeEnum{
    Point = 'Point'
}
export default interface IAddress extends Document {
    name: string,
    postalCode: string,
    street: string,
    number: number,
    city: string,
    state: string,
    neighborhood: string,
    reference: string,
    country: string,
    location: {
        type: typeEnum,
        coordinates: [number, number]
    }
    placeId: {
        googleMaps: string,
        openStreetMap: string,
    }
}