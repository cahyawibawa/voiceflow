import Image from 'next/image';

import { Shell } from './shell';

const logos = [
  {
    src: '/images/logo/cal.svg',
    alt: 'calcom',
  },
  {
    src: '/images/logo/perplexity.svg',
    alt: 'perplexity',
  },
  {
    src: '/images/logo/replicate.svg',
    alt: 'replicate',
  },
  {
    src: '/images/logo/prisma.svg',
    alt: 'prisma',
  },
  {
    src: '/images/logo/chronicle.svg',
    alt: 'prisma',
  },
  {
    src: '/images/logo/crowd.svg',
    alt: 'prisma',
  },
];

const CompanyLogo = () => (
  <Shell>
    <h2 className=' text-gray-600 text-center sm:text-lg'>
      Giving superpowers to marketing teams at world-class companies
    </h2>
    <div className='mt-6'>
      <ul className='grid w-full grid-cols-2 items-center px-5 md:grid-cols-6 md:px-0'>
        {logos.map((item, idx) => (
          <li
            key={idx}
            className='h-12 grayscale transition-all hover:grayscale-0 md:h-20 blur-0'
          >
            <Image src={item.src} alt={item.alt} width={520} height={182} />
          </li>
        ))}
      </ul>
    </div>
  </Shell>
);

export default CompanyLogo;
