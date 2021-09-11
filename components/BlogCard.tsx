import Link from 'next/link';
import { ReactElement } from 'react';

type IBlogPost = {
  blogPost: {
    date: string;
    name: string;
    summary: string;
    slug: string;
  };
};

export interface IBlogCardProps {
  blogPosts: IBlogPost[];
}

const BlogCard = ({ blogPost }: IBlogPost): ReactElement => {
  const { date, name, slug, summary } = blogPost;
  return (
    <div className='flex flex-col'>
      <div className='mb-8'>
        <p className='text-sm mb-5 text-coral-blue'>{date}</p>
        <h3 className='text-2xl font-bold mb-3'>{name}</h3>
        <p className='mb-6'>{summary}</p>
        <Link href={`/${slug}`}>
          <a className='text-coral-blue text-sm hover:bg-filler-blue rounded'>
            Read more...
          </a>
        </Link>
      </div>
    </div>
  );
};

export { BlogCard };
