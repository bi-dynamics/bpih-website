"use client";

import Image, { StaticImageData } from "next/image";
import BPIH_LOGO from "./../../public/benzel-and-partners-investment-holdings-logo.png";
import Benzel_And_Partners_Logo from "./../../public/benzel-and-partners-investments.png";
import BPI_SUPPLIES_LOGO from "./../../public/bpi-supplies-autotrader-logo.png";
import BPI_ENERGY_LOGO from "./../../public/bpi-energy-solutions-logo.png";
import BPI_CONSTRUCTION_LOGO from "./../../public/bpi-construction-logo.png";
import BPI_GENERAL_LOGO from "./../../public/bpi-general-trading-logo.png";

import BPI_TECH_LOGO from "./../../public/bpi-technologies-logo.png";
import BPIH_LOGO_MOBILE from "../../public/BPIH-LOGO-MOBILE.png";

import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  MenuIcon,
  Phone,
  XIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface hyperlinksType {
  title: string;
  href: string;
  dropdown?: { title: string; href: string }[];
  CTA?: boolean;
}

const hyperlinks: hyperlinksType[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about-us",
  },
  {
    title: "SUBSIDIARIES",
    href: "/subsidiaries",
    dropdown: [
      {
        title: "Benzel & Partners Investments (Pty) Ltd",
        href: "/subsidiaries/benzel-and-partners-investments",
      },
      {
        title: "BPI Information Technologies CC",
        href: "/subsidiaries/bpi-information-technologies",
      },
      {
        title: "BPI Supplies Auto Trader CC",
        href: "/subsidiaries/bpi-supplies-auto-trader",
      },
      {
        title: "BPI Energy Solutions (Pty) Ltd",
        href: "/subsidiaries/bpi-energy-solutions",
      },
      {
        title: "BPI Construction CC",
        href: "/subsidiaries/bpi-construction",
      },
      {
        title: "BPI General Trading CC",
        href: "/subsidiaries/bpi-general-trading",
      },
    ],
  },

  {
    title: "CONTACT US",
    href: "/#contact-us",
    CTA: true,
  },
];

const logoPaths: Record<string, StaticImageData> = {
  "/": BPIH_LOGO,
  "/subsidiaries/benzel-and-partners-investments": Benzel_And_Partners_Logo,
  "/subsidiaries/bpi-information-technologies": BPI_TECH_LOGO,
  "/subsidiaries/bpi-supplies-auto-trader": BPI_SUPPLIES_LOGO,
  "/subsidiaries/bpi-energy-solutions": BPI_ENERGY_LOGO,
  "/subsidiaries/bpi-construction": BPI_CONSTRUCTION_LOGO,
  "/subsidiaries/bpi-general-trading": BPI_GENERAL_LOGO,
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const currentPath = usePathname();

  const logoSrc = logoPaths[currentPath] || BPIH_LOGO;

  const isDesktop = useMediaQuery("(min-width: 769px)");
  return isDesktop ? (
    <nav className="sticky top-0 z-50 bg-[#f2f2f2] w-full h-fit shadow-lg">
      <div className="w-full md:flex hidden justify-end gap-4 bg-benzelBlueShade p-2 md:px-[64px] lg:px-[100px]">
        <div className="flex items-center gap-1">
          <MapPin fill="white" stroke="var(--benzel-blue)" size={16} />{" "}
          <Link
            href="tel:+26461242038"
            className=" text-sm hover:text-benzelRed transition-colors"
          >
            309 City Centre Building, Werner List Street, Windhoek
          </Link>
        </div>
        <p className="text-sm ">Have any questions?</p>
        <div className="flex items-center gap-1">
          <Phone fill="white" stroke="var(--benzel-blue)" size={16} />{" "}
          <Link
            href="tel:+26461242038"
            className=" text-sm hover:text-benzelRed transition-colors"
          >
            +264 61 24 2038
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Mail fill="white" stroke="var(--benzel-blue)" size={16} />{" "}
          <Link
            href="mailto:+26461242038"
            className=" text-sm hover:text-benzelRed transition-colors"
          >
            info@bpih.com.na
          </Link>
        </div>
      </div>
      <div className="md:px-[64px] lg:px-[100px] px-4 sm:px-[64px] py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoSrc}
            alt="BPIH LOGO"
            height={1454}
            width={2641}
            className="w-full max-w-32 h-auto"
          />
        </Link>
        <div className="flex gap-4 items-center text-benzelBlue">
          {hyperlinks.map((link, index) => {
            if (link.dropdown) {
              return (
                <div key={index} className="relative group">
                  <Link
                    href={link.href}
                    className="hidden md:flex font-bold gap-0 items-center justify-center transition-colors hover:text-benzelRed"
                  >
                    {link.title}
                    <ChevronDown
                      size={24}
                      className=" text-benzelRed"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                    />
                  </Link>
                  <ul className="md:group-hover:block transition-all bg-slate-200 text-sm absolute hidden text-benzelBlue w-80 space-y-2 py-4 p-2 rounded-md">
                    {link.dropdown?.map((dropdownLink, dropdownIndex) => {
                      return (
                        <Link
                          key={dropdownIndex}
                          href={dropdownLink.href as string}
                          className="hidden md:block hover:pl-2 transition-all font-semibold hover:text-benzelRed"
                        >
                          {dropdownLink.title as string}
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              );
            } else if (link.CTA) {
              return (
                <Button
                  key={index}
                  size="lg"
                  className="bg-benzelRed py-[24px] md:py-[32px] px-[18px] rounded-full"
                >
                  <Link
                    href={link.href}
                    className=" text-base flex items-center justify-center gap-2 font-medium"
                  >
                    {link.title}
                    <Phone strokeWidth={0} fill="white" size={16} />
                  </Link>
                </Button>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="hidden md:block font-bold transition-colors hover:text-benzelRed"
                >
                  {link.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </nav>
  ) : (
    <Drawer direction="right">
      <div className=" z-50 p-4 sticky top-0 px-8 bg-benzelBlueShade shadow-md w-full flex justify-between items-center">
        <Link className="w-full" href="/">
          <Image
            src={BPIH_LOGO_MOBILE}
            alt="BPIH LOGO"
            height={151}
            width={180}
            className=" w-16 h-auto"
          />
        </Link>
        <DrawerTrigger className="w-full flex items-center justify-end">
          <MenuIcon size={32} className="text-white" />
        </DrawerTrigger>
      </div>
      <DrawerContent className="bg-benzelBlue border border-benzelBlueShade">
        <DrawerHeader className="flex flex-col">
          <DrawerClose className=" self-end">
            <XIcon size={32} className="text-white" />
          </DrawerClose>
          <DrawerTitle>
            <div className="w-full">
              <Image
                src={BPIH_LOGO}
                alt="BPIH LOGO"
                height={512}
                width={512}
                className="w-full h-auto"
              />
            </div>
          </DrawerTitle>
          <DrawerDescription className="flex flex-col items-start mt-4 gap-4 text-primary-foreground font-semibold text-4xl">
            <Link href="/">Home</Link>
            <Link href="/about-us">About BPIH</Link>
            <Link
              href="/subsidiaries"
              className="flex items-center justify-center"
            >
              Subsidiaries
              {openDropdown ? (
                <ChevronUp
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenDropdown((prev) => !prev)}
                />
              ) : (
                <ChevronDown
                  size={32}
                  className="m-2 text-benzelRed"
                  onClick={() => setOpenDropdown((prev) => !prev)}
                />
              )}
            </Link>
            {openDropdown && (
              <ul className="text-base flex flex-col gap-2 items-start justify-center text-left">
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/benzel-and-partners-investments"
                >
                  Benzel & Partners Investments (Pty) Ltd
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-information-technologies"
                >
                  BPI Information Technologies CC
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-supplies-auto-trader"
                >
                  BPI Supplies Auto Trader CC
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-energy-solutions"
                >
                  BPI Energy Solutions (Pty) Ltd
                </Link>

                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-construction"
                >
                  BPI Construction CC
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-general-trading"
                >
                  BPI General Trading CC
                </Link>
              </ul>
            )}

            <Button
              size="lg"
              className="bg-benzelRed py-[32px] md:py-[32px] px-[18px] rounded-full"
            >
              <Link
                href="/#contact"
                className=" text-4xl flex items-center justify-between gap-2 font-medium"
              >
                Contact
              </Link>
            </Button>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
