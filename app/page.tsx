import Link from 'next/link';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { Balancer } from 'react-wrap-balancer';
import { cn } from '@/lib/utils';
import CompanyLogo from '@/components/company';
import Cta from '@/components/cta';
export default function Home() {
  return (
    <>
      <Shell className='max-w-6xl pt-0 md:pt-0'>
        <section
          id='hero'
          aria-labelledby='hero-heading'
          className='mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 py-12 text-center md:pt-32'
        >
          <Balancer
            as='h1'
            className='text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'
          >
            The AI chatbot platform that meets your ambition
          </Balancer>
          <Balancer className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            Voiceflow helps conversational AI teams build and launch incredible
            AI agents, for any use case, faster.
          </Balancer>
          <div className='flex flex-wrap items-center justify-center gap-4 mt-4'>
            <Link
              href='/signup'
              className={cn(
                buttonVariants({
                  className: 'bg-blue-600 hover:bg-blue-800',
                  size: 'sm',
                })
              )}
            >
              Start Building
              <span className='sr-only'>signup</span>
            </Link>
            <Link
              href='/demo'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                })
              )}
            >
              Learn More
              <span className='sr-only'>Demo</span>
            </Link>
          </div>
          <div className='pt-10'>
            <video className='rounded-xl border' autoPlay muted loop>
              <source src='/content/hero.mp4' type='video/mp4'></source>
            </video>
          </div>
          <CompanyLogo />
        </section>
      </Shell>
      {/* <Cta /> */}
    </>
  );
}
