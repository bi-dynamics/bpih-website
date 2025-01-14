import Subsidiaries from "@/components/Subsidiaries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subsidiaries",

  description:
    "We drive growth and success in our subsidiaries through strategic guidance and operational oversight.",
};

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-parallax bg-bottom relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>
        <h1 className="absolute text-5xl sm:text-7xl font-bold">
          Subsidiaries
        </h1>
      </header>
      <Subsidiaries />
    </div>
  );
}
