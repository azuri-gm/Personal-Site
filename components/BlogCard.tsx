import { ImageFields } from '@/common/types';
import { Metadata, Sys } from 'contentful';
import { format } from 'date-fns';
import Link from 'next/link';
import { ReactElement } from 'react';

type IBlogPost = {
  blogPost: {
    title: string;
    slug: string;
    date: string;
    subtitle: string;
    content: string;
    headerImage: {
      metadata: Metadata;
      sys: Sys;
      fields?: ImageFields;
    };
  };
};

export interface IBlogCardProps {
  blogPosts: IBlogPost[];
}

const BlogCard = ({
  blogPost: { date, slug, subtitle, title },
}: IBlogPost): ReactElement => {
  return (
    <div className='flex flex-col'>
      <div className='mb-8'>
        <p className='text-sm mb-5 text-coral-blue'>
          {format(new Date(date), 'LLLL dd, yyyy')}
        </p>
        <h3 className='sm:text-2xl text-lg font-bold mb-3'>{title}</h3>
        <p className='mb-10 sm:text-left text-justify'>{subtitle}</p>
        <Link href={`blog/${slug}`}>
          <a className='p-2 text-coral-blue text-sm transition duration-700 ease-in-out hover:bg-filler-blue rounded'>
            Read more...
          </a>
        </Link>
      </div>
    </div>
  );
};

export { BlogCard };
