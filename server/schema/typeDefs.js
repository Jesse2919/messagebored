// server/schema/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar DateTime

  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Message {
    id: ID!
    content: String!
    createdAt: DateTime!
    user: User!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String
    createMessage(content: String!): Message
  }
`;

module.exports = typeDefs;
