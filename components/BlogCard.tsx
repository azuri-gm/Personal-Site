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
        <p className='text-sm mb-5 text-coral-blue'>
          {format(new Date(createdAt), 'LLLL dd, yyyy')}
        </p>
        <h3 className='sm:text-2xl text-lg font-bold mb-3'>{title}</h3>
        <p className='mb-10 sm:text-left text-justify'>{excerpt}</p>
        <Link
          href={`blog/${slug}`}
          className='p-2 text-coral-blue text-sm transition duration-700 ease-in-out hover:bg-filler-blue rounded'
        >
          Read more...
        </Link>
      </div>
    </div>
  );
};

export { BlogCard };
