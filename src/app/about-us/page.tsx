import Image from "next/image";
import aboutUs from "../../../public/about-us.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "Benzel and Partners Investment Holdings (PTY) LTD, a Namibian privately owned company with a hundred percent Namibian ownership was established in 2008 as a close cooperation with a registration number CC2008/3029.",
};

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-about_us_banner bg-center relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>
        <h1 className="absolute text-5xl sm:text-7xl font-bold">About Us</h1>
      </header>
      <section className="w-full h-fit md:px-[32px] md:py-32 grid  lg:grid-cols-2 items-start lg:items-center justify-center">
        <div className="relative h-full w-full lg:h-full">
          <Image
            src={aboutUs}
            alt="About BPIH"
            className="object-cover rounded-md object-bottom grayscale "
            fill
          />
          <div className="w-full h-full absolute bg-benzelBlue opacity-50"></div>
        </div>
        <div className="w-full h-fit p-4 py-16 sm:p-16 flex flex-col items-start justify-start gap-8">
          <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
            <h3 className=" text-benzelRed text-xs sm:text-sm md:text-md">
              BENZEL & PARTNERS INVESTMENT HOLDINGS
            </h3>
            <h2 className="text-xl sm:text-3xl md:text-5xl text-benzelBlue font-semibold">
              Expertise Redefined in Business and IT.
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-500">
            Benzel and Partners Investment Holdings (PTY) LTD (BPIH), a 100%
            Namibian-owned company established in 2008, operates as a holding
            company with a diverse portfolio across technology, construction,
            consulting, manufacturing, import/export, and general supply. Its
            subsidiaries include{" "}
            <span className="font-semibold">
              B.P.I Technologies CC, B.P.I Energy Solutions CC, B.P.I
              Construction CC, B.P.I Supply Autotrader CC, B.P.I Consultants CC,
              and Bach Street Investments Number Ten CC.
            </span>
            <br />
            <br /> BPIH excels in delivering innovative, tailored solutions
            across various sectors, investing heavily in research and
            development to integrate emerging technologies and meet stringent
            customer demands. Known for its commitment to excellence, customer
            satisfaction, and long-term partnerships, BPIH is well-positioned to
            meet future challenges with confidence and adaptability.
          </p>
        </div>
      </section>
      <section className="w-full bg-benzelBlue h-fit flex flex-col items-center justify-center px-4  md:px-[64px] lg:px-[100px] py-32 gap-8">
        <div className="w-full max-w-screen-sm md:max-w-screen-lg flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 md:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/mission-icon.png"
              alt="Our Approach icon"
              width={128}
              height={128}
            />
            <h3 className="text-white text-2xl font-bold">Mission</h3>
            <p className="w-fit text-pretty text-primary-foreground text-center text-base md:text-lg">
              A lot of companies have ignored business ethics and good corporate
              governance in their bid to make quick profits, yet at BPIH we
              thrive to give a service beyond our client&apos;s expectation. Our
              belief is based on the fact that a satisfied customer is the basis
              of our growth.
            </p>
          </div>
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 md:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/values-icon.png"
              alt="Our Experience icon"
              width={128}
              height={128}
            />
            <h3 className="text-white text-2xl font-bold">Values</h3>
            <p className="w-fit text-pretty text-center text-primary-foreground text-base md:text-lg">
              We put our clients first and try to make a long term commitment to
              quality, reliability, efficiency and effectiveness. We believe
              that effectiveness towards customer satisfaction is the essence of
              our growth.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-sm md:max-w-screen-lg flex justify-center gap-8">
          <div className="w-full shadow-md flex flex-col gap-4 items-center justify-start p-8 md:p-16 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/vision-icon.png"
              alt="Our Experience icon"
              width={128}
              height={128}
            />
            <h3 className="text-white text-2xl font-bold">Vision</h3>
            <ul className="w-fit text-base md:text-lg">
              <p className="w-full text-pretty text-left sm:text-center text-primary-foreground font-semibold mb-2">
                To be a market leader in product and service delivery.
                <br />
                <br />
                We intend to achieve this by:
              </p>
              <li className=" list-disc">
                Identifying and anticipating our product and service delivery
                needs and wants and create a product range that exactly matches
                the needs of our clients
              </li>
              <li className=" list-disc">
                Applying business acumen, experience and knowledge to help our
                customers build their business.
              </li>
              <li className=" list-disc">
                By ensuring state of the art technology that enhances efficiency
                and effectiveness in solving our clients&apos; problems.
              </li>
              <li className=" list-disc">
                By employing, training and retaining highly qualified, skilled
                and competent staff with personal commitment.
              </li>
              <li className="list-disc">
                By developing a product/service mix that enhances a mutual
                relationship with our clients.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
