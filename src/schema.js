/* Core */
const { gql } = require('apollo-server-micro');

const typeDefs = gql`
    type Query {
        user(id: ID!): User!
        session: String!
    }

    type Mutation {
        createUser(data: UserCreateInput): User
        startSession: Boolean!
        endSession: Boolean!
    }

    type User {
        firstName: String
        lastName: String
        email: String
        password: String
    }

    input UserCreateInput {
        name: String!
        email: String!
        password: String
    }
`;

module.exports = typeDefs;
