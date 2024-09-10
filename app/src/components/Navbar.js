import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">Isomiller</Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/wishlist"
              className="text-gray-300 hover:text-white flex items-center"
            >
              <span className="ml-2">Wishlist</span>
              <Image
                src="/images/download.png"
                alt="Wishlist Icon"
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
