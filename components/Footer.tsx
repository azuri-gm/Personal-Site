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
        <div>Icons go here</div>
      </div>
    </section>
  );
};

export default Footer;
