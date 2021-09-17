import { PostCollection } from '@/common/types';
import CTA from '@/components/CTA';
import { LatestArticles } from '@/components/LatestArticles';
import Layout from '@/components/Layout';
import { fetchPosts } from '@/utils/posts';
import { useGetPosts } from 'hooks/useRequest';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';

const Home = ({ posts }: PostCollection) => {
  const { data, error, isLoading, isSuccess } = useGetPosts();
  console.log(data, error, isLoading, isSuccess);
  return (
    <Layout>
      <Head>
        <title>Azuri Gaytan Site</title>
        <meta name='description' content='Personal portfolio' />
      </Head>
      <div className='flex flex-col h-70v'>
        <div className='flex-grow'>
          <Intro />
          <LatestArticles posts={posts} />
        </div>
        <div className='h-1/3'>
          <CTA />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<PostCollection> = async () => {
  const { posts } = await fetchPosts();
  const recentPosts = posts.slice(0, 3);

  return {
    props: {
      posts: recentPosts,
    },
  };
};
