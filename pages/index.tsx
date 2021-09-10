import {
  ILatestArticlesProps,
  LatestArticles,
} from '@/components/LatestArticles';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Intro from '../components/Intro';

const Home = ({ articles }: ILatestArticlesProps) => {
  return (
    <div>
      <Head>
        <title>Azuri Gaytan</title>
        <meta name='description' content='Personal portfolio' />
      </Head>
      <Intro />
      <LatestArticles articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<ILatestArticlesProps> =
  async () => {
    const articles = [
      {
        name: 'Reducing cognitive load by theming my tools',
        date: 'September 08, 2019',
        icon: '',
        slug: '1',
      },
      {
        name: 'Code splitting & lazy loading a server side rendered React app',
        date: 'September 08, 2019',
        icon: '',
        slug: '2',
      },
      {
        name: 'Easy project switching with Itermocil & command line shortcuts',
        date: 'September 08, 2019',
        icon: '',
        slug: '3',
      },
    ];
    return {
      props: {
        articles,
      },
    };
  };
