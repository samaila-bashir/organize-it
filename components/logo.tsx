import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
      <Link href='/'>
        <Image src='/logo.svg' alt='Logo' height={30} width={30} />
      </Link>
      <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}>
        Organize-It
      </p>
    </div>
  );
};
export default Logo;
