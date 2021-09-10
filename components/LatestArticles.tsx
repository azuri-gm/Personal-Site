import { ReactElement } from 'react';
import ChevronRight from './icons/ChevronRight';
import ReactIcon from './icons/ReactIcon';

type IArticle = {
  name: string;
  date: string;
  icon: string;
  slug: string;
};

export interface ILatestArticlesProps {
  articles: IArticle[];
}

const LatestArticles = ({ articles }: ILatestArticlesProps): ReactElement => {
  return (
    <section className='mt-16'>
      <div className='flex justify-between items-center mb-8'>
        <p className='text-2xl font-medium'>Latest Articles</p>
        <div className='flex items-center gap-2'>
          <p>All articles</p>
          <ChevronRight />
        </div>
      </div>
      <div>
        {articles.map(({ date, name, icon, slug }) => (
          <div key={slug} className='mb-7 flex items-start'>
            <div>
              <ReactIcon />
            </div>
            <div className='flex flex-col'>
              <p className='text-lg font-medium'>{name}</p>
              <p className='text-xs text-shade-blue'>{date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { LatestArticles };
