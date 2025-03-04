import Link from "next/link";

const NAV_ITEMS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#resume", label: "Resume" },
  { href: "/#projects", label: "Projects" },
];

function Navbar() {
  return (
    <nav className="bg-transparent py-5">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="text-3xl font-bold text-[#16f2b3] hover:text-pink-600 transition-colors duration-300"
        >
          Nitesh Shukla
        </Link>

        <ul className="flex flex-col md:flex-row md:items-center md:gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-md text-white hover:text-pink-600 transition-colors duration-300 no-underline outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;