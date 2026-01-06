import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white z-50">
  <div className="mx-auto h-full flex items-center justify-between px-4 sm:px-8">
    
    {/* Logo */}
    <div className="text-lg sm:text-xl font-bold truncate">
      <Link href="/">Fortune Teller</Link>
    </div>

    {/* Right side */}
    <ul className="flex items-center space-x-4 sm:space-x-6">
      <li className="text-sm sm:text-base font-semibold whitespace-nowrap">
        {new Date().toLocaleDateString("en-GB")}
      </li>
    </ul>

  </div>
</nav>

  );
};

export default Navbar;
