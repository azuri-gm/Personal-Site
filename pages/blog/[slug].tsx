import { Post } from '@/common/types';
import Layout from '@/components/Layout';
import { fadeInUp } from '@/utils/animations';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
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

const BlogPost = ({ post: { post } }: { post: { post: Post } }) => {
  const { minutes } = readingTime(post.postContent || '');
  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
        <meta
          name='description'
          content={`Blog post with title: ${post.title}`}
        />
      </Head>
      <div className='flex flex-col mb-10'>
        {post.coverImage ? (
          <motion.div
            variants={fadeInUp}
            initial='initial'
            animate='animate'
            exit='exit'
            className='mb-10'
          >
            <Image
              src={post.coverImage.url}
              alt={'This is the header for the image'}
              width={post.coverImage.width}
              height={post.coverImage.height}
              className='mb-10 rounded-lg'
            />
          </motion.div>
        ) : null}
        <h1 className='mb-4 text-xl text-center font-bold sm:text-5xl sm:font-extrabold'>
          {post.title}
        </h1>
        <div className='flex justify-between text-shade-blue mt-4'>
          <p className='sm:text-base text-sm'>
            {format(new Date(post.createdAt), 'LLLL dd, yyyy')}
          </p>
          {minutes && (
            <p className='sm:text-base text-sm'>
              {Math.ceil(minutes)} min read
            </p>
          )}
        </div>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='mx-auto lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20'
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
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
              code({ className, children }) {
                const language = className?.replace('language-', '');
                return language ? (
                  <SyntaxHighlighter
                    language={language}
                    style={nord}
                    showLineNumbers={true}
                  >
                    {children}
                  </SyntaxHighlighter>
                ) : (
                  <div>{children}</div>
                );
              },
            }}
          >
            {post.postContent}
          </ReactMarkdown>
        </div>
        <div className='text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2'>
          <div className='flex sm:flex-col gap-y-4'>
            <div id='author' className='flex gap-x-2'>
              <Image
                src={post.author.picture.url}
                width={32}
                height={32}
                alt='Post author image'
              />
              <div className='flex flex-col'>
                <p>{post.author.name}</p>
                <p className='text-shade-blue'>{post.author.title}</p>
              </div>
            </div>
            <div id='navigation' className='mt-8'>
              <Link href='/blog'>
                <a className='p-2 transition duration-700 ease-in-out hover:bg-filler-blue rounded'>
                  ← Go back
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await fetchPosts();

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchPost(params?.slug as string);

  return {
    props: {
      post,
    },
    revalidate: 60 * 10,
  };
};
