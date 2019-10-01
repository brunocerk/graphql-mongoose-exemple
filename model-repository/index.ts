import mongoose , {connect} from "mongoose";
import config from 'config';
import AddressModel from "./src/addresses/model";
import ContactModel from "./src/contacts/model";
import UserModel from "./src/users/model";

mongoose.set('debug', true);

export function connectToDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
        const uri: string = config.get('mongodb.uri');

        console.log('Starting database connection', console.time('databaseconnection'));
        connect(uri, {useNewUrlParser: true})
            .then(() => {
                console.log('Database connected, took: ', console.timeEnd('databaseconnection'));
                return resolve()
            })
            .catch(reason => {
                console.log('Database connection error took: ', console.timeEnd('databaseconnection'));
                console.log(JSON.stringify(reason));
                return reject();
            });
    });
}

export {
    AddressModel,
    ContactModel,
    UserModel,
};
