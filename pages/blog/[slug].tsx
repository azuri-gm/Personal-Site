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
  const { minutes } = readingTime(content || '');

  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
        <meta name='description' content={`Blog post with title: ${title}`} />
      </Head>
      <div className='flex flex-col mb-10'>
        <h1 className='mb-0 text-xl text-center font-bold sm:text-5xl sm:font-extrabold'>
          {title}
        </h1>
        <div className='flex justify-between text-shade-blue mt-4'>
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
      <div
        className='mx-auto lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20'
        style={{ gridTemplateRows: 'auto 1fr;' }}
      >
        {/* <dl className='pt-6 pb-10 lg:pt-11 '>
          <dt>Author</dt>
          <dd>
            <ul className='flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8'>
              <li className='flex space-x-2'>
                <div className='rounded-full relative overflow-hidden'>
                  <Image
                    src='/public/favicon-16x16.png'
                    alt='author image'
                    width={10}
                    height={10}
                  />
                </div>
                <dl className='flex-1 text-sm font-medium leading-5'>
                  <dd>Eduardo Gaytan</dd>
                  <dd>Software Engineer</dd>
                </dl>
              </li>
            </ul>
          </dd>
        </dl> */}
        <div className='prose max-w-none lg:pb-0 lg:col-span-3 lg:row-span-2 mb-10'>
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
        <div className='text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2'>
          <div className='flex sm:flex-col'>
            <div id='author'>Eduardo Gaytan</div>
            <div id='navigation'>Go back</div>
          </div>
        </div>
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
    revalidate: 60 * 10,
  };
};
