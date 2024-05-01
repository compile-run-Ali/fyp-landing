import { TbSquareRoundedNumber1 } from "react-icons/tb";
import { TbSquareRoundedNumber2 } from "react-icons/tb";
import { TbSquareRoundedNumber3 } from "react-icons/tb";
import { TbSquareRoundedNumber4 } from "react-icons/tb";
import { TbSquareRoundedNumber5 } from "react-icons/tb";
import { TbSquareRoundedNumber6 } from "react-icons/tb";
import Image from "next/image";

export default function Methodology(){
    return(
        <div id="method" className="flex flex-row px-14 pt-24 pb-20 space-x-6">
            <div className="w-5/5 flex flex-col">
                <h1 className="font-bold text-5xl mb-5">Methodology</h1>
                <p className="mb-8">The application core functionality depends upon the following components which allow indoor physical spaces to be mapped and navigated with the help of interactive AR elements.</p>
                <div className="w-full flex flex-row space-x-5">
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber1 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">Location Detection</h1>
                            <p className="text-sm">Determines the user's precise location using computer vision and AR technology.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber2 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">AR Wayfinding</h1>
                            <p className="text-sm">Guides users through indoor spaces using augmented reality overlays and directions.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber3 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">Landmark Recognition</h1>
                            <p className="text-sm">Identifies and provides information about significant landmarks in the user's surroundings.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber4 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">Interactive Maps</h1>
                            <p className="text-sm">Displays an interactive AR map with real-time navigation cues and points of interest.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber5 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">Route Visualization</h1>
                            <p className="text-sm">Visualizes recommended routes and directions in the user's physical environment.</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-2 border border-gray-500 pt-3 pb-5 px-2 hover:bg-gray-100 transition ease-in-out rounded">
                        <TbSquareRoundedNumber6 className="w-12 h-12 text-[#00a8ba]"/>
                        <div className="w-full flex flex-col space-y-2 px-2">
                            <h1 className="font-bold text-center text-sm">Contextual Information</h1>
                            <p className="text-sm">Delivers contextual information about objects and areas as users navigate through AR.</p>
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