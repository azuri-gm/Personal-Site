import Link from 'next/link';

const CTA = () => {
  return (
    <div className='absolute left-0 w-screen p-16 mt-10 text-center bg-background-blue'>
      <div className='justify-center'>
        <h1 className='mb-5 text-3xl text-custom-green sm:text-5xl'>
          What are you working on?
        </h1>
        <p>
          Let us have a conversation! I would love to hear about what you are
          working on and find a way to work together
        </p>
        <button className='p-2 mt-4 text-base font-bold rounded bg-bright-lime text-darker-blue'>
          <Link href='/about#contact' passHref>
            <div className='flex items-center gap-x-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 16C18 16.442 17.8244 16.866 17.5118 17.1785C17.1993 17.4911 16.7754 17.6667 16.3333 17.6667H6.33333L3 21V7.66667C3 7.22464 3.17559 6.80072 3.48816 6.48816C3.80072 6.17559 4.22464 6 4.66667 6H16.3333C16.7754 6 17.1993 6.17559 17.5118 6.48816C17.8244 6.80072 18 7.22464 18 7.66667V16Z'
                  stroke='#111A20'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Contact
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CTA;
