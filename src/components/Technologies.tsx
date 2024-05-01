import Image from "next/image"

export default function Technologies(){
    return(
        <div id="tech" className="flex flex-col items-start space-y-4 px-14 py-20">
            <h1 className="text-5xl text-[#380c7c] font-bold text-center w-full">Technologies</h1>
            <p className="text-center text-[#033865] w-full">Following technologies and tools have been used to develop the Wander application.</p>
            <div className="flex flex-row h-28 space-x-8 pl-16">
                <a href="https://firebase.google.com/s" className="w-1/5 flex flex-col items-center justify-center">
                    <div>
                        <Image className="" src={"/images/firebase.png"} width={300} height={100} alt="abc"/>
                    </div>
                </a>
                <a href="https://immersal.com/" className="w-1/5 flex flex-col items-center justify-center">
                    <div>
                        <Image className="" src={"/images/immersal.png"} width={300} height={100} alt="abc"/>
                    </div>
                </a>
                <a href="https://developers.google.com/ar/" className="w-1/5 flex flex-col items-center justify-center">
                    <div>
                        <Image className="" src={"/images/arcore.png"} width={300} height={300} alt="abc"/>
                    </div>
                </a>
                <a href="https://unity.com/" className="w-1/5 flex flex-col items-center justify-center">
                    <div>
                        <Image className="" src={"/images/U_Logo_Small_Black_CMYK_1C-601x203-9f6b394.png"} width={300} height={100} alt="abc"/>
                    </div>
                </a>
                <a href="https://www.blender.org/" className="w-1/5 flex flex-col items-center justify-center">
                    <div>
                        <Image className="" src={"/images/blender_logo.png"} width={300} height={100} alt="abc"/>
                    </div>
                </a>
                <a href="https://code.visualstudio.com/" className="w-1/5 flex flex-col items-start justify-center">
                    <div>
                        <Image className="" src={"/images/vscode.png"} width={70} height={70} alt="abc"/>
                    </div>
                </a>
                
            </div>
        </div>
    )
}