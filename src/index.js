/* Core */
const { ApolloServer } = require('apollo-server-express');
const isEmail = require('isemail');
const express = require('express');
const cors = require('cors');

/* Instruments */
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        sameSite: 'none',
    }),
);

const server = new ApolloServer({
    typeDefs,
    resolvers,

    // fetchOptions: {
    //     mode: 'no-cors',
    // },

    // cors: {
    //     credentials: true, // ? enable CORS response for requests with credentials (cookies, http authentication)
    //     origin: '*', // ? allow request from all domains
    //     exposedHeaders: ['Authorization', 'Access-Control-Allow-Origin'],
    //     allowedHeaders: ['Authorization', 'Access-Control-Allow-Origin'],
    // },

    // headers: {
    //     'Access-Control-Allow-Origin': '*',
    // },

    context: async ({ req }) => {
        // simple auth check on every request
        const auth = (req.headers && req.headers.authorization) || '';

        const email = Buffer.from(auth, 'base64').toString('ascii');

        if (!isEmail.validate(email)) return { user: null };

        // find a user by their email
        // const users = await store.users.findOrCreate({ where: { email } });
        // const user = (users && users[0]) || null;

        return { user: { name: 'Jack' } };
    },
});

server.applyMiddleware({ app, cors: false });

const result = app.listen({ port: 4000 });

console.log(
    `🚀 Server ready at http://localhost:${result.address().port}${
        server.graphqlPath
    }`,
);
