// server/server.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');
const isAuth = require('./middlewares/is-auth');
require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const context = {};
    context.isAuth = isAuth(req);
    // Add more context if needed
    return context;
  },
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  return server.listen({ port: process.env.PORT || 4000 });
})
.then(({ url }) => {
  console.log(`Server ready at ${url}`);
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
