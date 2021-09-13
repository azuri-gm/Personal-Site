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
  blogPost: { content, date, headerImage, slug, subtitle, title },
}: IBlogPost): ReactElement => {
  return (
    <div className='flex flex-col'>
      <div className='mb-8'>
        <p className='text-sm mb-5 text-coral-blue'>
          {format(new Date(date), 'LLLL dd, yyyy')}
        </p>
        <h3 className='text-2xl font-bold mb-3'>{title}</h3>
        <p className='mb-6'>{subtitle}</p>
        <Link href={`blog/${slug}`}>
          <a className='text-coral-blue text-sm hover:bg-filler-blue rounded'>
            Read more...
          </a>
        </Link>
      </div>
    </div>
  );
};

export { BlogCard };
