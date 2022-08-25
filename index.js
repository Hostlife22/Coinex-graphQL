import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
