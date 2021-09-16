import { Post, PostCollection } from '@/common/types';
import { GraphQLClient } from 'graphql-request';
import { queryPost, queryPosts } from 'graphql/queries';

const url: string = process.env.NEXT_GRAPHQL_URL || '';
const token: string = process.env.NEXT_GRAPHQL_TOKEN || '';

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchPosts = async (): Promise<PostCollection> => {
  const posts: PostCollection = await client.request(queryPosts);
  return posts;
};

export const fetchPost = async (slug: string): Promise<Post> => {
  const post: Post = await client.request(queryPost(slug));
  return post;
};
