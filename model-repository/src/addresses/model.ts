import {model} from "mongoose";
import AddressSchema from "./schema";
import IAddress from "./interface";

let AddressModel = model<IAddress>('Addresses', AddressSchema);

export default AddressModel