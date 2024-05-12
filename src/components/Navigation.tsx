import Image from "next/image";

export default function Content() {
  return (
    <div className="show-css lg:space-x-26 mb-32 flex flex-row-reverse justify-between pt-10 lg:px-20">
      <div className="my-auto flex flex-col text-center lg:text-right lg:p-10">
        <p className="mb-6 text-5xl font-bold text-[#380c7c]">
          Navigation in Real Time
        </p>
        <p className="">
          Navigation in The app runs by calculating the best possible path
          through our algorithm, which is based on the shortest path algorithm.
          Now you can navigate through the app in real time and reach your
          destination without any hassle.
        </p>
      </div>
      <Image
        alt="woman holding phone"
        className="hidden rounded-2xl object-cover lg:block"
        src="/images/nav.jpeg"
        height={400}
        width={250}
      />
    </div>
  );
}
