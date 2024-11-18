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
          BPI CONSULTANTS
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
              BPI Consultants CC
            </h2>
          </div>
          <div className=" text-base md:text-lg text-slate-500 text-justify">
            B.P.I Consultants was founded in 2012 with registration number
            CC/2012/4902. It is also another arm of BPIH which specializes in
            providing professional advice to client companies. It is manned by
            highly qualified consulting team in various fields including
            finance, accounting, information technology, human resources,
            corporate advisory services and other related services. The
            subsidiary came into being after evaluating the need for the
            provision of offering training to the end user after delivery and
            supply of our products hence reduction in maintenance cost because
            of lack of technical know-how to the end user. We are not limited
            only to providing service to where we would have supplied our
            products, but open to the whole economy including all government
            ministries. We have provided consultants services to UIS village
            council for the compilation of financial statements.
            <br />
            <br />
            <div className="flex flex-col-reverse sm:flex-row w-full items-start justify-between gap-16 ">
              <p className="w-full text-justify">
                We are looking for a bright future in the consultants services
                as we have a qualified and an experienced team in this field.
                The company complies with all statutory regulations both from
                social security commission and the receiver of revenue, with SME
                certificates and employment equity.
              </p>
              <div className="relative w-1/3 aspect-square h-auto">
                <Image
                  src="/bpi-consultants-logo.png"
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
        <div className="w-full grid md:grid-cols-3 h-fit justify-center px-2 gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-6 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/corporate-financial-services-icon.png"
              alt="Corporate Financial Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-lg md:text-2xl h-20 font-bold">
              Corporate Financial Services
            </h4>
            <p className="w-fit text-pretty text-primary-foreground text-left text-base md:text-lg">
              We are innovative providers of financial services to business
              owners and their companies. When a company is facing financial
              problems, whether it concerns cash flow shortfall, falling sales
              or excessive debt, we deliver restructuring solutions designed to
              build a platform for swift recovery and sustained success. We
              offer transaction service support in acquisition, disposals,
              strategic alliances and access to global capital markets.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-6 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/market-advisory-icon.png"
              alt="Market Advisory services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Market Advisory
            </h4>
            <p className="w-fit text-pretty text-left text-primary-foreground text-base md:text-lg">
              We offer hands-on, customer focused marketing consultancy. We are
              dedicated to assist companies boost their performances in the
              market place through innovative thinking and proven methodologies.
              Our specialized individuals analyze the client&apos;s business
              structure and develop and maintain ongoing strategic marketing
              plans.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-6 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/accounting-services-icon.png"
              alt="Accounting Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Accounting Services
            </h4>
            <p className="w-fit text-pretty text-left text-primary-foreground text-base md:text-lg">
              We offer specialist services in bookkeeping, payroll and income
              tax preparation. While concentrating on your core business,
              financial record accounting can easily become overwhelming, out of
              date or poorly prepared records can actually hinder your business.
              We can easily solve this anomaly by offering high quality service
              for all your business at affordable rates. Professionally prepared
              financial records provide powerful information tools that enable
              you to better manage your business.
            </p>
          </div>
          <div className="w-full md:col-span-3 shadow-md flex flex-col gap-8 items-center justify-start p-6 sm:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/icons/project-management-icon.png"
              alt="Project Management Services"
              width={512}
              height={512}
              className="w-[64px] md:w-32 md:h-32 h-[64px]"
            />
            <h4 className="text-white text-center text-lg md:text-2xl h-20 font-bold">
              Project Management
            </h4>
            <p className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
              Our innovative group of professionals offer project management
              services. We apply processes, methods, knowledge, skills and
              experience to achieve the project objectives. As we all know that
              a project is a unique, transient endeavor, undertaken to achieve
              planned objectives, which could be defined in terms of outputs,
              outcomes or benefits, our team of highly specialist are always
              better placed to undertake and manage projects of any value and
              magnitude.
            </p>

            <div className="w-full max-w-screen-lg text-pretty text-left text-primary-foreground">
              <p className="font-semibold mb-2">
                Our team dwells on the following project management core
                components:
              </p>
              <ul className="w-full pl-4 max-w-screen-lg text-pretty text-left text-primary-foreground text-base md:text-lg">
                <li className=" list-disc">
                  Defining the reason why the project is necessary.
                </li>
                <li className=" list-disc">
                  Capturing project requirements, specifying quality of the
                  deliverables, estimating resources and time scale.
                </li>
                <li className=" list-disc">
                  Preparing a business case to justify the investment.
                </li>
                <li className=" list-disc">
                  Securing corporate agreement and funding.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
