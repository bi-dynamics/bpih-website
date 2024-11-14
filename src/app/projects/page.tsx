import { Metadata } from "next";
import { columns, data } from "./columns";
import { DataTable } from "./data-table";

export const metadata: Metadata = {
  title: "About Us",

  description:
    "See Our Work in Action. Explore our project portfolio and learn how BPIH delivers excellence. Contact us to discuss your next project.",
};

export default function page() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start">
      <header className="w-full h-[50vh] flex items-center justify-center">
        <div className="w-full h-full bg-fixed bg-parallax bg-bottom relative after:absolute after:inset-0 after:mix-blend-hard-light">
          <div className="w-full h-full absolute bg-benzelBlue opacity-95"></div>
        </div>

        <h1 className="absolute text-5xl md:text-7xl font-bold p-4 sm:p-0">
          Projects{" "}
        </h1>
      </header>
      <section className="w-full h-fit flex flex-col gap-8 items-center justify-center py-16 px-4 md:px-[64px] lg:px-[100px]">
        <div className="w-full h-fit flex flex-col items-start justify-start gap-2">
          <h3 className=" text-benzelRed text-xs sm:text-sm md:text-md">
            BENZEL & PARTNERS INVESTMENT HOLDINGS
          </h3>
          <h2 className="text-xl sm:text-3xl md:text-5xl text-benzelBlue font-semibold">
            Year after year, BPIH has provided exceptional quality of services
            and product delivery to the Government of Namibia through its line
            ministries, regional councils and Namibian Private Entities.
          </h2>
        </div>
        <DataTable columns={columns} data={data} />
      </section>
    </div>
  );
}
