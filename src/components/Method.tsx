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
    <div id="method" className="flex flex-row space-x-6 px-14 pb-20 pt-24">
      <div className="flex w-full flex-col">
        <h1 className="mb-5 text-center text-5xl font-bold text-[#380c7c]">
          Methodology
        </h1>
        <p className="mb-8 text-center text-[#033865]">
          The application core functionality depends upon the following
          components which allow indoor physical spaces to be mapped and
          navigated with the help of interactive AR elements.
        </p>
        <div className="flex w-full flex-row items-center space-x-5">
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber1 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                Location Detection
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Determines the user&apos;s precise location using computer vision and
                AR technology.
              </p>
            </div>
          </div>
          <FaArrowRightLong className="h-12 w-60 text-[#b81cd4]" />
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber2 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                AR Wayfinding
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Guides users through indoor spaces using augmented reality
                overlays and directions.
              </p>
            </div>
          </div>
          <FaArrowRightLong className="h-12 w-60 text-[#b81cd4]" />
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber3 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                Landmark Recognition
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Identifies and provides information about significant landmarks
                in the user&apos;s surroundings.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-8 pr-10">
          <FaArrowDownLong className="h-12 w-60 text-[#b81cd4]" />
        </div>
        <div className="flex w-full flex-row items-center space-x-5">
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber6 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                Contextual Information
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Delivers contextual information about objects and areas as users
                navigate through AR.
              </p>
            </div>
          </div>
          <FaArrowLeftLong className="h-12 w-60 text-[#b81cd4]" />
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber5 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                Route Visualization
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Visualizes recommended routes and directions in the user&apos;s
                physical environment.
              </p>
            </div>
          </div>
          <FaArrowLeftLong className="h-12 w-60 text-[#b81cd4]" />
          <div className="flex w-full flex-col items-center space-y-2 rounded-2xl border border-[#380c7c] bg-[#e6f4ff] px-5 pb-5 pt-3 transition ease-in-out hover:bg-[#e6f4ff]">
            <TbSquareRoundedNumber4 className="h-12 w-12 text-[#380c7c]" />
            <div className="flex w-full flex-col space-y-2">
              <h1 className="text-center text-sm font-bold text-[#033865]">
                Interactive Maps
              </h1>
              <p className="text-center text-sm text-[#032e52]">
                Displays an interactive AR map with real-time navigation cues
                and points of interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-2/5">
                <Image src={""} alt="pic" />
            </div> */}
    </div>
  );
}
