import Image from "next/image"

export default function Navigation(){
    return(
        <div id="nav" className="flex flex-col px-14 pt-16 pb-20">
            <div>
                <h1 className="text-[#380c7c] font-bold text-5xl mb-5 text-center">Navigation Screenshots</h1>
                <p className="mb-8 text-[#033865] text-center">Following are some screenshots of our application in action.</p>
            </div>
            <div className="w-full flex justify-center">
                <Image src={"/images/nav.png"} width={1000} height={100} alt="navigation"/>
            </div>
        </div>
    )
}