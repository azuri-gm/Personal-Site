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
        <a href='https://www.apptegy.com/'>Apptegy</a>. I am a full stack
        engineer with a focus on the front end. I enjoy building well-designed,
        fast and robust web apps. Ben Hong is a Vue.js Core Team member and a
        Staff Developer Experience (DX) Engineer at Netlify. He has spoken,
        taught, and emceed around the world at events such as VueConfUS, Vue
        Toronto, and Fluent Conf. He is one of the lead instructors at Vue
        Mastery, one of the premier learning platforms for the Vue.js community.
        He is also a Google Developer Expert in Web Technologies & Map
        Platforms. At the end of the day though, he is a developer /
        psychologist hybrid who is passionate about creating products that help
        to empower people with new skills and knowledge regardless of their
        background and prior training.
      </p>
      My skills and experience I have a Bachelor of Science degree in computer
      science engineering from Nanyang Technological University. I have been
      programming since I was ten years old and have been developing websites
      since then as well. My profile I am currently a software engineer at
      PrestigiousApp, part of an international company with offices in Singapore
      and London. In my spare time, I enjoy photography and reading books.
      Contact me If you would like to contact me to discuss any aspect of my
      work or expertise please dont hesitate to get in touch.
    </div>
  );
};

export default About;
