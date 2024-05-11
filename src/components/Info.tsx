import React, { useEffect } from "react";
import { LocateOff, Map, Compass } from "lucide-react";

import { useInView } from "react-intersection-observer";

const Info = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-all ${inView ? "opacity-100" : "opacity-0"} text-black px-4 md:px-16`}
    >
      <div className="flex flex-col items-center space-y-10 py-8 md:py-16">
        <div className="flex flex-col items-center space-y-8 text-center">
          <p className="text-xl text-[#033865]">INDOOR NAVIGATION SYSTEM</p>
          <p className="text-3xl md:text-5xl text-[#380c7c] font-bold">What is Indoor navigation?</p>

          <p className="w-full md:w-6/12 text-[#033865] text-sm md:text-lg">
            Indoor navigation systems help users navigate through indoor spaces
            using digital processes. They resemble outdoor navigation techniques
            like GPS but account for building height and individual rooms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <Feature icon={<Compass className="text-[#b81cd4]" size={40} />} text="Indoor navigation directs users with precision, accounting for building height and individual rooms." />
          <Feature icon={<LocateOff className="text-[#b81cd4]" size={40} />} text="Indoor navigation works where GPS signals are not accessible." />
          <Feature icon={<Map className="text-[#b81cd4]" size={40} />} text="Indoor navigation can use augmented reality for precise, real-world directions." />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex flex-col items-center space-y-4 text-center">
    {icon}
    <span className="text-[#0662b0] text-sm md:text-base">{text}</span>
  </div>
);

export default Info;
