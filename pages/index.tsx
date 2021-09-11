import { IBlogArticles, LatestArticles } from '@/components/LatestArticles';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { fetchPosts } from 'utils/contentfulPosts';
import Intro from '../components/Intro';

const Home = ({ posts }: IBlogArticles) => {
  return (
    <div>
      <Head>
        <title>Azuri Gaytan Site</title>
        <meta name='description' content='Personal portfolio' />
      </Head>
      <Intro />
      <LatestArticles posts={posts} />
    </div>
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
