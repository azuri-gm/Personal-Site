import { BlogCard } from '@/components/BlogCard';
import { IBlogArticles } from '@/components/LatestArticles';
import { GetStaticProps } from 'next';
import { fetchPosts } from 'utils/contentfulPosts';

const blog = ({ posts }: IBlogArticles) => {
  return (
    <section>
      <h1 className='text-5xl mb-10'>Blog Posts</h1>
      {posts.map(
        (post): JSX.Element => (
          <BlogCard blogPost={post} key={post.title} />
        ),
      )}
    </section>
  );
};

export default blog;

export const getStaticProps: GetStaticProps<ILatestBlogArticles> = async () => {
  const response = await fetchPosts();
  const posts = response.map((blog) => blog.fields);

  return {
    props: {
      posts,
    },
  };
};
