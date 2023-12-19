import React from 'react';
import Image from 'next/image';
const Logo = () => {
  return (
    <div>
      <Image src='/images/vf-logo.svg' alt='logo' width={100} height={82} />
    </div>
  );
};

export default Logo;
