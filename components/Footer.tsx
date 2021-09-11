import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer = () => {
  return (
    <section className='container'>
      <div className='flex sm:flex-row flex-col justify-between items-center p-4'>
        <div>
          <p className='text-center'>
            Developed with &hearts; by Eduardo Gaytan
          </p>
          <p className='sm:block text-center hidden'>
            Built with React. Hosted on Vercel.
          </p>
        </div>
        <div className='flex gap-x-4'>
          <a href='https://github.com/azuri-gm'>
            <GithubIcon />
          </a>
          <a href='https://twitter.com/@At_zuri'>
            <TwitterIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
