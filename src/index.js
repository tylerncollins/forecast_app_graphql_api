import dotenv from 'dotenv'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import resolvers from './resolvers'
import dataSources from './datasources'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources
})

server.applyMiddleware({ app, path: '/graphql'})

app.listen({ port: process.env.PORT }, () => {
  console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`)
})
