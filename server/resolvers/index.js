// server/resolvers/index.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Message = require('../models/message');

const resolvers = {
  DateTime: require('graphql-iso-date').GraphQLDateTime,
  Query: {
    messages: async (_, __, context) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated');
      }
      return Message.find();
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        username,
        email,
        password: hashedPassword
      });
      await user.save();
      return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User does not exist');
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new Error('Password is incorrect');
      }
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      return token;
    },
    createMessage: async (_, { content }, context) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated');
      }
      const message = new Message({
        content,
        userId: context.userId
      });
      await message.save();
      return message;
    },
  },
  Message: {
    user: async (parent) => {
      return User.findById(parent.userId);
    },
  },
};

module.exports = resolvers;
