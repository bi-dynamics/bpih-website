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
          BPI Construction CC
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
              BPI Construction CC
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            B.P.I Construction CC was incorporated in 2012 with registration
            number CC/2012/4895. We are a company involved in business which
            ventures from construction of domestic, industrial and commercial
            buildings, renovations, welding, plumbing to electrical and other
            related services. The coordination and management of deadlines is
            crucial to the success of construction operations. Communication
            plays a vital role in providing the means for interchange and
            gathering of information in the day to day running of projects. We
            bring superior craftsmanship to every project whether constructing
            an airport or a three kilometer suspension bridge. We have provided
            services to big organizations such as city of Windhoek in
            construction, alterations and additions to parks division
            Pionerspark, Outapi open market, NHE houses in Omusati region. The
            direction we provide is based on a thorough knowledge of the
            industry and our client&apos;s specific needs.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                We also provide our clients with reliable and expedient
                information throughout project process. The company is in full
                complaint with social security commission and ministry of
                finance. We are also registered as SME and employment equity.
              </p>
              <div className="relative w-full sm:w-1/3 aspect-square h-auto">
                <Image
                  src="/bpi-construction-logo.png"
                  alt="About BPIH"
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
        <div className="w-full grid md:grid-cols-3 h-fit justify-center px-4 gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/electrical-installation-icon.png"
              alt="Electrical Installation Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-lg md:text-2xl h-20 font-bold">
              Electrical Installation and Maintenance
            </h4>
            <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Tubing</li>
              <li className=" list-disc">Wiring</li>
              <li className=" list-disc">Troubleshooting</li>
              <li className=" list-disc">Maintenance</li>
            </ul>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/construction-and-drawing-icon.png"
              alt="Construction and Drawing plans services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Construction and Drawing plans
            </h4>
            <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">
                Construction and development of a new structure
              </li>
              <li className=" list-disc">Renovations</li>
              <li className=" list-disc">
                Alterations to an existing structure
              </li>
              <li className=" list-disc">General brick laying</li>
              <li className=" list-disc">Plastering and flooring</li>
              <li className=" list-disc">Painting</li>
              <li className=" list-disc">Roofing</li>
              <li className=" list-disc">Drawing of building plans</li>
              <li className=" list-disc">Dura walls and pavements</li>
              <li className=" list-disc">Road and bridge construction</li>
            </ul>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/carpentry-and-joinery-icon.png"
              alt="Carpentry and Joinery Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Carpentry and Joinery Services
            </h4>
            <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Cupboards and wooden floor tiles</li>
              <li className=" list-disc">Shop fittings </li>
              <li className=" list-disc">Ceiling</li>
              <li className=" list-disc">Kitchen fittings </li>
              <li className=" list-disc">Table and chairs </li>
            </ul>
          </div>
          <div className="w-full md:col-span-3 shadow-md flex flex-col gap-8 items-center justify-start p-8 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/plumbing-and-joinery-icon.png"
              alt="Plumbing and Joinery Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Plumbing and pipe fitting Services
            </h4>
            <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              <li className=" list-disc">Water soak-away</li>
              <li className=" list-disc">Sewerage</li>
              <li className=" list-disc">Toilet plumbing</li>
              <li className=" list-disc">Drainage installation</li>
              <li className=" list-disc">Piping</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
