import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const subsidiaries: {
  logo: string;
  title?: string;
  title_part1?: string;
  title_part2?: string;
  title_color: string;
  bg_color: string;
  description: string;
  href: string;
  image: string;
}[] = [
  {
    logo: "/benzel-and-partners-investments.png",
    title_part1: "Benzel & Partners",
    title_part2: "INVESTMENTS (PTY) LTD",
    title_color: "text-benzelBurgundy",
    bg_color: "bg-benzelBurgundy",
    description:
      "A seasoned procurement and supply chain solutions provider, with a rich history of sourcing and delivering a wide range of products for domestic, industrial, and commercial applications.",
    href: "/subsidiaries/benzel-and-partners-investments",
    image:
      "/subsidiaries/benzel-and-partners/benzel-and-partners-investments-subsidiary.jpg",
  },
  {
    logo: "/bpi-technologies-logo.png",
    title: "BPI Information Technologies CC",
    title_color: "text-benzelOrange",
    bg_color: "bg-benzelOrange",
    description:
      "BPI Information Technology is a leading IT solutions provider. We offer software development, IT consulting, network solutions, and cybersecurity services. Our team delivers innovative solutions, empowering businesses to achieve their goals.",
    href: "/subsidiaries/bpi-information-technologies",
    image:
      "/subsidiaries/bpi-information-technologies/bpi-information-technologies.jpg",
  },
  {
    logo: "/bpi-supplies-autotrader-logo.png",
    title: "BPI Supplies Auto Trader CC",
    title_color: "text-benzelTeal",
    bg_color: "bg-benzelTeal",
    description:
      "Our specialized supply chain solutions provider, offering unique expertise in services including import/export, fuel and oil supply, general merchandise trading, and product delivery. Our team ensures efficient and reliable supply chain operations.",
    href: "/subsidiaries/bpi-supplies-auto-trader",
    image: "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader.jpg",
  },
  {
    logo: "/bpi-energy-solutions-logo.png",
    title: "BPI Energy Solutions (Pty) Ltd",
    title_color: "text-benzelYellow",
    bg_color: "bg-benzelYellow",
    description:
      "A diversified energy solutions provider, with a strategic 34% stake in Ejuve One Solar Energy (Pty) Ltd. This significant investment enables the production of 5MW of clean solar energy in Gobabis, Omakeke region. In addition to solar energy, BPI Energy Solutions is actively exploring opportunities in wind energy, biomass, and mineral resources, while also supplying high-quality solar PV components.",
    href: "/subsidiaries/bpi-energy-solutions",
    image: "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions.jpg",
  },
  {
    logo: "/bpi-construction-logo.png",
    title: "BPI Construction CC",
    title_color: "text-benzelRed",
    bg_color: "bg-benzelRed",
    description:
      "A comprehensive construction solutions provider, specializing in the delivery of high-quality domestic, industrial, and commercial building projects. Our services encompass a wide range of construction activities, including renovations, welding, plumbing, electrical installations, and more.",
    href: "/subsidiaries/bpi-construction",
    image: "/subsidiaries/bpi-construction/bpi-construction.jpg",
  },
  {
    logo: "/bpi-general-trading-logo.png",
    title: "BPI General Trading CC",
    title_color: "text-benzelPurple",
    bg_color: "bg-benzelPurple",
    description:
      "BPI General Trading CC offer a suite of expert advisory services tailored to the unique needs of our clients. Our highly skilled teams possess in-depth knowledge across various fields, including finance, accounting, information technology, human resources, and corporate advisory.",
    href: "/subsidiaries/bpi-general-trading",
    image: "/subsidiaries/bpi-general-trading/bpi-general-trading.jpg",
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
            className="shadow-md bg-slate-200/50 flex flex-col gap-4 pt-0 px-0 pb-8 rounded-2xl w-full"
          >
            <div className="w-full h-48 relative flex items-end justify-start">
              <div className="relative w-full h-full">
                <Image
                  src={subsidiary.image}
                  alt={subsidiary.title!}
                  fill
                  className="h-auto rounded-t-xl object-cover"
                />
                <div className="w-full h-full absolute rounded-t-xl bg-gradient-to-tr from-black/90 to-transparent "></div>
              </div>
              <Image
                src={subsidiary.logo}
                alt={subsidiary.title!}
                width={512}
                height={512}
                className="h-4/5 w-1/3 m-2 absolute object-contain"
              />
            </div>

            <h3
              className={`text-2xl ${subsidiary.title_color} font-semibold px-6 w-full h-fit`}
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
            <p className="text-base text-slate-500 flex-grow w-full px-6">
              {subsidiary.description}
            </p>
            <Link
              key={index}
              href={subsidiary.href}
              className={`w-fit ${subsidiary.bg_color} mt-8 ml-6 rounded-full text-base flex hover:brightness-90 transition-all group items-center justify-center gap-2 px-[32px] py-[18px] font-medium`}
            >
              Learn More
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
