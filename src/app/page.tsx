import Image from "next/image";
import Particle from "../../components/Particle";

export default function Home() {
  return (
    <main className="flex items-center w-screen h-screen relative bg-cover bg-[url('/bg-explosion.png')]">
      <div className="absolute inset-0 z-[2] w-full h-full">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-10"></div>
      <Image
        src="/top-left-img.png"
        alt="paint"
        width={230}
        height={230}
        className="absolute left-0 top-0"
      />
      <div className="flex flex-col gap-3 z-10 pl-40 pt-20">
        <h1 className="text-5xl text-white max-w-lg">
          Transofming ideas into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-base text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iste
          labore numquam mollitia voluptas rem, possimus iusto.
        </p>
        <div className="relative w-32 h-32 md:w-40 md:h-40 mt-0">
          <Image
            src="/rounded-text.png"
            alt="spin"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
