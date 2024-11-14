import Link from "next/link";
import Contact from "./Contact";

export default function Footer() {
  return (
    <>
      <Contact />
      <div className="w-full bg-benzelRed py-4 flex items-center justify-center">
        <p className="text-white/80 text-center text-sm">
          Developed by{" "}
          <Link
            href="https://www.bi-dynamics.com"
            target="blank_"
            className="text-white font-semibold hover:text-benzelBlueShade transition-colors"
          >
            BI-Dynamics PTY. Ltd
          </Link>{" "}
          2024 © All rights reserved.
        </p>
      </div>
    </>
  );
}
