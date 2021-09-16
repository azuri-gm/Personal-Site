import { Post, PostCollection } from "@/common/types";
import { GraphQLClient } from "graphql-request";
import { queryPost, queryPosts } from "graphql/queries";

const url: string = process.env.NEXT_GRAPHQL_URL || "";
const token: string = process.env.NEXT_GRAPHQL_TOKEN || "";

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchPosts = async (): Promise<PostCollection> => {
  return await client.request(queryPosts);
};

export const fetchPost = async (slug: string): Promise<Post> => {
  return await client.request(queryPost(slug));
};
