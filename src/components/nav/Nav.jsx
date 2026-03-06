import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContactModal from "./ContactModal";

const Nav = () => {
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
      <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-md flex justify-between items-center px-5 md:px-16 h-20">
        <nav className="flex gap-4">
          <button onClick={() => handleScroll("home")} className="hover:text-orange-500 transition">Home</button>
          <button onClick={() => handleScroll("about")} className="hover:text-orange-500 transition">About</button>
          <button onClick={() => handleScroll("projects")} className="hover:text-orange-500 transition">Projects</button>
        </nav>

        <button
          onClick={() => setContactOpen(true)}
          className="md:block bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          Contact me
        </button>
      </header>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
};

export default Nav;