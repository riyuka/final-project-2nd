const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require("fs");
const mongojs = require("mongojs");
const { resolvers } = require("./resolvers");
const typeDefs = gql(fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8"));


const db = mongojs("diye_db", ["users"]);
// fix for this issue: ID cannot represent value: {_bsontype: \"ObjectID\"
const ObjectId = mongojs.ObjectId;
ObjectId.prototype.valueOf = function() {
  return this.toString();
};
// this will make sure that email field is unique
db.users.createIndex({ email: 1 }, { unique: true });

const server = new ApolloServer({ 
    
    typeDefs, resolvers,

    // context: ({ req }) => {
    //     // get the user token from the headers
    //     const token = req.headers.authorization || '';
        
    //     // try to retrieve a user with the token
    //     const user = getUser(token);
        
    //     if (!user) throw new AuthorizationError('you must be logged in');
    //     // add the user to the context
    //     return { token, db };
    //   },

    context: async ({ req, connection }) => {
        if (connection) {
          // check connection for metadata
          return {};
        } else {
          // check from req
          const token = req.headers.authorization || "";
          return { token, db };
        }
      }
});

const app = express();
server.applyMiddleware({ app });

const port = 4000;
app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
