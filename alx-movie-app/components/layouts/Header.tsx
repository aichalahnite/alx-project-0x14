import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-[#E2D609] hover:text-white transition-colors duration-300">
        CineSeek
      </Link>
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-[#E2D609] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-[#E2D609] transition-colors duration-300">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
