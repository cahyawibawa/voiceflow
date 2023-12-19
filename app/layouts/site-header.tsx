import Link from 'next/link';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { siteConfig } from '@/config/site';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export default function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background'>
      <div className='container flex h-16 items-center'>
        <MainNav items={siteConfig.mainNav} />
        <MobileNav mainNavItems={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <Link
              href='/signin'
              className={buttonVariants({
                variant: 'ghost',
              })}
            >
              Login
              <span className='sr-only'>Sign In</span>
            </Link>
            <Link
              href='/signup'
              className={cn(
                buttonVariants({
                  className: 'bg-blue-600  hover:bg-blue-800',
                  size: 'sm',
                })
              )}
            >
              Get Started
              <span className='sr-only'>Sign Up</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
