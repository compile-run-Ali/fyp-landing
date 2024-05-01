import React, {useEffect} from "react";
import { LocateOff, Map, Compass } from "lucide-react";

import { useInView } from "react-intersection-observer";
type Props = {};

const Info = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all  ${inView ? 'show-css ' : 'hidden-css'} text-black px-16`}>
      <div className='flex flex-col items-center space-y-10 py-16'>
        <div
         className='flex flex-col items-center space-y-8'>
          <p  
          className='text-xl text-[#033865]'>INDOOR NAVIGATION SYSTEM</p>
          <p className='text-5xl text-[#380c7c] font-bold'>What is Indoor navigation?</p>

          <p className='w-6/12 text-[#033865] text-center text-lg'>
            Indoor navigation systems are any collection of digital processes
            that help someone navigate their way through indoor spaces. They
            bear <span className='text-[#b81cd4]'>some resemblance</span> to
            outdoor navigation techniques like Gps, with a few key differences:
          </p>
        </div>
        <div className='flex flex-row justify-center space-x-10 pt-6 text-center text-sm font-semibold'>
          <div className='flex flex-col items-center space-y-4'>
            <Compass className='text-[#b81cd4]' size={40} />
            <span className="text-[#0662b0]">
              Indoor navigation directs users with a higher degree of precision,
              accounting for building height and individual rooms.
            </span>
          </div>
          <div className='flex flex-col items-center space-y-4 '>
            <LocateOff className='text-[#b81cd4]' size={40} />
            <span className="text-[#0662b0]">
              Indoor navigation is well-suited to give directions where GPS
              signals are not readily accessible.
            </span>
          </div>
          <div className='flex flex-col items-center space-y-4'>
            <Map className='text-[#b81cd4]' size={40} />
            <span className="text-[#0662b0]">
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
