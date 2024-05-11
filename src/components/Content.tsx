import Image from "next/image";

export default function Content() {
  return (
    <div className="show-css mb-32 flex flex-row justify-between lg:space-x-20 lg:px-20 pt-10">
      <div className="flex flex-col my-auto text-center lg:text-left">
        <p className="mb-6 text-5xl font-bold text-[#380c7c]">
          Content Placement
        </p>
        <p className="">
          Content placement in an AR navigation app adds fun by integrating
          engaging elements like gamification, interactive objects, and thematic
          content. Personalized recommendations and social features enhance
          enjoyment, fostering exploration and interaction. These elements turn
          navigation into an immersive and entertaining experience for users.
        </p>
      </div>
      <Image
        alt="woman holding phone"
        className="rounded-2xl object-cover lg:block hidden"
        src="/images/catto.jpeg"
        height={400}
        width={250}
      />
    </div>
  );
}
