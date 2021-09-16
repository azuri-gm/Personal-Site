import { BlogCard } from '@/components/BlogCard';
import { IBlogArticles } from '@/components/LatestArticles';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { fetchPosts } from 'utils/contentfulPosts';

const blog = ({ posts }: IBlogArticles) => {
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
      {posts.map(
        (post): JSX.Element => (
          <BlogCard blogPost={post} key={post.slug} />
        ),
      )}
    </Layout>
  );
};

export default blog;

export const getStaticProps: GetStaticProps<any> = async () => {
  const response = await fetchPosts();
  const posts = response.map((blog) => blog.fields);

  return {
    props: {
      posts,
    },
  };
};
