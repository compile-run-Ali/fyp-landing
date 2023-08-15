import Image from "next/image";
import React from "react";
import { Building2, HeartPulse, Store } from "lucide-react";
import { useInView } from "react-intersection-observer";
type Props = {};

const Uses = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div
      className={`
    mb-20`}
    >
      <div
        ref={ref}
        className={`${
          inView ? "show-css " : "hidden-css"
        } mb-32 flex flex-row justify-between  `}
      >
        <div className='flex max-w-md  flex-col space-y-8'>
          <p className='text-xl'>INDOOR NAVIGATION MARKET</p>
          <p className='text-5xl font-bold'>Who uses indoor navigation?</p>

          <p className='  '>
            Indoor navigation is not limited to any one business or industry.
            Building managers worldwide are realizing how the technology
            benefits{" "}
            <span className='text-customGreen'> staff and visitors </span>alike
            while increasing overall workplace efficiency. Here are a few common
            examples:
          </p>
        </div>
        <div className='relative h-[400px] w-[600px] '>
          <Image
            fill
            alt='woman holding phone'
            className='rounded-2xl object-cover'
            src='/images/app-user.webp'
          />
        </div>
      </div>
      <div className=' logo flex flex-row justify-between   '>
        <UseCard
          index={1}
          title='Hospitals'
          description='Visitors, patients, and staff can benefit when hospitals and medical facilities implement indoor navigation. Along with helping patients reach treatment rooms, cafeterias, or other facilities, rapid response teams can gain directions to priority areas during an emergency. Integrating navigation with other building systems can freeze elevators for priority traffic if required.'
          isHospital={true}
        />
        <UseCard
          index={2}
          title='Retail'
          description='Retail businesses use indoor navigation to help customers find the right products. After downloading a smartphone app, shoppers can receive directions to specific categories, individual products, indoor facilities such as restrooms, and much more.'
          isRetail={true}
        />
        <UseCard
          index={3}
          title='Enterprises'
          description='Any business can use indoor navigation for training purposes to orient new staff to a particular work site. Navigation apps are also beneficial to maintenance teams who need directions to ticketed areas or specialized access panels.'
          isEnterprise={true}
        />
      </div>
    </div>
  );
};

export default Uses;

type UseCardProps = {
  index: number;
  //make index never equal to another index of a component

  title: string;
  description: string;
} & (
  | { isHospital: true; isRetail?: never; isEnterprise?: never }
  | { isHospital?: never; isRetail: true; isEnterprise?: never }
  | { isHospital?: never; isRetail?: never; isEnterprise: true }
);

const UseCard = (props: UseCardProps) => {
  const size = 70;
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      style={{ transitionDelay: props.index * 0.3 + "s" }}
      className={`
      ${inView ? "show-css " : "hidden-css"} 
      flex flex-col space-y-4   `}
    >
      {props.isHospital && (
        <HeartPulse className='text-customGreen' size={size} />
      )}
      {props.isEnterprise && <Store className='text-customGreen' size={size} />}
      {props.isRetail && <Building2 className='text-customGreen' size={size} />}
      <div className='flex w-80 flex-col'>
        <span className='font-semibold'>{props.title}</span>
        <span>{props.description}</span>
      </div>
    </div>
  );
};
