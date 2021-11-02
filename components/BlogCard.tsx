import { Post } from '@/common/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { ReactElement } from 'react';

type BlogCardProps = {
  post: Post;
};

const BlogCard = ({
  post: { createdAt, excerpt, title, slug },
}: BlogCardProps): ReactElement => {
  return (
    <div className='flex flex-col'>
      <div className='mb-8'>
        <p className='mb-5 text-sm text-coral-blue'>
          {format(new Date(createdAt), 'LLLL dd, yyyy')}
        </p>
        <h3 className='mb-3 text-lg font-bold sm:text-2xl'>{title}</h3>
        <p className='mb-10 text-justify sm:text-left'>{excerpt}</p>
        <Link href={`blog/${slug}`}>
          <a className='p-2 text-sm transition duration-700 ease-in-out rounded text-coral-blue hover:bg-filler-blue'>
            Read more...
          </a>
        </Link>
      </div>
    </div>
  );
};

export { BlogCard };
