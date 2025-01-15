import { ArrowLeft } from "lucide-react";
import { columns, data } from "./columns";
import { DataTable } from "./data-table";
import Image from "next/image";
import Link from "next/link";

const gallery: string[] = [
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies.jpg",
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies-gallery1.jpg",
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies-gallery2.jpg",
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies-gallery3.jpg",
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies-gallery4.jpg",
  "/subsidiaries/bpi-information-technologies/bpi-information-technologies-gallery5.jpg",
];

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-cover bg-fixed bg-technologies_banner bg-top relative after:absolute after:inset-0  after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>

        <h1 className="absolute text-5xl md:text-7xl font-bold p-4 sm:p-0">
          BPI Information <br />
          Technologies CC
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
            <h2 className="text-3xl md:text-5xl text-benzelBlue font-semibold">
              BPI Information Technologies CC
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            B.P.I Technologies, a subsidiary of BPIH established in 2012, excels
            in delivering innovative IT solutions and services, including IT
            products, software development, security systems, networking,
            consultancy, and integration. With a team of highly skilled
            professionals, the company provides state-of-the-art, tailored
            solutions to meet global ICT standards.
            <br />
            <br />
            Notable projects include the Ministry of Defense (supply and
            installation of IT products) and the Adult Education Information
            Management System (AEIMS) for the Ministry of Education. B.P.I
            Technologies also partners with Portugal-based EID for tactical
            communications and systems integration, offering comprehensive
            turnkey solutions.
            <br />
            <br />
            The company has expertise in enterprise data warehousing, revenue
            assurance, fraud detection systems, and firewall solutions for
            telecommunications. It also provides network design, operations, and
            data center solutions, leveraging Microsoft-certified specialists
            for Exchange and Active Directory services.
            <br />
            <br />
            <div className="flex flex-col-reverse md:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                Additionally, B.P.I Technologies has ventured into vehicle
                tracking, fleet, fuel, and oil management, managing over 750
                vehicles for the City of Windhoek. These services ensure
                compliance, cost reduction, and operational efficiency through
                GPS tracking and advanced fleet management solutions. The
                company remains committed to continuous innovation and excellent
                performance.
              </p>
              <div className="relative w-1/3 md:w-2/3 aspect-square h-auto">
                <Image
                  src="/bpi-technologies-logo.png"
                  alt="BPI Information Technologies logo"
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
            alt="BPI Information Technologies"
            className="shadow-2xl brightness-75 hover:brightness-100 transition-all rounded-2xl w-full h-full object-cover"
          />
        ))}
      </section>
      <section className="w-full h-fit flex flex-col items-center justify-center  sm:px-[64px] lg:px-[100px] py-16 gap-16">
        <h3 className=" text-3xl md:text-5xl text-benzelBlue font-semibold">
          Services
        </h3>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 h-fit justify-center px-4 gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/data-migration-icon.png"
              alt="Data Migration Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Data Mirgration
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              Data can be migrated between different storage solutions including
              disk arrays from various manufacturers. Any type of data between
              devises of different manufacturer can be transferred.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/values-icon.png"
              alt="Our Experience icon"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Data Warehousing
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              We also provide our clients with the knowledge on data warehousing
              which incorporates data stores and conceptual, logical and
              physical models to support business goals and end user information
              needs. A data warehouse(DW) is the foundation for successful
              Business.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/web-development-icon.png"
              alt="Web Development Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-lg md:text-2xl h-20 font-bold">
              Web Development Services
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              Web applications are now very popular due to the state or capacity
              of web browsers and the convenience they bring to the clients. The
              key reason for their popularity is the ability to update and
              maintain web applications without distributing and installing
              software on many client computers.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/software-consulting-icon.png"
              alt="Software Consulting Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Software Consulting Services
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              We advice our clients on how to use and to understand our systems
              which we would have build for them. We also advice them on how
              best to use and maintain the software and hardware to the best
              advantage of their organization. We provide a full range of
              consulting services in our solutions.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/computer-programming-icon.png"
              alt="Computer Programming Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-fit font-bold">
              Computer Programming Services
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              Internationally established coding standards are used. The system
              is planned by our highly qualified technicians and systems
              analyst. Our programs are well documented, robust, secure,
              expandable and maintainable.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/software-development-icon.png"
              alt="Software Development Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-fit font-bold">
              Software Development Services
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              We do installation, configuration and data conversion to your new
              software application.
            </p>

            <div className="w-full text-pretty text-left text-primary-foreground">
              <p className="font-semibold mb-2">
                This can be done in two ways:
              </p>
              <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
                <li className=" list-disc">Remotely</li>
                <li className=" list-disc">On-site</li>
              </ul>
            </div>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/computer-repairs-icon.png"
              alt="Computer Repair Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Computer Repairs
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              Our responsibilities may extend to include building or configuring
              new hardware, installing and updating software packages. We also
              create and maintain computer networks.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 lg:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/delivery-and-supply-icon.png"
              alt="Supply and Delivery Services"
              width={128}
              height={128}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Supply and Delivery
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              We supply a range of information technology products. They range
              from Printers, Servers, Laptops, Storage solutions, Power
              solutions, Desktops and various related IT products.
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
