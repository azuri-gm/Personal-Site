import { PostCollection } from '@/common/types';
import { BlogCard } from '@/components/BlogCard';
import Layout from '@/components/Layout';
import { fadeInUp, stagger } from '@/utils/animations';
import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';
import { fetchPosts } from 'utils/contentfulPosts';

const blog = ({ posts }: PostCollection) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const displayedPosts = useMemo(() => {
    return posts.map((post) => (
      <motion.div
        key={post.slug}
        variants={fadeInUp}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <BlogCard post={post} />
      </motion.div>
    ));
  }, [posts]);

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
      <motion.div variants={stagger}>{displayedPosts}</motion.div>
    </Layout>
  );
};

export default blog;

export const getStaticProps: GetStaticProps<PostCollection> = async () => {
  const { posts } = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
};
