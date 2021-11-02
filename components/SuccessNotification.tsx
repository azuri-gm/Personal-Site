import { useEffect, useState } from 'react';

interface NotificationProps {
  delay: number;
}

const SuccessNotification = ({ delay }: NotificationProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return visible ? (
    <div className='flex flex-row items-center p-5 mt-4 bg-green-200 border-b-2 border-green-300 rounded alert'>
      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 bg-green-100 border-2 border-green-500 rounded-full alert-icon'>
        <span className='text-green-500'>
          <svg fill='currentColor' viewBox='0 0 20 20' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
      </div>
      <div className='ml-4 alert-content'>
        <div className='text-lg font-semibold text-green-800 alert-title'>
          Success
        </div>
        <div className='text-sm text-green-600 alert-description'>
          Form submitted correctly!
        </div>
      </div>
    </div>
  ) : null;
};

export default SuccessNotification;
