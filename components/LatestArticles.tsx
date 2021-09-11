import { ImageFields } from '@/common/types';
import { format } from 'date-fns';
import Link from 'next/link';
import { ReactElement } from 'react';
import ChevronRight from './icons/ChevronRight';
import ReactIcon from './icons/ReactIcon';

export type IBlogArticle = {
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  headerImage: ImageFields;
  date: string;
};

export interface IBlogArticles {
  posts: IBlogArticle[];
}

const LatestArticles = ({ posts }: IBlogArticles): ReactElement => {
  return (
    <section className='mt-16'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-medium'>Latest Articles</h1>
        <div className='flex items-center gap-2'>
          <Link href='/blog' passHref>
            <div className='flex gap-x-2 items-center cursor-pointer p-2 hover:bg-filler-blue rounded'>
              <p>All articles</p>
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
      <div>
        {posts.map(({ date, title, headerImage, slug }) => (
          <div key={slug} className='mb-7 flex items-start'>
            <div>
              <ReactIcon />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg font-medium'>{title}</p>
              <p className='text-xs text-shade-blue'>
                {format(new Date(date), 'LLLL dd, yyyy')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { LatestArticles };
