import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "./data-table";
import { columns, data } from "./columns";

const gallery: string[] = [
  "/subsidiaries/benzel-and-partners/benzel-and-partners-investments-subsidiary.jpg",
  "/subsidiaries/benzel-and-partners/benzel-and-partners-gallery5.jpg",
  "/subsidiaries/benzel-and-partners/benzel-and-partners-gallery2.jpg",
  "/subsidiaries/benzel-and-partners/benzel-and-partners-gallery4.jpg",
  "/subsidiaries/benzel-and-partners/benzel-and-partners-gallery3.jpg",
  "/subsidiaries/benzel-and-partners/benzel-and-partners-gallery1.jpg",
];

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-cover bg-fixed bg-partners_banner bg-top relative after:absolute after:inset-0 after:mix-blend-hard-light">
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
            Benzel and Partners Investments (Pty) Ltd is a Namibian-owned
            company engaged in construction, IT, manufacturing, import/export,
            consulting, printing, and related services. Known for its business
            acumen and adherence to corporate ethics, the company partners with
            international firms like Marce Firefighting Technology and Chadda
            Power, enabling it to deliver firefighting trucks and introduce
            innovations such as IMISON Walling Technology to Namibia. It is a
            developer and shareholder in renewable energy projects, including a
            5MW solar plant in Gobabis through BPI Energy Solutions.
            <br />
            <br />
            <div className="flex flex-col sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                The company has successfully completed notable projects for
                clients such as Telecom Namibia, Parliament of Namibia, and the
                University of Namibia, highlighting its expertise in
                construction and ICT solutions. Benzel and Partners Investments
                is committed to building strong partnerships and contributing to
                Namibia's development while maintaining compliance with
                statutory regulations and promoting local equity.
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
