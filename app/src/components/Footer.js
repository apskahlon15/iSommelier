import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center bg-blue-900 text-white">
      <div className="max-w-screen-lg mx-auto px-4">
        <p className="text-sm md:text-base font-light">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">iSommelier</span>. All rights
          reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="/about"
            className="text-sm md:text-base hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/privacy"
            className="text-sm md:text-base hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm md:text-base hover:underline"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;