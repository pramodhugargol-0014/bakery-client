import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">Fortune Teller</Link>
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-cyan-400 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
