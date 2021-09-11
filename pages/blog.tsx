import { BlogCard, IBlogCardProps } from '@/components/BlogCard';
import { GetStaticProps } from 'next';

const blog = ({ blogPosts }: IBlogCardProps) => {
  return (
    <section>
      <h1 className='text-5xl mb-10'>Blog Posts</h1>
      {blogPosts.map(
        ({ blogPost }): JSX.Element => (
          <BlogCard blogPost={blogPost} key={blogPost.name} />
        ),
      )}
    </section>
  );
};

export default blog;

export const getStaticProps: GetStaticProps<IBlogCardProps> = async () => {
  const blogPosts = [
    {
      blogPost: {
        name: 'Reducing cognitive load by theming my tools',
        date: 'September 08, 2019',
        summary:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
        slug: 'fdsa1',
      },
    },
    {
      blogPost: {
        name: 'Code splitting & lazy loading a server side rendered React app',
        date: 'September 08, 2019',
        summary:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
        slug: 'fdsa2',
      },
    },
    {
      blogPost: {
        name: 'Easy project switching with Itermocil & command line shortcuts',
        date: 'September 08, 2019',
        summary:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
        slug: 'fdsa3',
      },
    },
    {
      blogPost: {
        name: 'Easy project switching with Itermocil & command line shortcuts Version III',
        date: 'September 10, 2020',
        summary:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
        slug: 'fdsa4',
      },
    },
  ];
  return {
    props: {
      blogPosts,
    },
  };
};
