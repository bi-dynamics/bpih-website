import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns, data } from "./columns";

const gallery: string[] = [
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader.jpg",
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader-gallery1.jpg",
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader-gallery2.jpg",
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader-gallery3.jpg",
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader-gallery4.jpg",
  "/subsidiaries/bpi-supplies/bpi-supplies-auto-trader-gallery5.jpg",
];

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-cover bg-supplies_banner bg-bottom relative after:absolute after:inset-0  after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>

        <h1 className="absolute text-5xl md:text-7xl font-bold p-4 sm:p-0">
          BPI Supplies Auto Trader CC
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
              BPI Supplies Auto Trader CC
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            B.P.I Supplies Auto Trader CC, a subsidiary of BPIH established in
            2012, specializes in the import, export, trading, supply, and
            delivery of various products. Recognizing the critical role of
            material supplies in economic growth, the company operates both
            upstream and downstream to meet the increasing demand for materials
            in the economy.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                B.P.I Supplies Auto Trader partners with local, regional, and
                international organizations to deliver high-quality products,
                fully compliant with customer specifications. Notable clients
                include the Ministry of Education, Kunene Regional Council, and
                the Ministry of Agriculture, Water, and Forestry. The company is
                fully compliant with statutory regulations and is registered as
                an SME, promoting employment equity and preferential
                procurement.
              </p>
              <div className="relative w-full sm:w-1/3 aspect-square h-auto">
                <Image
                  src="/bpi-supplies-autotrader-logo.png"
                  alt="BPI Supplies logo"
                  className="object-contain object-center"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f2f2f2] py-16 px-4 sm:px-[64px] lg:px-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {gallery.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={512}
            height={512}
            alt="Benzel and Partners Investments"
            className="shadow-2xl brightness-75 hover:brightness-100 transition-all rounded-2xl w-full h-full object-cover"
          />
        ))}
      </section>
      <section className="w-full h-fit flex flex-col items-center justify-center  sm:px-[64px] lg:px-[100px] py-16 gap-16">
        <h3 className=" text-3xl md:text-5xl text-benzelBlue font-semibold">
          Services
        </h3>
        <div className="w-full grid md:grid-cols-3 h-fit justify-center gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/delivery-and-supply-icon.png"
              alt="Delivery Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-lg md:text-2xl h-20 font-bold">
              Deliveries
            </h4>
            <ul className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Fencing Materials</li>
              <li className=" list-disc">Building Materials</li>
            </ul>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/general-supplies-icon.png"
              alt="General Supplies"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              General Supplies
            </h4>
            <ul className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Promotional and corporate ware</li>
              <li className=" list-disc">
                Hospital equipment and pharmaceuticals
              </li>
              <li className=" list-disc">School stationery</li>
              <li className=" list-disc">Office and school furniture </li>
              <li className=" list-disc">Cleaning material </li>
              <li className=" list-disc">Uniforms</li>
            </ul>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/road-access-icon.png"
              alt="Road Access Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Road Access
            </h4>
            <ul className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Bituman</li>
              <li className=" list-disc">Paint</li>
              <li className=" list-disc">Cement</li>
              <li className=" list-disc">Driveway bricks</li>
              <li className=" list-disc">Protective clothing</li>
              <li className=" list-disc">Industrial shoes</li>
            </ul>
          </div>
        </div>
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
