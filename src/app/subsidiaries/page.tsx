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
      "A seasoned procurement and supply chain solutions provider, with a rich history of sourcing and delivering a wide range of products for domestic, industrial, and commercial applications.",
    href: "benzel-and-partners-investments",
  },
  {
    logo: "/bpi-technologies-logo.png",
    title: "BPI Information Technologies CC",
    title_color: "text-benzelOrange",
    bg_color: "bg-benzelOrange",
    description:
      "BPI Information Technology is a leading IT solutions provider. We offer software development, IT consulting, network solutions, and cybersecurity services. Our team delivers innovative solutions, empowering businesses to achieve their goals.",
    href: "bpi-information-technologies",
  },
  {
    logo: "/bpi-supplies-autotrader-logo.png",
    title: "BPI Supply Autotrader CC",
    title_color: "text-benzelTeal",
    bg_color: "bg-benzelTeal",
    description:
      "Our specialized supply chain solutions provider, offering unique expertise in services including import/export, fuel and oil supply, general merchandise trading, and product delivery. Our team ensures efficient and reliable supply chain operations.",
    href: "bpi-supply-autotrader",
  },
  {
    logo: "/bpi-energy-solutions.png",
    title: "BPI Energy Solutions (Pty) Ltd",
    title_color: "text-benzelYellow",
    bg_color: "bg-benzelYellow",
    description:
      "A diversified energy solutions provider, with a strategic 34% stake in Ejuve One Solar Energy (Pty) Ltd. This significant investment enables the production of 5MW of clean solar energy in Gobabis, Omakeke region. In addition to solar energy, BPI Energy Solutions is actively exploring opportunities in wind energy, biomass, and mineral resources, while also supplying high-quality solar PV components.",
    href: "bpi-energy-solutions",
  },
  {
    logo: "/bpi-construction-logo.png",
    title: "BPI Construction CC",
    title_color: "text-benzelRed",
    bg_color: "bg-benzelRed",
    description:
      "A comprehensive construction solutions provider, specializing in the delivery of high-quality domestic, industrial, and commercial building projects. Our services encompass a wide range of construction activities, including renovations, welding, plumbing, electrical installations, and more.",
    href: "bpi-construction",
  },
  {
    logo: "/bpi-general-trading-logo.png",
    title: "BPI General Trading CC",
    title_color: "text-benzelPurple",
    bg_color: "bg-benzelPurple",
    description:
      "BPI General Trading CC offer a suite of expert advisory services tailored to the unique needs of our clients. Our highly skilled teams possess in-depth knowledge across various fields, including finance, accounting, information technology, human resources, and corporate advisory.",
    href: "bpi-general-trading",
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
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
                width={128}
                height={128}
                className="h-1/4 object-contain"
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
              <p className="text-base text-slate-500 flex-grow w-full">
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
