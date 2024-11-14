import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subsidiaries",

  description:
    "We drive growth and success in our subsidiaries through strategic guidance and operational oversight.",
};

const subsidiaries: {
  logo: string;
  title?: string;
  title_part1?: string;
  title_part2?: string;
  title_color: string;
  bg_color: string;
  description: string;
  href: string;
}[] = [
  {
    logo: "/benzel-and-partners-investments.png",
    title_part1: "Benzel & Partners",
    title_part2: "INVESTMENTS (Pty) Ltd",
    title_color: "text-benzelBurgundy",
    bg_color: "bg-benzelBurgundy",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "benzel-and-partners-investments",
  },
  {
    logo: "/bpi-consultants-logo.png",
    title: "BPI Consultants CC",
    title_color: "text-benzelPurple",
    bg_color: "bg-benzelPurple",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "bpi-consultants",
  },
  {
    logo: "/bpi-energy-solutions.png",
    title: "BPI Energy Solutions (Pty) Ltd",
    title_color: "text-benzelYellow",
    bg_color: "bg-benzelYellow",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "bpi-energy-solutions",
  },
  {
    logo: "/bpi-construction-logo.png",
    title: "BPI Construction CC",
    title_color: "text-benzelRed",
    bg_color: "bg-benzelRed",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "bpi-construction",
  },
  {
    logo: "/bpi-supplies-logo.png",
    title: "BPI Supplies CC",
    title_color: "text-benzelTeal",
    bg_color: "bg-benzelTeal",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "bpi-supplies",
  },
  {
    logo: "/bpi-technologies-logo.png",
    title: "BPI INFORMATION TECHNOLOGIES",
    title_color: "text-benzelOrange",
    bg_color: "bg-benzelOrange",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "bpi-information-technologies",
  },
];

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
      <section className="w-full bg-slate-100 h-fit flex flex-col items-start justify-center  md:px-[64px] lg:px-[100px] sm:py-32 gap-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {subsidiaries.map((subsidiary, index) => (
            <div
              key={index}
              className="shadow-md bg-slate-200/50 flex flex-col gap-4 px-6 py-8 rounded-2xl w-full"
            >
              <Image
                src={subsidiary.logo}
                alt={
                  subsidiary.title ? subsidiary.title : subsidiary.title_part1!
                }
                width={120}
                height={120}
              />
              <h3
                className={`text-2xl ${subsidiary.title_color} font-semibold w-full h-1/5`}
              >
                {subsidiary.title_part1 ? (
                  <>
                    {subsidiary.title_part1}
                    <br />
                    {subsidiary.title_part2}
                  </>
                ) : (
                  subsidiary.title
                )}
              </h3>
              <p className="text-base text-slate-500 w-full">
                {subsidiary.description}
              </p>
              <Link
                key={index}
                href={`subsidiaries/${subsidiary.href}`}
                className={`w-fit ${subsidiary.bg_color} mt-8 rounded-full text-base flex items-center justify-center gap-2 px-[32px] py-[18px] font-medium`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
