import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-600 via-blue-700 to-purple-800 text-white py-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/20 pb-6">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">MyBlog</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-5 text-sm">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/blogs" className="hover:text-yellow-300">Blogs</Link>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
          <Link to="/services" className="hover:text-yellow-300">Services</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
        </nav>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300"><Facebook size={18} /></a>
          <a href="#" className="hover:text-yellow-300"><Twitter size={18} /></a>
          <a href="#" className="hover:text-yellow-300"><Instagram size={18} /></a>
          <a href="#" className="hover:text-yellow-300"><Linkedin size={18} /></a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto text-center text-white/70 text-xs pt-4">
        © {new Date().getFullYear()} MyBlog. All Rights Reserved.
      </div>
    </footer>
  );
}
