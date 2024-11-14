import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute w-full h-full bg-benzelBlueShade gap-8 z-30 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl md:text-5xl">
        Oops...this page does not exist
      </h2>
      <Link className="font-bold" href="/">
        Return Home
      </Link>
    </div>
  );
}
