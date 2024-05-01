import { TbSquareRoundedNumber1 } from "react-icons/tb";
import { TbSquareRoundedNumber2 } from "react-icons/tb";
import { TbSquareRoundedNumber3 } from "react-icons/tb";
import { TbSquareRoundedNumber4 } from "react-icons/tb";
import { TbSquareRoundedNumber5 } from "react-icons/tb";
import { TbSquareRoundedNumber6 } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";

export default function Methodology(){
    return(
        <div id="method" className="flex flex-row px-14 pt-24 pb-20 space-x-6">
            <div className="w-full flex flex-col">
                <h1 className="text-[#380c7c] font-bold text-5xl mb-5 text-center">Methodology</h1>
                <p className="mb-8 text-[#033865] text-center">The application core functionality depends upon the following components which allow indoor physical spaces to be mapped and navigated with the help of interactive AR elements.</p>
                <div className="w-full flex flex-row items-center space-x-5">
                    <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber1 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">Location Detection</h1>
                            <p className="text-sm text-center text-[#032e52]">Determines the user's precise location using computer vision and AR technology.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className="w-60 h-12 text-[#b81cd4]"/>
                    <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber2 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">AR Wayfinding</h1>
                            <p className="text-sm text-center text-[#032e52]">Guides users through indoor spaces using augmented reality overlays and directions.</p>
                        </div>
                    </div>
                    <FaArrowRightLong className="w-60 h-12 text-[#b81cd4]"/>
                    <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber3 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">Landmark Recognition</h1>
                            <p className="text-sm text-center text-[#032e52]">Identifies and provides information about significant landmarks in the user's surroundings.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end py-8 pr-10"><FaArrowDownLong className="w-60 h-12 text-[#b81cd4]"/></div>
                <div className="w-full flex flex-row items-center space-x-5">
                <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber6 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">Contextual Information</h1>
                            <p className="text-sm text-center text-[#032e52]">Delivers contextual information about objects and areas as users navigate through AR.</p>
                        </div>
                    </div>
                    <FaArrowLeftLong className="w-60 h-12 text-[#b81cd4]"/>
                    <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber5 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">Route Visualization</h1>
                            <p className="text-sm text-center text-[#032e52]">Visualizes recommended routes and directions in the user's physical environment.</p>
                        </div>
                    </div>
                    <FaArrowLeftLong className="w-60 h-12 text-[#b81cd4]"/>
                    <div className="w-full flex flex-col items-center bg-[#e6f4ff] border border-[#380c7c] space-y-2 pt-3 pb-5 px-5 hover:bg-[#e6f4ff] transition ease-in-out rounded-2xl">
                        <TbSquareRoundedNumber4 className="w-12 h-12 text-[#380c7c]"/>
                        <div className="w-full flex flex-col space-y-2">
                            <h1 className="font-bold text-[#033865] text-center text-sm">Interactive Maps</h1>
                            <p className="text-sm text-center text-[#032e52]">Displays an interactive AR map with real-time navigation cues and points of interest.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col w-2/5">
                <Image src={""} alt="pic" />
            </div> */}
        </div>
    )
}