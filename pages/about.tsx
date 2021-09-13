import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className='prose prose-sm sm:prose-2xl max-w-none'>
      <Head>
        <title>About Page</title>
        <meta name='description' content='About Page personal description' />
      </Head>
      <h1>About</h1>
      <p>
        Eduardo Gaytan is a Senior Software Engineer at{' '}
        <a href='https://www.apptegy.com/'>Apptegy</a>. He is a full stack
        engineer with a focus on the front end, enjoying building well-designed,
        fast and robust web apps. He is passionate about creating products that
        help to empower people with new skills and knowledge regardless of their
        background and prior training.
      </p>
    </div>
  );
};

export default About;
