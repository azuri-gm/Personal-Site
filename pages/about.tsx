import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import { InlineWidget } from 'react-calendly';

type CalendlyPageSettings = {
  hideLandingPageDetails?: boolean;
  hideEventTypeDetails?: boolean;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  hideGdprBanner?: boolean;
};

const About: NextPage = () => {
  const calendlyUrl: string = 'https://calendly.com/eduardo_gaytan/30min';

  return (
    <Layout>
      <div className='prose-sm prose sm:prose-lg max-w-none'>
        <Head>
          <title>About Page</title>
          <meta name='description' content='About Page personal description' />
        </Head>
        <div>
          <h1>About</h1>
          <p>
            Eduardo Gaytan is a Senior Software Engineer at{' '}
            <a href='https://www.apptegy.com/'>Apptegy</a>. He is a full stack
            engineer with a focus on the front end, enjoying building
            well-designed, fast and robust web apps. He is passionate about
            creating products that help to empower people with new skills and
            knowledge regardless of their background and prior training. You can
            read more on his{' '}
            <a target='_blank' href='/resume.pdf'>
              CV
            </a>
          </p>
        </div>
        <div className='h-full overflow-y-hidden'>
          <InlineWidget
            url={calendlyUrl}
            pageSettings={{ backgroundColor: 'ECF8FF', textColor: '#fff' }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
