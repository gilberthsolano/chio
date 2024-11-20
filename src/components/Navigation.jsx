import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quienes somos', href: '/info' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Galería', href: '/galeria' },
  //{ name: 'Galería', href: '/tasks-create' },
  //{ name: 'Tareas', href: '/tasks' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#25A6D9]"> {/* Fondo azul */}
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Botón de menú móvil */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Menú de navegación */}
          <ul className={` 
            sm:flex sm:space-x-4 
            ${isOpen ? 'block' : 'hidden'}
            absolute sm:relative 
            top-16 sm:top-0 
            left-0 sm:left-auto 
            w-full sm:w-auto 
            bg-[#25A6D9] sm:bg-transparent 
            pb-4 sm:pb-0 
            space-y-2 sm:space-y-0 
            z-50
          `}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`
                    block px-4 py-2 rounded-md text-sm font-medium 
                    text-white 
                    ${location.pathname === item.href
                      ? 'bg-transparent' // Fondo transparente si está activo
                      : 'hover:bg-transparent hover:text-gray-300' // Efecto de hover elegante
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
