import Image from "next/image";
import { Download } from "lucide-react";
import Link from "next/link";
import AboutImage from "../../public/about-bpih.jpg";
import Subsidiaries from "../components/Subsidiaries";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Benzel & Partners Investment Holdings",
  },

  description:
    "Benzel & Partners Investment Holdings (BPIH): A leading Namibian company offering diverse IT, technology, and business solutions, backed by a highly skilled team and a commitment to innovation and customer satisfaction.",
};

export default function Home() {
  return (
    <>
      <header className="sm:min-h-[70vh] md:h-[90vh] h-screen w-full flex items-center justify-center relative">
        <Image
          src={"/HERO_BACKGROUND.jpg"}
          alt="Hero background image"
          fill
          className="absolute -z-10 object-cover filter contrast-125 brightness-75 blur-[4px] sm:blur-[2px]"
        />
        <div className="w-full px-4 md:px-[64px] lg:px-[100px] flex flex-col gap-4 items-center sm:items-start">
          <h1 className=" text-7xl font-bold tracking-tight text-center sm:text-left">
            <span className="text-benzelRed">BUSINESS</span> AND IT WORLD
          </h1>
          <p className="text-2xl text-pretty font-medium text-center sm:text-left">
            BPIH strives to be the most compliant company <br /> in product and
            service delivery.
          </p>
          <Link href="/Benzel-Partners-Company-Profile.pdf" target="_blank">
            <Button
              size="lg"
              className="w-fit mt-4 bg-benzelRed rounded-full text-base flex items-center justify-center gap-2 py-[32px] px-[18px] font-medium"
            >
              VIEW COMPANY PROFILE <Download size={24} />
            </Button>
          </Link>
        </div>
      </header>
      <section className="bg-slate-100 w-full h-fit sm:h-fit flex flex-col md:flex-row items-center justify-center gap-16 px-4 md:px-[64px] lg:px-[100px] py-16">
        <div className=" h-[40vh] w-full relative">
          <Image
            src={AboutImage}
            alt="About BPIH"
            fill
            className=" object-cover rounded-md"
          />
        </div>
        <div className="w-full h-full flex flex-col gap-4">
          <h2 className=" text-benzelBlue text-5xl font-semibold">
            About BPIH
          </h2>
          <p className="text-slate-500 text-lg">
            BPIH stands proudly as a holding company with a proven track record
            in the fields of Technology, Construction, Consultancy,
            Manufacturing, Import and Export as well as General supplying of
            various products from domestic, industrial and commercial.
            <br />
            <br />
            Striving to achieve excellence in its domain of activities, BPIH has
            supplied products and services over the years in its domestic
            market.
          </p>
          <Button className="w-fit rounded-full py-[32px] px-[18px]" size="lg">
            <Link className="text-base font-medium" href="/about-us">
              About Us
            </Link>
          </Button>
        </div>
      </section>
      <Subsidiaries />
      <section className="w-full bg-benzelBlue h-fit flex flex-col items-center justify-center px-4  md:px-[64px] lg:px-[100px] py-16 gap-16">
        <h2 className="text-5xl font-semibold">What Makes Us Different?</h2>
        <div className="w-full flex lg:w-2/3 flex-col sm:flex-row gap-8">
          <p>
            The company is manned by highly qualified individuals who have
            diverse knowledge, expertise and experience in business and IT
            world. Integrity, quality and innovation are the characteristics
            that distinguish us as a leading company. Our goal is to provide a
            higher level of service than is found in any other company. We
            consistently bring superior craftsmanship and thrive to meet our
            customers&apos; needs and demands through our quest for efficiency
            and effectiveness. We pay close attention to the fine details while
            thriving to deliver cost effective service to our clients on a long
            term basis. We need to develop a client relationship which is as
            important as the jobs themselves.
          </p>
          <p>
            We pay utmost attention to our service delivery and projects from
            start to finish. Apart from our prominent position in the market, we
            boast of a wide pool of technical and strategic partners with an
            international orientation which further substantiate our ability to
            handle projects of any size and magnitude with unparalleled
            proficiency. Our team understands the importance of quality in all
            aspects of the business and pledges to deliver a quality service to
            your door step that will not only meet but exceed your expectations
          </p>
        </div>
        <h2 className=" text-primary-foreground text-5xl font-semibold mt-16">
          Why Choose Us?
        </h2>
        <div className="w-full flex flex-col sm:flex-row justify-center gap-8">
          <div className="w-full lg:w-1/3 shadow-md flex flex-col gap-4 items-start justify-start p-8 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/our-approach-icon.png"
              alt="Our Approach icon"
              width={36}
              height={36}
            />
            <h3 className="text-white text-2xl font-semibold">OUR APPROACH</h3>
            <p className="w-fit text-pretty text-primary-foreground">
              To us, it&apos;s not just work; we take pride in the solutions we
              deliver. We encourage each other to achieve excellence in all
              endeavours and ensure projects meet our own personal high
              standards.
            </p>
          </div>
          <div className="w-full lg:w-1/3 shadow-md flex flex-col gap-4 items-start justify-start p-8 bg-benzelBlueShade rounded-2xl">
            <Image
              src="/our-expertise-icon.png"
              alt="Our Experience icon"
              width={36}
              height={36}
            />
            <h3 className="text-white text-2xl font-semibold">
              OUR EXPERIENCE
            </h3>
            <p className="w-fit text-pretty">
              To date, we have successfully completed over 50 projects including
              Investments, Construction, Supplies, Technologies and Energy
              Solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
