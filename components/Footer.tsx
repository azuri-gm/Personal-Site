import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer = () => {
  return (
    <section className=''>
      <div className='flex flex-col items-center justify-between p-4 sm:flex-row'>
        <div>
          <p className='text-center'>
            Developed with &hearts; by Eduardo Gaytan
          </p>
          <p className='hidden text-center sm:block'>
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
