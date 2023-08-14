import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

import { Button } from "@/components/ui/button"

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className='    '>
        {/* <NavBar/> */}

        <div className="flex items-center justify-between  space-x-20 h-screen ">
      <div className='w-7/12 flex-col space-y-8'>
        <p className=" text-6xl font-bold">Get more from physical spaces with indoor navigation</p>
        <p className="text-lg ">
          Just as outdoor navigation and GPS make it easier to find our way,
          digital indoor navigation tools make buildings more accessible and
          productive than ever before.
        </p>{" "}
     <Button variant="default" className="bg-customGreen ">Request a Demo</Button>

      </div>
      <div className=" relative "><Image alt="indoor navigation"className="rounded-xl hover:brightness-90" width={460} height={450}  src="/images/indoor-navigation-intro.jpg"/></div>
</div>
    </div>
  );
};

export default Intro;
