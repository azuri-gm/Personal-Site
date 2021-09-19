import { Post, PostCollection } from '@/common/types';
import CTA from '@/components/CTA';
import { LatestArticles } from '@/components/LatestArticles';
import Layout from '@/components/Layout';
import PostsShimmer from '@/components/PostsShimmer';
import { fetchPosts } from '@/utils/posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useQuery, UseQueryResult } from 'react-query';
import Intro from '../components/Intro';

const Home = ({ posts }: { posts: Post[] }) => {
  const { data, isLoading, error }: UseQueryResult = useQuery<Post[], Error>(
    'get-posts',
    //@ts-ignore
    fetchPosts,
    {
      initialData: posts,
    },
  );
  return (
    <Layout>
      <Head>
        <title>Azuri Gaytan Site</title>
        <meta name='description' content='Personal portfolio' />
      </Head>
      <div className='flex flex-col h-70v'>
        <div className='flex-grow'>
          <Intro />
          <div>
            {isLoading && <PostsShimmer />}
            {!isLoading && <LatestArticles posts={data as PostCollection} />}
          </div>
        </div>
        <div className='h-1/3'>
          <CTA />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await fetchPosts()) as Post[];
  const recentPosts = posts.slice(0, 3) as PostCollection;
  return {
    props: {
      posts: recentPosts,
    },
  };
};
