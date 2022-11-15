import { GraphQLClient } from 'graphql-request';

const url: string = process.env.NEXT_GRAPHQL_URL || '';
const token: string = process.env.NEXT_GRAPHQL_TOKEN || '';

export const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
