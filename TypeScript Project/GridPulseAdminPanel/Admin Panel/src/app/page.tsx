import { AccordionDemo } from '@/components/Accodion';
import { Component } from '@/components/Charts';
import { TableDemo } from '@/components/RecordData';

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-4 gap-2 h-screen over overflow-y-hidden'>
        <div className='col-span-3 h-full'>
          <Component />
          <div className='m-2'></div>
          <TableDemo />
        </div>
        <div className='col-span-1 h-full'>
          <AccordionDemo />
        </div>
      </div>
    </>
  );
}
