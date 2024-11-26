import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-parallax bg-bottom relative after:absolute after:inset-0  after:mix-blend-hard-light">
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
              BPI Supplies Autro Trader CC
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            A subsidiary of BPIH, it was incorporated in 2012 with registration
            number CC/2012/5012. B.P.I Supplies Auto Trader has unique expertise
            in delivery and supply of various products. Our expertise ranges
            from import and export, trading, supply and delivery of various
            products, and other related services. B.P.I Supplies Auto Trader CC
            understands that material supplies are catalyst for economic growth.
            Material suppliers ensures that our primary industries are
            functional and operate smoothly, thus ensures optimal production. We
            at B.P.I Supplies Auto Trader have taken up the challenge and have
            made a strategic decision to operate in both the upstream and
            downstream in terms of exploring all the avenues in the economy. We
            consistently seek to engage and partner up with capable local,
            regional and International partners in order to cater for the ever
            increasing demand for material in our economy. Having been
            recognized by many organizations at the best preferred supplier, we
            do not hesitate to mention these organizations such as Ministry of
            education and Kunene regional council where we have supplied
            promotional and corporate wear, We have also supplied Fencing
            materials to the Ministry of Agriculture, Water and Forestry.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                We are in good standing with social security commission and the
                ministry of finance with all the certificates from SME,
                Employment equity and Namibia preferential procurement
                corporation. The know how in the field of supply and delivery of
                various products enables B.P.I Supply Autotrader to offer
                products fully compliance with the customers specification.
              </p>
              <div className="relative w-full sm:w-1/3 aspect-square h-auto">
                <Image
                  src="/bpi-supplies-logo.png"
                  alt="BPI Supplies CC logo"
                  className="object-contain object-center"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}
