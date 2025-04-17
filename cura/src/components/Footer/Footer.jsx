import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-[#A1C877] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">

        {/* Sezione Logo e Descrizione Aziendale */}
        <div className="w-full md:w-1/4 mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-[#A1C877]">CURA</span>
            <span className="text-sm text-gray-500">Soluzioni innovative per il tuo benessere</span>
          </div>
        </div>

        {/* Sezione Link Rapidi */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-2">Link utili</h4>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/About" className="hover:underline">Chi siamo</Link></li>
            <li><Link to="/Profile" className="hover:underline">Contatti</Link></li>
            <li><Link to="/Review" className="hover:underline">Lascia una recensione</Link></li>
          </ul>
        </div>

        {/* Sezione Contatti */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-2">Contatti</h4>
          <p className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:info@cura.com" className="hover:underline text-blue-300">info@cura.com</a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaPhoneAlt />
            <a href="tel:+391234567890" className="hover:underline text-blue-300">+39 123 456 7890</a>
          </p>
        </div>

        {/* Sezione Social Media */}
        <div className="w-full md:w-1/4 mb-6">
          <h4 className="text-lg font-semibold mb-2">Seguici su</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors duration-200"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP ICON */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
        aria-label="Torna su"
      >
        <FaArrowUp size={18} />
      </button>

      {/* Footer base © info */}
      <div className="text-xs text-gray-600 text-center mt-8">
        © {new Date().getFullYear()} CURA — Ultimo aggiornamento: Aprile {new Date().getFullYear()}
      </div>

      {/* Tema */}
      {/* <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400">
          Cambia tema
        </button>
      </div> */}
    </footer>
  );
}


//* npm install react-icons