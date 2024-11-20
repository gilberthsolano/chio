import React from 'react';
import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'; // Importa los íconos

const Footer = () => {
  return (
    <footer className="bg-[#25A6D9] text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF className="h-6 w-6" /> {/* Ícono de Facebook */}
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaWhatsapp className="h-6 w-6" /> {/* Ícono de WhatsApp */}
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaMapMarkerAlt className="h-6 w-6" /> {/* Ícono de Ubicación */}
          </a>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
