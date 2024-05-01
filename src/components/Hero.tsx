import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Hero(){
    return (
        <div id="intro" className="flex flex-row-500 pb-14">
            <div className="w-3/5 flex flex-col space-y-6 justify-start items-start pl-14 py-10 mt-14">
                <h1 className="text-6xl font-bold">Get more from physical spaces with indoor navigation</h1>
                <Typewriter options={
                    {
                        strings: ["Providing indoor navigation through Augmented Reality & VPS technology, placing virtual pointers & markers in real time on phone displays."],
                        autoStart: true,
                        delay: 35,
                        deleteSpeed: 15,
                        loop: true,
                    }
                }/>
                {/* <h1 className="text-5xl font-bold">Revolutionalize your indoor navigation with Wander</h1> */}
                {/* <p>Providing indoor navigation through Augmented Reality & VPS technology, placing virtual pointers & markers in real time on phone displays.</p> */}
                <a href="mailto:aabdullah.bscs20seecs@seecs.edu.pk" className="bg-[#00a8ba] transition ease-in-out hover:bg-white hover:underline text-xs text-black font-medium px-3 py-2">Request a Demo</a>
            </div>
            <div className="w-2/5 flex flex-col items-end justify-start px-14 mt-16">
                <Image src="/images/indoor-navigation-intro.jpg" width={400} height={400} alt='App Screenshot' className='rounded contrast-75 brightness-105 hover:brightness-100'/>
            </div>
        </div>
    )
}