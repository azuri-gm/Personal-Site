import Layout from '@/components/Layout';
import SuccessNotification from '@/components/SuccessNotification';
import axios, { AxiosError, AxiosResponse } from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, FormEvent, useState } from 'react';

const About: NextPage = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange =
    () => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData);

    axios
      .post(process.env.NEXT_PUBLIC_GETFORM_FORM_ENDPOINT!, formData, {
        headers: { Accept: 'application/json' },
      })
      .then((response: AxiosResponse) => {
        setFormStatus(true);
        setQuery({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error: AxiosError) => {
        throw new Error(error.message);
      });
  };

  return (
    <Layout>
      <div className='prose prose-sm sm:prose-lg max-w-none'>
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
        <div className='mt-10'>
          <h1>Contact me</h1>
          <div>
            <form
              className='flex flex-wrap -m-2'
              onSubmit={(e: FormEvent) => handleSubmit(e)}
            >
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm text-custom-grey'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={query.name}
                    onChange={handleChange()}
                    className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label className='leading-7 text-sm text-custom-grey'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={query.email}
                    onChange={handleChange()}
                    className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label className='leading-7 text-sm text-custom-grey'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={query.message}
                    onChange={handleChange()}
                    className='w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  className='flex mx-auto text-dark-blue bg-bright-lime border-0 py-2 px-8 focus:outline-none hover:bg-custom-green rounded text-lg'
                  type='submit'
                >
                  Contact
                </button>
                {formStatus ? <SuccessNotification delay={3000} /> : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
