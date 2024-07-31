const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLObjectType } = require('apollo-server');
const User = require('../models/user');
const Message = require('../models/message');
const authResolver = require('../resolvers/auth');
const messageResolver = require('../resolvers/message'); // Ensure this path is correct

// Define UserType
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

// Define MessageType
const MessageType = new GraphQLObjectType({
  name: 'Message',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    createdAt: { type: GraphQLDateTime },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      }
    }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    messages: {
      type: new GraphQLList(MessageType),
      resolve(parent, args, context) {
        return messageResolver.getMessages(context);
      }
    }
  }
});

// Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        return authResolver.createUser(args);
      }
    },
    login: {
      type: GraphQLString,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        return authResolver.login(args);
      }
    },
    createMessage: {
      type: MessageType,
      args: {
        content: { type: GraphQLString }
      },
      resolve(parent, args, context) {
        return messageResolver.createMessage(args, context);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
