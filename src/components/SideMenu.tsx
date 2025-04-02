import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import clsx from 'clsx';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    id: 'gastronomia',
    name: 'Gastronomía',
    subcategories: [
      'Restaurantes',
      'Cafeterías',
      'Bares',
      'Comida Rápida',
      'Pastelerías'
    ]
  },
  {
    id: 'viajes',
    name: 'Viajes y Aventuras',
    subcategories: [
      'Agencias de Viajes',
      'Hoteles',
      'Turismo de Aventura',
      'Guías Turísticos'
    ]
  },
  {
    id: 'hogar',
    name: 'Hogar y Decoración',
    subcategories: [
      'Muebles',
      'Decoración',
      'Jardinería',
      'Iluminación'
    ]
  },
  {
    id: 'arte',
    name: 'Arte y Creatividad',
    subcategories: [
      'Galerías',
      'Talleres',
      'Artesanías',
      'Material de Arte'
    ]
  },
  {
    id: 'entretenimiento',
    name: 'Entretenimiento',
    subcategories: [
      'Cines',
      'Teatros',
      'Música',
      'Eventos'
    ]
  },
  {
    id: 'deportes',
    name: 'Deportes y Fitness',
    subcategories: [
      'Gimnasios',
      'Tiendas Deportivas',
      'Clubes',
      'Entrenadores'
    ]
  }
];

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Side Menu */}
      <div
        className={clsx(
          'fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform z-50',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Directorio de Negocios</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-600 hover:text-blue-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {categories.map((category) => (
            <div key={category.id} className="border-b border-gray-200">
              <Link
                to={`/directory?category=${category.id}`}
                className="block p-4 hover:bg-gray-50"
                onClick={onClose}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <div className="mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/directory?category=${category.id}&subcategory=${encodeURIComponent(subcategory)}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                      onClick={onClose}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;