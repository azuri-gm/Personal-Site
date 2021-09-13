import { BlogItem } from '@/common/types';
import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import { fetchPost, fetchPosts } from 'utils/contentfulPosts';

const Post = ({
  blogPost: {
    fields: { content, date, title },
  },
}: {
  blogPost: BlogItem;
}) => {
  const { minutes } = readingTime(content || '');

  return (
    <div>
      <div className='flex flex-col mb-12'>
        <h1 className='mb-0 text-xl text-center sm:text-left font-bold sm:text-5xl sm:font-extrabold'>
          {title}
        </h1>
        <div className='flex gap-x-4 text-shade-blue'>
          <p className='sm:text-base text-sm'>
            {format(new Date(date), 'LLLL dd, yyyy')}
          </p>
          {minutes && (
            <p className='sm:text-base text-sm'>
              {Math.ceil(minutes)} min read
            </p>
          )}
        </div>
      </div>
      <div className='prose sm:prose-lg prose-sm mx-auto max-w-none'>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  let posts = await fetchPosts();

  return {
    paths: posts.map(({ fields: { slug } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetchPost(params?.slug as string);

  return {
    props: {
      blogPost: data.items[0],
    },
  };
};
