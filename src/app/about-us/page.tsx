import Image from "next/image";
import bannerImage from "../../../public/ABOUT_US_PAGE_BANNER.jpg";
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
        <div className="w-full h-full bg-fixed bg-parallax bg-bottom relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>
        <h1 className="absolute text-5xl sm:text-7xl font-bold">About Us</h1>
      </header>
      <section className="w-full h-fit md:px-[32px] md:py-32 flex flex-col lg:flex-row items-center justify-center">
        <div className="relative w-full h-[50vh] sm:h-[40vh] lg:h-[150vh]">
          <Image
            src={bannerImage}
            alt="About BPIH"
            className="object-cover rounded-md object-bottom grayscale"
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
              Highly qualified individuals with diverse knowledge, expertise and
              experience in business and IT world.{" "}
            </h2>
          </div>
          <p className="text-lg text-slate-500">
            Benzel and Partners Investment Holdings (PTY) LTD, a Namibian
            privately owned company with a hundred percent Namibian ownership
            was established in 2008 as a close cooperation with a registration
            number CC2008/3029. Due to the growth and demands of the business,
            it was changed to a proprietary company (Pty) Ltd in 2011 with a
            registration number 2011/0270. In 2012 it was eventually converted
            into a holding company with a proven track record in the fields of
            Technology, Construction, Consultants, Manufacturing, Import and
            Export, General supplying of various products from domestic,
            industrial to commercial, with all these different portfolios
            falling under its subsidiaries, namely{" "}
            <span className="font-semibold">
              Benzel and Partners Investments(Pty)Ltd, B.P.I Supplies Cc, B.P.I
              Technologies Cc, B.P.I Construction Cc, B.P.I Consultants Cc and
              Bach Street Investments Number Ten Cc.
            </span>
            <br />
            <br /> Operating in different socio economic and political
            environment with an exceptionally demanding market where an attitude
            of innovation, integrity and diligence is permanently required,{" "}
            <span className="font-semibold">
              BPIH has been successful in launching state of the art products,
              services and solutions meeting its customers stringent
              requirements.
            </span>
            <br />
            <br /> This therefore calls for significant investments in research
            and development, ensuring that emerging technologies and techniques
            are consistently incorporated in new products and service delivery.
            <br />
            <br /> Striving to achieve excellence in its domain of activities,
            BPIH has supplied products and services over the years in its
            domestic market. BPIH has a competitive and innovative character as
            well as the flexibility to supply products and services tailored to
            meet our customers specific requirements. We are a company committed
            to provide full customer satisfaction. Being proud of having
            developed long lasting relationship with our international partners
            and clients, we are a company geared to face the challenges of the
            future with optimism and confidence, where we are prepared to go an
            extra mile.
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
            <p className="w-fit text-pretty text-primary-foreground text-center text-sm sm:text-lg">
              A lot of companies have ignored business ethics and good corporate
              governance in their bid to make quick profits, yet at BPIH we
              thrive to give a service beyond our client's expectation. Our
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
            <p className="w-fit text-pretty text-center text-primary-foreground text-sm sm:text-lg">
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
            <ul className="w-fit text-sm sm:text-lg">
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
                and effectiveness in solving our clients' problems.
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