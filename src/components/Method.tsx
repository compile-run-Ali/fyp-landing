import { TbSquareRoundedNumber1 } from "react-icons/tb";
import { TbSquareRoundedNumber2 } from "react-icons/tb";
import { TbSquareRoundedNumber3 } from "react-icons/tb";
import { TbSquareRoundedNumber4 } from "react-icons/tb";
import { TbSquareRoundedNumber5 } from "react-icons/tb";
import { TbSquareRoundedNumber6 } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Methodology() {
  return (
    <div id="method" className="flex flex-col items-center px-4 py-8 lg:flex-row lg:space-x-6 lg:px-14 lg:pb-20 lg:pt-24">
      <div className="flex flex-col lg:w-full">
        <h1 className="mb-5 text-3xl font-bold text-[#380c7c] text-center lg:text-left">Methodology</h1>
        <p className="mb-8 text-[#033865] text-center lg:text-left">
          The application core functionality depends upon the following components which allow indoor physical spaces to be mapped and navigated with the help of interactive AR elements.
        </p>
        <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-5">
          <MethodologyItem
            number={<TbSquareRoundedNumber1 className="h-12 w-12 text-[#380c7c]" />}
            title="Location Detection"
            description="Determines the user's precise location using computer vision and AR technology."
          />
          <FaArrowRightLong className="hidden lg:block h-12 w-60 text-[#b81cd4]" />
          <FaArrowDownLong className="lg:hidden h-12 w-60 mx-auto text-[#b81cd4]" />
          <MethodologyItem
            number={<TbSquareRoundedNumber2 className="h-12 w-12 text-[#380c7c]" />}
            title="AR Wayfinding"
            description="Guides users through indoor spaces using augmented reality overlays and directions."
          />
          <FaArrowRightLong className="hidden lg:block h-12 w-60 text-[#b81cd4]" />
          <FaArrowDownLong className="lg:hidden h-12 w-60 mx-auto text-[#b81cd4]" />
          <MethodologyItem
            number={<TbSquareRoundedNumber3 className="h-12 w-12 text-[#380c7c]" />}
            title="Landmark Recognition"
            description="Identifies and provides information about significant landmarks in the user's surroundings."
          />
        </div>
        <div className="flex justify-end py-8 lg:pr-10">
          <FaArrowDownLong className="h-12 w-60 lg:mx-0 mx-auto text-[#b81cd4]" />
        </div>
        <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-5">
          <MethodologyItem
            number={<TbSquareRoundedNumber6 className="h-12 w-12 text-[#380c7c]" />}
            title="Contextual Information"
            description="Delivers contextual information about objects and areas as users navigate through AR."
          />
          <FaArrowLeftLong className="hidden lg:block h-12 w-60 text-[#b81cd4]" />
          <FaArrowDownLong className="lg:hidden mx-auto h-12 w-60 text-[#b81cd4]" />
          <MethodologyItem
            number={<TbSquareRoundedNumber5 className="h-12 w-12 text-[#380c7c]" />}
            title="Route Visualization"
            description="Visualizes recommended routes and directions in the user's physical environment."
          />
          <FaArrowLeftLong className="hidden lg:block h-12 w-60 text-[#b81cd4]" />
          <FaArrowDownLong className="lg:hidden mx-auto h-12 w-60 text-[#b81cd4]" />
          <MethodologyItem
            number={<TbSquareRoundedNumber4 className="h-12 w-12 text-[#380c7c]" />}
            title="Interactive Maps"
            description="Displays an interactive AR map with real-time navigation cues and points of interest."
          />
        </div>
      </div>
    </div>
  );
}

function MethodologyItem({ number, title, description }) {
  return (
    <div className="flex flex-col items-center lg:items-start space-y-2 rounded-lg border border-[#380c7c] bg-[#e6f4ff] px-5 py-3 lg:w-auto">
      {number}
      <div className="flex flex-col space-y-2 text-center lg:text-left">
        <h1 className="text-lg font-bold text-[#033865]">{title}</h1>
        <p className="text-sm text-[#032e52]">{description}</p>
      </div>
    </div>
  );
}
