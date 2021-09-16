import CTA from '@/components/CTA';
import { IBlogArticles, LatestArticles } from '@/components/LatestArticles';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { fetchPosts } from 'utils/contentfulPosts';
import Intro from '../components/Intro';

const Home = ({ posts }: IBlogArticles) => {
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

export const getStaticProps: GetStaticProps<any> = async () => {
  const response = await fetchPosts();
  const posts = response.map((blog) => blog.fields).slice(0, 3);

  return {
    props: {
      posts,
    },
  };
};
