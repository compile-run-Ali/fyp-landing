import Image from "next/image";

export default function Technologies() {
  return (
    <div id="tech" className="flex flex-col items-center space-y-4 px-4 md:px-14 py-8 md:py-20">
      <h1 className="text-3xl md:text-5xl text-[#380c7c] font-bold text-center w-full">Technologies</h1>
      <p className="text-center text-[#033865] w-full">Following technologies and tools have been used to develop the Wander application.</p>
      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <a href="https://firebase.google.com/s" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/firebase.png"} width={200} height={67} alt="Firebase" />
          </div>
        </a>
        <a href="https://immersal.com/" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/immersal.png"} width={200} height={67} alt="Immersal" />
          </div>
        </a>
        <a href="https://developers.google.com/ar/" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/arcore.png"} width={200} height={200} alt="ARCore" />
          </div>
        </a>
        <a href="https://unity.com/" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/U_Logo_Small_Black_CMYK_1C-601x203-9f6b394.png"} width={200} height={67} alt="Unity" />
          </div>
        </a>
        <a href="https://www.blender.org/" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/blender_logo.png"} width={200} height={67} alt="Blender" />
          </div>
        </a>
        <a href="https://code.visualstudio.com/" className="flex flex-col items-center justify-center">
          <div>
            <Image src={"/images/vscode.png"} width={56} height={56} alt="Visual Studio Code" />
          </div>
        </a>
      </div>
    </div>
  );
}
