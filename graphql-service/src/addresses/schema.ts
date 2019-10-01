// import {composeWithMongoose} from "graphql-compose-mongoose";
// import {AddressModel} from "model-repository";
// import {schemaComposer as AddressSC} from "graphql-compose";
//
// const options = {}; // left it empty for simplicity, described below
// export let AddressTC = composeWithMongoose(AddressModel, options);
//
// AddressSC.Query.addFields({
//     addressById: AddressTC.getResolver('findById'),
//     addressByIds: AddressTC.getResolver('findByIds'),
//     addressOne: AddressTC.getResolver('findOne'),
//     addressMany: AddressTC.getResolver('findMany'),
//     addressCount: AddressTC.getResolver('count'),
//     addressConnection: AddressTC.getResolver('connection'),
//     addressPagination: AddressTC.getResolver('pagination'),
// });
//
// AddressSC.Mutation.addFields({
//     addressCreateOne: AddressTC.getResolver('createOne'),
//     addressCreateMany: AddressTC.getResolver('createMany'),
//     addressUpdateById: AddressTC.getResolver('updateById'),
//     addressUpdateOne: AddressTC.getResolver('updateOne'),
//     addressUpdateMany: AddressTC.getResolver('updateMany'),
//     addressRemoveById: AddressTC.getResolver('removeById'),
//     addressRemoveOne: AddressTC.getResolver('removeOne'),
//     addressRemoveMany: AddressTC.getResolver('removeMany'),
// });
//
// export default AddressSC;
