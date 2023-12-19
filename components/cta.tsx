import React from 'react';
import { Shell } from './shell';
import { Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
export default function Cta() {
  return (
    <div className='container relative m-auto mb-10 px-6 pt-10 sm:mb-[64px] sm:pt-[140px] grid lg:grid-cols-2 gap-x-2'>
      <div className='max-w-[400px]'>
        <h2 className='mb-4 text-4xl font-semibold leading-10 md:text-[2.5rem] md:leading-[3rem]'>
          Train chatbots to use your data
        </h2>
        <p className='max-w-[30rem] font-medium text-gray-600'>
          Upload and train your chatbot on custom data sets using Voiceflow
          knowledge base. Generate LLM-powered responses for contextual,
          accurate answers to user questions.
        </p>
      </div>
      <div className='hidden sm:flex lg:block'>
        <video className='rounded-xl border' autoPlay muted loop>
          <source src='/content/cta.mp4' type='video/mp4'></source>
        </video>
      </div>
    </div>
  );
}
