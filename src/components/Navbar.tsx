"use client";

import Image from "next/image";
import BPIH_LOGO from "../../public/BPIH-LOGO.png";
import BPIH_LOGO_MOBILE from "../../public/BPIH-LOGO-MOBILE.png";

import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Mail,
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
        title: "Benzel & Partners Investments",
        href: "/subsidiaries/benzel-and-partners-investments",
      },
      {
        title: "BPI General Trading",
        href: "/subsidiaries/bpi-general-trading",
      },
      {
        title: "BPI Energy Solutions",
        href: "/subsidiaries/bpi-energy-solutions",
      },
      {
        title: "BPI Construction",
        href: "/subsidiaries/bpi-construction",
      },
      {
        title: "BPI Supply Autotrader",
        href: "/subsidiaries/bpi-supply-autotrader",
      },
      {
        title: "BPI Information Technology",
        href: "/subsidiaries/bpi-information-technologies",
      },
    ],
  },
  {
    title: "PROJECTS",
    href: "/projects",
  },
  {
    title: "CONTACT US",
    href: "/#contact-us",
    CTA: true,
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 769px)");
  return isDesktop ? (
    <nav className="sticky top-0 z-50 bg-benzelBlue w-full h-fit shadow-lg">
      <div className="w-full md:flex hidden justify-end gap-4 bg-benzelBlueShade p-2 md:px-[64px] lg:px-[100px]">
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
        <Image
          src={BPIH_LOGO}
          alt="BPIH LOGO"
          height={151}
          width={759}
          className="w-full max-w-80 h-auto"
        />
        <div className="flex gap-4 items-center">
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
                      className="m-2 text-benzelRed"
                      onClick={() => setOpenDropdown((prev) => !prev)}
                    />
                  </Link>
                  <ul className="md:group-hover:block transition-all text-sm absolute hidden bg-benzelBlueShade w-64 space-y-2 py-4 p-2 rounded-md">
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
              <ul className="text-xl flex flex-col gap-2 items-start justify-center text-left">
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/benzel-and-partners-investments"
                >
                  Benzel & Partners Investments
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-consultants"
                >
                  BPI Consultants
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-energy-solutions"
                >
                  BPI Energy Solutions
                </Link>
                <Link
                  className="active:text-benzelRed"
                  href="/subsidiaries/bpi-construction"
                >
                  BPI Construction
                </Link>
              </ul>
            )}
            <Link href="/projects">Projects</Link>
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
