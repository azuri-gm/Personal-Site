import { GraphQLClient } from 'graphql-request';
import { queryPost, queryPosts } from 'graphql/queries';
import { useQuery } from 'react-query';

const url: string = process.env.NEXT_GRAPHQL_URL || '';
const token: string = process.env.NEXT_GRAPHQL_TOKEN || '';

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const useGetPosts = () => {
  return useQuery('get-posts', async () => {
    const posts = await client.request(queryPosts);
    console.log(posts);
    return posts;
  });
};

export const useGetPost = (slug: string) => {
  return useQuery(['get-post', slug], async () => {
    const { post } = await client.request(queryPost(slug));
    return post;
  });
};
