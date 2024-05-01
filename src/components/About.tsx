import Image from "next/image"
// import { MdEmail } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function About(){
    return(
        <div id="about" className="flex flex-col px-14 pt-10 pb-28">
            <div className="flex flex-col">
                <h1 className="font-bold text-5xl mb-5">About Us</h1>
                <p className="mb-8">The developers of the Wander App:</p>
            </div>
            <div className="w-full h-80 flex flex-row justify-center space-x-20">
                <div className="flex flex-col w-60 items-center border border-gray-500 rounded">
                    <Image src={""} alt="profile photo" className="h-4/6"/>
                    <div className="w-full px-3 py-1 h-2/6 flex flex-col space-y-1 pb-3 space-y-2">
                        <div className="flex flex-col space-y-1 w-full">
                            <h1 className="font-bold text-center">Ali Abdullah</h1>
                            <p className="text-sm text-center">Quality Assurance Tester</p>
                        </div>
                        {/* <p className="text-sm text-center">aabdullah.bscs20seecs@seecs.edu.pk</p> */}
                        <div className="w-full flex flex-row space-x-1 items-center justify-center">
                            <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk"><MdAlternateEmail className="w-6 h-6"/></a>
                            <a href=""><FaLinkedin className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 items-center border border-gray-500 rounded">
                    <Image src={""} alt="profile photo" className="h-4/6"/>
                    <div className="w-full px-3 py-1 h-2/6 flex flex-col space-y-1 pb-3 space-y-2">
                        <div className="flex flex-col space-y-1 w-full">
                            <h1 className="font-bold text-center">Amina Wasif</h1>
                            <p className="text-sm text-center">UI/UX Designer</p>
                        </div>
                        {/* <p className="text-sm text-center">aabdullah.bscs20seecs@seecs.edu.pk</p> */}
                        <div className="w-full flex flex-row space-x-1 items-center justify-center">
                            <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk"><MdAlternateEmail className="w-6 h-6"/></a>
                            <a href=""><FaLinkedin className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-60 items-center border border-gray-500 rounded">
                    <Image src={""} alt="profile photo" className="h-4/6"/>
                    <div className="w-full px-3 py-1 h-2/6 flex flex-col space-y-1 pb-3 space-y-2">
                        <div className="flex flex-col space-y-1 w-full">
                            <h1 className="font-bold text-center">Moosah Masood Butt</h1>
                            <p className="text-sm text-center">Software Developer</p>
                        </div>
                        {/* <p className="text-sm text-center">aabdullah.bscs20seecs@seecs.edu.pk</p> */}
                        <div className="w-full flex flex-row space-x-1 items-center justify-center">
                            <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk"><MdAlternateEmail className="w-6 h-6"/></a>
                            <a href=""><FaLinkedin className="w-6 h-6"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}