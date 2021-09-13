import { BlogItem } from '@/common/types';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import { fetchPost, fetchPosts } from 'utils/contentfulPosts';

type Node = {
  type: string;
  tagName: string;
  properties: any[];
  children: any[];
  position: any[];
};

type ImageRendererProps = {
  src: string;
  alt: string;
  node?: Node;
  width: string | number;
  height: string | number;
};

const ImageRenderer = ({ src, alt, height, width }: ImageRendererProps) => {
  return <Image src={`https:${src}`} alt={alt} width={width} height={height} />;
};

const Post = ({
  blogPost: {
    fields: { content, date, title, headerImage },
  },
}: {
  blogPost: BlogItem;
}) => {
  console.log(JSON.stringify(headerImage));
  const { minutes } = readingTime(content || '');

  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
        <meta name='description' content={`Blog post with title: ${title}`} />
      </Head>
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
        <ReactMarkdown
          components={{
            img({ src, alt, width, height }) {
              return (
                <ImageRenderer
                  src={src as string}
                  alt={alt as string}
                  width={width || 1100}
                  height={height || 460}
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </Layout>
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
