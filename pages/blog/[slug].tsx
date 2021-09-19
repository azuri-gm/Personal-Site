import { Post } from '@/common/types';
import Layout from '@/components/Layout';
import PostsShimmer from '@/components/PostsShimmer';
import { fetchPost, fetchPosts } from '@/utils/posts';
import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useQuery, UseQueryResult } from 'react-query';
import readingTime from 'reading-time';

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
  const { data, isLoading, isError, error }: UseQueryResult = useQuery<
    Post,
    Error
  >(
    `post-${post.slug}`,
    //@ts-ignore
    fetchPost,
    {
      initialData: post,
    },
  );
  const result: Post = data as Post;
  const { minutes } = readingTime(result.postContent || '');

  if (error) {
    return <p>This is the error: {error}</p>;
  }

  return (
    <Layout>
      <Head>
        <title>Blog Post</title>
        <meta
          name='description'
          content={`Blog post with title: ${result.title}`}
        />
      </Head>
      <div className='flex flex-col mb-10'>
        {isLoading && <PostsShimmer />}
        {!isLoading && !isError && (
          <div>
            <div>
              <h1 className='mb-0 text-4xl text-center font-bold sm:text-5xl sm:font-extrabold'>
                {result.title}
              </h1>
              <div className='flex justify-between text-shade-blue mt-4'>
                <p className='sm:text-base text-sm'>
                  {format(new Date(result.createdAt), 'LLLL dd, yyyy')}
                </p>
                {minutes && (
                  <p className='sm:text-base text-sm'>
                    {Math.ceil(minutes)} min read
                  </p>
                )}
              </div>
            </div>
            <div
              className='mx-auto mt-8 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20'
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
                  }}
                >
                  {result.postContent}
                </ReactMarkdown>
              </div>
              <div className='text-sm font-medium leading-5 lg:col-start-1 lg:row-start-2'>
                <div className='flex justify-between md:flex-col gap-y-4'>
                  <div id='author' className='flex gap-x-2'>
                    <Image
                      src={result.author.picture.url}
                      width={32}
                      height={32}
                      alt='Post author image'
                    />
                    <div className='flex flex-col'>
                      <p>{result.author.name}</p>
                      <p className='text-shade-blue'>{result.author.title}</p>
                    </div>
                  </div>
                  <div id='navigation' className='md:mt-8'>
                    <Link href='/blog'>
                      <a className='p-2 transition duration-700 ease-in-out hover:bg-filler-blue rounded'>
                        ← Go back
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  //@ts-ignore
  const { posts }: { posts: Post[] } = await fetchPosts();
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
    revalidate: 60 * 10 * 10,
  };
};
