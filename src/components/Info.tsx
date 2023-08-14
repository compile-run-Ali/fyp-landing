import React from "react";
import { LocateOff, Map, Compass } from "lucide-react";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className='bg-gradient-to-r from from-[#91d7f1] to-[#585fa3] rounded-3xl  text-black shadow-2xl  mb-20 py-20 -mx-20  px-20'>
      <div className='flex flex-col items-center space-y-10 pt-10'>
        <div className='flex flex-col items-center space-y-8'>
          <p className='text-xl'>INDOOR NAVIGATION SYSTEM</p>
          <p className='text-5xl font-bold'>What is Indoor navigation?</p>

          <p className='w-6/12  text-center text-lg'>
            Indoor navigation systems are any collection of digital processes
            that help someone navigate their way through indoor spaces. They
            bear some resemblance to outdoor navigation techniques like Gps,
            with a few key differences:
          </p>
        </div>
        <div className='flex flex-row justify-center space-x-10 pt-6 font-semibold text-center text-sm'>
          <div className='flex flex-col items-center space-y-4'>
              <Compass size={40} color='yellow' />
            <span>
              Indoor navigation directs users with a higher degree of precision,
              accounting for building height and individual rooms.
            </span>
          </div>
          <div className='flex flex-col items-center space-y-4 '>
            <LocateOff size={40} color='yellow' />
            <span>
            Indoor navigation is well-suited to give directions where GPS
            signals are not readily accessible.
            </span>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <Map size={40} color='yellow' />
            <span>
            Indoor navigation can leverage augmented reality to give precise,
            real-world directions without relying on a traditional map view.
</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
