import { gql } from 'graphql-request';

export const queryPosts = gql`
  query {
    posts {
      createdAt
      title
      excerpt
      slug
      postContent
      author {
        name
        title
        picture {
          width
          height
          url
        }
      }
      coverImage {
        width
        height
        url
      }
    }
  }
`;

export const queryPost = (slug: string) => gql`
  query Post {
    post(where: {slug: "${slug}"}) {
      author {
        name
        title
        picture {
          width
          height
          url
        }
      }
      coverImage {
        width
        height
        url
      }
      postContent
      createdAt
      title
    }
  }
`;
