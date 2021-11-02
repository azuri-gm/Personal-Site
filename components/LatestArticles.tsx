import { PostCollection } from '@/common/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { ReactElement } from 'react';
import ChevronRight from './icons/ChevronRight';
import ReactIcon from './icons/ReactIcon';
import VSCodeIcon from './icons/VSCodeIcon';

const LatestArticles = ({ posts }: PostCollection): ReactElement => {
  return (
    <section className='mt-16'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-xl font-medium sm:text-2xl'>Latest Articles</h1>
        <div className='flex items-center gap-2'>
          <Link href='/blog' passHref>
            <div className='flex items-center p-2 transition duration-700 ease-in-out rounded cursor-pointer gap-x-2 hover:bg-filler-blue'>
              <p>All articles</p>
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
      <div>
        {posts.map(({ createdAt, slug, title }) => (
          <Link href={`/blog/${slug}`} key={slug}>
            <a>
              <div className='flex items-start mb-7'>
                <div>
                  {title.toLowerCase().includes('vs code') ? (
                    <VSCodeIcon />
                  ) : (
                    <ReactIcon />
                  )}
                </div>
                <div className='flex flex-col'>
                  <p className='text-lg font-medium'>{title}</p>
                  <p className='text-xs text-shade-blue'>
                    {format(new Date(createdAt), 'LLLL dd, yyyy')}
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export { LatestArticles };
