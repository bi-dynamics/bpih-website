import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns, data } from "./columns";

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-parallax bg-bottom relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>

        <h1 className="absolute text-5xl md:text-7xl font-bold p-4 sm:p-0">
          Benzel & Partners <br /> INVESTMENTS (Pty) Ltd
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
              Benzel & Partners <br />
              INVESTMENTS (PTY) LTD
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            is also involved in construction, information technology,
            manufacturing, import and export of various goods with different
            size and magnitude, general consultancy, printing and other related
            services.
            <br />
            <br />
            For its successful undertaking of the projects we consistently use
            business acumen, experience and knowledge to help our clients build
            their business.
            <br />
            <br />
            Benzel and partners is among the wholly owned Namibian companies
            adhering to good corporate ethics. It is in good standing with
            social security commission and the receiver of revenue. It is also
            registered with equity commission, SME and Namibian preferential
            procurement corporation.
            <br />
            <br />
            We are also a representative and a local partner of various
            international companies including Marce Firefighting Technology and
            Chadda Power. This association has seen us deliver and supply
            Firefighting trucks to the Ministry of regional, local housing and
            rural development, Namibian Airports Company and City of Windhoek
            fire department. Under the association with international companies
            we also bough in IMISON WALLING TECHNOLOGY in construction industry,
            which is a first of its kind in Namibia. Benzel and Partners
            Investments (Pty) Ltd through BPI Energy Solutions (Pty) Ltd, where
            it has a 100% controlling stake, is owning 5MW through an SPV called
            Ejuva One Solar Energy (Pty) Ltd situated in Gobabis town, Omaheke
            Region. Benzel and Partners Investments (Pty) Ltd is also a
            developer and a shareholder in Ejuva One Solar Energy (Pty) Ltd.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                This is one of the life time landmark milestones project with an
                endless benefits to our country. We have been also involved in
                many projects from organizations and parastatals some of them
                being Telecom Namibia, Parliament of the republic of Namibia
                from both houses that is national assembly and national council,
                construction of Oshakati hospital nuclear medical building,
                supply and delivery of networking and installation of
                information communication technology to the university of
                Namibia.
                <br />
                <br />
                Over the years Benzel and Partners Investments (Pty) Ltd has
                developed a lasting relationship with its partners and customers
                which continuously and further brings it to the lime light of
                Namibian market.
              </p>
              <div className="relative w-full md:w-1/3 aspect-square h-auto">
                <Image
                  src="/benzel-and-partners-investments.png"
                  alt="BENZEL AND PARTNERS INVESTMENTS LOGO"
                  className="object-contain object-center"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit flex flex-col items-center justify-center  sm:px-[64px] lg:px-[100px] pt-16 pb-32 gap-16">
        <h3 className="text-4xl md:text-6xl text-benzelBlue font-semibold">
          Services
        </h3>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 h-fit justify-center px-2 gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/delivery-and-supply-icon.png"
              alt="Supply and Delivery Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Delivery and Supply of Various Products
            </h4>
            <p className="w-fit text-pretty text-left text-primary-foreground text-base md:text-lg">
              We aim to deliver all standard requisitions within the stipulated
              time of receipt of your orders. The supplies you need are
              delivered directly to your door steps in the shortest delivery
              period agreed. In this regard we are proudly Marce Fire Fighting
              Manufacturers&apos; Namibia local partner. In this partnership, we
              have successfully delivered Fire Fighting Trucks to Namibia
              Airports Company and Ministry of Regional and Local Government
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/import-and-export-icon.png"
              alt="Import and Export Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Import and Export
            </h4>
            <p className="w-fit text-pretty text-left text-primary-foreground text-base md:text-lg">
              We are involved in helping our clients import and export their
              products within and outside our borders. This is professionally
              done with our team of experts.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/solar-electricity-icon.png"
              alt="Solar Electricity Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Solar Electricity Generations
            </h4>
            <p className="w-fit text-pretty text-left text-primary-foreground text-base md:text-lg">
              Our company, in partnership with international companies, have
              also joined the Government&apos;s initiative in achieving the
              objectives of vision 2030 by investing in solar energy generating
              systes for cheap green electricity from sunlight. We also offer
              services in Security, Investments, and Manufacturing.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/construction-icon.png"
              alt="Construction Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-lg md:text-2xl h-20 font-bold">
              Construction
            </h4>
            <p className="w-fit text-pretty text-primary-foreground text-left text-base md:text-lg">
              Our team starts with planning, designing, financing and continues
              until the project is built and ready for use. Far from being a
              single activity, large scale construction is a feat of human
              muiltasking. The jobs are managed by our project managers, design
              engineers, construction engineers or project architect. For the
              successful execution of a project, effective planning is
              essential. Our project managers take great care and responsibility
              in considering the zoning requirements, environmental impact of
              the jobs, the successful scheduling, budgeting, construction site
              safety, availability and transportation of building materials,
              logistics and bidding.
            </p>
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
