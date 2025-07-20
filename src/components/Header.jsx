import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const nav = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center h-16">

        <div className="font-bold text-cyan-600 text-2xl">
          <Link to="/">MyBlog</Link>
        </div>

        <nav className="hidden md:flex gap-5 text-cyan-600 font-semibold">
          {nav.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-cyan-100 ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
          {
            user ? 
            (<button onClick={logout} className="bg-white text-cyan-600 px-3 py-1 rounded hover:bg-cyan-100">
            Logout
          </button>)
          :
        <div className="hidden md:flex gap-3 text-white font-medium">
          <Link to="/login" className="bg-white text-cyan-600 px-3 py-1 rounded hover:bg-cyan-100">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-cyan-600 px-3 py-1 rounded hover:bg-cyan-100"
          >
            Sign Up
          </Link>
        </div>
          }

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-cyan-700 text-white px-4 py-2 pb-4 flex flex-col gap-4">
          {nav.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          <div className="border-t border-cyan-500 pt-4 flex flex-col gap-2">
            <Link to="/login" className="text-white" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link
              to="/signup"
              className=" text-white "
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
