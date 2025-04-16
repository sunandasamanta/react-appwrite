import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    // { label: "Signup", path: "/signup" },
    { label: "Write", path: "/write" },
    { label: "About", path: "/about" },
    { label: "Join Us!", path: "/auth" },
  ];
  return (
    <nav className="flex justify-between items-center bg-sky-400 p-4 text-white">
		<Link to="/"><h1 className="">My Blog</h1></Link>
      <div className="flex items-center gap-x-4">
        {navItems.map((item, index) => (
          <Link to={item.path} key={index} className={item.path === "/auth" ? "bg-sky-700 px-4 py-1 rounded hover:bg-sky-800 hover:text-sky-300" : "hover:text-sky-800"}>
            <div className="">{item.label}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
