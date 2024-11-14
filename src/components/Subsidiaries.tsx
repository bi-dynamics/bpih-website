import Link from "next/link";
import Image from "next/image";

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
    title_part2: "INVESTMENTS (PTY) LTD",
    title_color: "text-benzelBurgundy",
    bg_color: "bg-benzelBurgundy",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/benzel-and-partners-investments",
  },
  {
    logo: "/bpi-consultants-logo.png",
    title: "BPI CONSULTANTS",
    title_color: "text-benzelPurple",
    bg_color: "bg-benzelPurple",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/bpi-consultants",
  },
  {
    logo: "/bpi-energy-solutions.png",
    title: "BPI Energy Solutions",
    title_color: "text-benzelYellow",
    bg_color: "bg-benzelYellow",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/bpi-energy-solutions",
  },
  {
    logo: "/bpi-construction-logo.png",
    title: "BPI CONSTRUCTION",
    title_color: "text-benzelRed",
    bg_color: "bg-benzelRed",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/bpi-construction",
  },
  {
    logo: "/bpi-supplies-logo.png",
    title: "BPI SUPPLIES",
    title_color: "text-benzelTeal",
    bg_color: "bg-benzelTeal",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/bpi-supplies",
  },
  {
    logo: "/bpi-technologies-logo.png",
    title: "BPI INFORMATION TECHNOLOGIES",
    title_color: "text-benzelOrange",
    bg_color: "bg-benzelOrange",
    description:
      "Has a long history of buying, supply and delivery of various products from domestic, industrial to commercial products.",
    href: "/subsidiaries/bpi-information-technologies",
  },
];

export default function Subsidiaries() {
  return (
    <section className="bg-slate-50 w-full h-fit flex flex-col items-center justify-start px-4 md:px-[64px] lg:px-[100px] py-16 gap-16">
      <h2 className=" text-benzelBlue text-5xl font-semibold">Subsidiaries</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {subsidiaries.map((subsidiary, index) => (
          <div
            key={index}
            className="shadow-md bg-slate-200/50 flex flex-col gap-4 px-6 py-8 rounded-2xl w-full"
          >
            <Image
              src={subsidiary.logo}
              alt={subsidiary.title!}
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
            <p className="text-sm text-black w-full">
              {subsidiary.description}
            </p>
            <Link
              key={index}
              href={subsidiary.href}
              className={`w-fit ${subsidiary.bg_color} mt-8 rounded-full text-base flex items-center justify-center gap-2 px-[32px] py-[18px] font-medium`}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
