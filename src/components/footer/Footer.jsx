import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ContactModal from "../nav/ContactModal";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <footer className="bg-[rgba(10,10,10,0.9)] text-white py-12 px-6 md:px-16 border-t border-white/20 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-orange-600">
        <button
          onClick={() => setContactOpen(true)}
          className="md:block  text-white hover:text-orange-500 transition text-white py-2 font-semibold"
        >
          Contact me
        </button>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/papchenko" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mykola-papchenko-a424423b5/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Page</h3>
          <ul className="flex flex-col gap-2">
            <li><button onClick={() => handleScroll("home")} className="hover:text-orange-500 transition">Home</button></li>
            <li><button onClick={() => handleScroll("about")} className="hover:text-orange-500 transition">About & Skills</button></li>
            <li><button onClick={() => handleScroll("projects")} className="hover:text-orange-500 transition">Projects</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/terms" className="hover:text-orange-500 transition">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-500 transition">Privacy Policy</Link></li>
            <li><Link to="/cookie" className="hover:text-orange-500 transition">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Sumy, Ukraine</p>
          <p>nikopapchenko@gmail.com</p>
        </div>
      </div>

      <div className="mt-12 text-center text-white text-sm">
        © {new Date().getFullYear()} Papchenko.com. All rights reserved.
      </div>
    </footer>
          {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
};

export default Footer;