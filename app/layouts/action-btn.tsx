import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const ActionBtn = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <div className='flex flex-col space-y-4 items-start w-full text-lg text-blackmt-10'>
                <Link href='#'>Product</Link>
                <Link href='#'>Community</Link>
                <Link href='#'>Docs</Link>
                <Link href='#'>Templates</Link>
                <Link href='#'>Enterprise</Link>
                <Link href='#'>Pricing</Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className='hidden md:flex md:space-x-4'>
        <Button variant='ghost'>Sign in</Button>
        <Button className='bg-blue-500'>Get Started</Button>
      </div>
    </div>
  );
};

export default ActionBtn;
