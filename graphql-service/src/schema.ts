

import { schemaComposer } from 'graphql-compose';
import {composeWithMongoose} from "graphql-compose-mongoose";
import {AddressModel} from "model-repository";



const options = {}; // left it empty for simplicity, described below

export let AddressTC = composeWithMongoose(AddressModel, options);

schemaComposer.Query.addFields({
    addressById: AddressTC.getResolver('findById'),
    addressByIds: AddressTC.getResolver('findByIds'),
    addressOne: AddressTC.getResolver('findOne'),
    addressMany: AddressTC.getResolver('findMany'),
    addressCount: AddressTC.getResolver('count'),
    addressConnection: AddressTC.getResolver('connection'),
    addressPagination: AddressTC.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
    addressCreateOne: AddressTC.getResolver('createOne'),
    addressCreateMany: AddressTC.getResolver('createMany'),
    addressUpdateById: AddressTC.getResolver('updateById'),
    addressUpdateOne: AddressTC.getResolver('updateOne'),
    addressUpdateMany: AddressTC.getResolver('updateMany'),
    addressRemoveById: AddressTC.getResolver('removeById'),
    addressRemoveOne: AddressTC.getResolver('removeOne'),
    addressRemoveMany: AddressTC.getResolver('removeMany'),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;