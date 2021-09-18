import { Post, PostCollection } from '@/common/types';
import { BlogCard } from '@/components/BlogCard';
import Layout from '@/components/Layout';
import { fetchPosts } from '@/utils/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';

const Blog = ({ posts }: PostCollection) => {
  const { data, isLoading, error } = useQuery<Post[], Error>(
    'get-posts',
    //@ts-ignore
    fetchPosts,
    {
      initialData: posts,
    },
  );
  const results: Post[] = data as Post[];
  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
        <meta
          name='description'
          content='Personal posts about technology and life'
        />
      </Head>

      <h1 className='sm:text-5xl text-3xl mb-10 sm:text-left text-center'>
        Blog Posts {`(${posts.length})`}
      </h1>
      {results.map((post) => (
        <BlogCard post={post} key={post.slug} />
      ))}
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<PostCollection> = async () => {
  const { posts } = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
};
