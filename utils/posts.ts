import { PostCollection, SinglePost } from '@/common/types';
import { GraphQLClient } from 'graphql-request';
import { queryPost, queryPosts } from 'graphql/queries';

const url: string = process.env.NEXT_GRAPHQL_URL || '';
const token: string = process.env.NEXT_GRAPHQL_TOKEN || '';

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export const fetchPosts = async (): Promise<PostCollection> => {
  try {
    return await client.request(queryPosts);
  } catch (error) {
    return Error(JSON.stringify(error));
  }
};

export const fetchPost = async (slug: string): Promise<SinglePost> => {
  try {
    return await client.request(queryPost(slug));
  } catch (error) {
    return Error(JSON.stringify(error));
  }
};
