import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#1C3D30] text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link 
          href="/"
          className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0"
        >
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <span className="ml-3 text-xl text-[#F6F4EB]">Dev Blogs</span>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end md:ml-auto">
          <Link href="/blog">
            <span className="mx-5 cursor-pointer uppercase text-[#F6F4EB] hover:text-indigo-300">
              Blog
            </span>
          </Link>
          <Link href="/about">
            <span className="mx-5 cursor-pointer uppercase text-[#F6F4EB] hover:text-indigo-300">
              About
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
