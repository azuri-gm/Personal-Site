import { Post, PostCollection } from '@/common/types';
import { BlogCard } from '@/components/BlogCard';
import Layout from '@/components/Layout';
import { fetchPosts } from '@/utils/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

const Blog = ({ blogPosts }: { blogPosts: PostCollection }) => {
  const [search, setSearch] = useState<string>('');
  const { data } = useQuery<Post[], Error>(
    'get-posts',
    //@ts-ignore
    fetchPosts,
    {
      initialData: blogPosts,
    },
  );
  //@ts-ignore
  const { posts }: { posts: Post[] } = data;

  const displayedPosts = useMemo<Post[]>(
    () => posts.filter((post) => post.title.toLowerCase().includes(search)),
    [posts, search],
  );

  return (
    <Layout>
      <Head>
        <title>Blog Posts</title>
        <meta
          name='description'
          content='Personal posts about technology and life'
        />
      </Head>

      <h1 className='sm:text-5xl text-3xl mb-10 sm:text-left text-center flex flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between'>
        <div className='sm:w-2/3 md:w-2/3'>
          <p>Blog Posts {`(${posts.length})`}</p>
        </div>
        <div className='text-custom-grey sm:w-1/3 md:w-1/3 flex flex-col'>
          <label className='block mb-1 text-sm' htmlFor='search-posts'>
            Search Posts
          </label>
          <input
            type='text'
            name='search-posts'
            placeholder='Search'
            className='text-custom-grey text-sm mt-0 h-6 w-60 mx-auto sm:mx-0 md:mx-0'
            value={search}
            onChange={(evt) => setSearch(evt.target.value)}
          />
        </div>
      </h1>
      {!displayedPosts.length && <p>no posts found D:</p>}
      {displayedPosts.map((post) => (
        <BlogCard post={post} key={post.slug} />
      ))}
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchPosts();
  return {
    props: {
      blogPosts: posts,
    },
  };
};
