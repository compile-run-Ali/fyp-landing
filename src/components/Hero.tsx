import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div id="intro" className="flex flex-col lg:flex-row lg:pb-14 py-14">
      <div className="lg:w-3/5 lg:pr-14 flex flex-col items-center justify-center lg:justify-start lg:items-start lg:space-y-6 lg:py-10 lg:pl-14 space-y-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left text-[#380c7c]">
          Get more from physical spaces with indoor navigation
        </h1>
        <h1 className="lg:h-10 md:h-20 h-10 text-[#033865] text-center lg:text-left">
          <Typewriter
            options={{
              strings: [
                "Providing indoor navigation through Augmented Reality & VPS technology, placing virtual pointers & markers in real time on phone displays.",
              ],
              autoStart: true,
              delay: 35,
              deleteSpeed: 15,
              loop: true,
            }}
          />
        </h1>
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/archive.zip";
            link.download = "archive.zip";
            link.click();
          }}
          className="bg-[#b81cd4] px-3 py-2 text-lg font-semibold text-white transition ease-in-out hover:bg-[#d8f4f4] hover:text-[#b81cd4] hover:underline"
        >
          Download APK
        </button>
      </div>
      <div className="hidden lg:flex lg:w-2/5 mt-8 lg:mt-0 justify-center">
        <img
          src="/images/indoor-navigation-intro.jpg"
          alt="App Screenshot"
          className="w-full h-auto rounded-xl brightness-105 contrast-75 hover:brightness-100"
        />
      </div>
    </div>
  );
}
