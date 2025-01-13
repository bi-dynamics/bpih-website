import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns, data } from "./columns";

const gallery: string[] = [
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions.jpg",
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions-gallery2.jpg",
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions-gallery4.jpg",
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions-gallery5.jpg",
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions-gallery3.jpg",
  "/subsidiaries/bpi-energy-solutions/bpi-energy-solutions-gallery1.jpg",
];

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-cover bg-fixed bg-energy_banner bg-center relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>

        <h1 className="absolute text-5xl md:text-7xl font-bold p-4 sm:p-0">
          BPI Energy Solutions (Pty) Ltd
        </h1>
      </header>
      <section className="w-full h-fit flex items-center justify-center md:px-[64px] lg:px-[100px]">
        <div className="w-full max-w-screen-xl h-fit p-4 py-16 sm:p-16 flex flex-col items-start justify-start gap-16">
          <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
            <Link
              href="/subsidiaries"
              className=" flex text-benzelRed text-sm md:text-base items-center justify-center font-semibold gap-2"
            >
              <ArrowLeft /> Back to Subsidiaries
            </Link>
            <h2 className=" text-3xl md:text-5xl text-benzelBlue font-semibold">
              BPI Energy Solutions (Pty) Ltd
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            A subsidiary of BPIH, which was incorporated in 2017 with a
            registration number 2017/1120, is a company involved in Energy and
            all related business, PV Solar farms, wind energy, Biomass energy
            and supply of solar PV parts. BPI Energy Solutions has a 34% share
            of the 5MW through a SPV called Ejuva One Solar Enegy (Pty) Ltd.
            Benzel and Partners has got 100% controlling stake in BPI Energy
            Solution. The solar farm is situated in Gobabis town, Omaheke
            Region.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                The company strives to achieve excellence in its domain of
                activities. The company is committed to provide full customers
                satisfaction and developing a long lasting solution with our
                local and international partners.
              </p>
              <div className="relative w-full sm:w-1/3 aspect-square h-auto">
                <Image
                  src="/bpi-energy-solutions-logo.png"
                  alt="BPI ENERGY SOLUTIONS LOGO"
                  className="object-contain object-center"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f2f2f2] py-16 sm:px-[64px] lg:px-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={512}
            height={512}
            alt="BPI Energy Solutions"
            className="shadow-2xl brightness-75 hover:brightness-100 transition-all rounded-2xl w-full h-full object-cover"
          />
        ))}
      </section>
      <section className="w-full h-fit flex flex-col items-center justify-center  sm:px-[64px] lg:px-[100px] py-16 gap-16">
        <h3 className=" text-3xl md:text-5xl text-benzelBlue font-semibold">
          Projects
        </h3>
        <DataTable columns={columns} data={data} />
      </section>
    </div>
  );
}
