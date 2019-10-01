import express from 'express';
import graphqlHTTP from 'express-graphql';
import graphqlSchema from "./src/schema";
import {connectToDatabase} from "model-repository";
const PORT = 4000;
const app = express();

connectToDatabase().then(value => {
    app.use(
        '/graphql',

        graphqlHTTP({schema: graphqlSchema, graphiql: true})

        // graphqlHTTP(async (request: IncomingMessage, response: ServerResponse, graphQLParams: GraphQLParams | undefined) => {
        //     return {
        //         graphqlSchema,
        //         graphiql: true,
        //         context: {
        //             req: request,
        //         },
        //     };
        // })
    );

    app.listen(PORT, () => {
        console.log(`The server is running at http://localhost:${PORT}/graphql`);
    });
}).catch(reason => {
    console.info(reason)
    return;
})
