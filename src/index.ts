//import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './graphql/typedefs';
import { resolvers } from './graphql/resolvers';
import {ApolloServer, gql} from 'apollo-server-express';
import express from 'express';

const { makeExecutableSchema } = require('graphql-tools')
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive')

var uuid=require('uuid').v4();
const PORT = 3000;
const typeDefsExisting = gql`${typeDefs}`;

const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefsExisting],
    resolvers:resolvers,
    schemaTransforms: [constraintDirective()]
  })

const server = new ApolloServer({ schema,context: ({ req }) => ({
  headers: req.headers,
  requestId : uuid
}) });

const app = express();
app.disable("x-powered-by");
app.use(express.json());

server.applyMiddleware({app, path:'/'});

const appServer = app.listen({ port: PORT }, () =>
  console.log(`Server ready at ${PORT}`)
);
appServer.keepAliveTimeout = 61 * 1000;
appServer.setTimeout(10000);


