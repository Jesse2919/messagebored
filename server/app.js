const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const cors = require('cors');
const schema = require('./schema/schema');
const isAuth = require('./middlewares/is-auth');
require('dotenv').config();

const MongoDB = "mongodb+srv://<username>:<password>@apolloserver.vajdauk.mongodb.net/?retryWrites=true&w=majority&appName=ApolloServer"
//apollo

const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers');

const server = ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to check authentication
app.use(isAuth);

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err);
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
