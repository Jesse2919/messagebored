const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers');
const isAuth = require('./middlewares/is-auth');
require('dotenv').config();

const startServer = async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(isAuth);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
      const PORT = process.env.PORT || 4000;
      app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server ready at http://0.0.0.0:${PORT}${server.graphqlPath}`);
      });
    })
    .catch(err => {
      console.error('Failed to connect to MongoDB', err);
    });
};

startServer();
