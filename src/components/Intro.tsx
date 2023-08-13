import Image from "next/image";
import React from "react";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className=' h-screen  w-full   bg-black bg-gradient-to-r  from-[#000636] to-[#0d657c] '>
        <div className="flex items-center justify-between  mx-32 space-x-20 h-screen ">
      <div className='w-7/12 flex-col space-y-8'>
        <p className=" text-6xl font-bold">Get more from physical spaces with indoor navigation</p>
        <p className="text-lg ">
          Just as outdoor navigation and GPS make it easier to find our way,
          digital indoor navigation tools make buildings more accessible and
          productive than ever before.
        </p>{" "}
      </div>
      <div className=" relative "><Image alt="indoor navigation"className="rounded-xl" width={460} height={450}  src="/images/indoor-navigation-intro.jpg"/></div>
</div>
    </div>
  );
};

export default Intro;
