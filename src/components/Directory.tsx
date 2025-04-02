import React, { useState } from 'react';
import { Search, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import clsx from 'clsx';

const categories = [
  { id: 'gastronomia', name: 'Gastronomía' },
  { id: 'viajes', name: 'Viajes y Aventuras' },
  { id: 'hogar', name: 'Hogar y Decoración' },
  { id: 'arte', name: 'Arte y Creatividad' },
  { id: 'entretenimiento', name: 'Entretenimiento' },
  { id: 'deportes', name: 'Deportes y Fitness' }
];

const businesses = [
  {
    id: 1,
    name: "Café Artesanal La Esquina",
    username: "@cafelaesquina",
    category: "gastronomia",
    profileImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
    coverImages: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    location: "Madrid, España",
    schedule: "Lun-Sáb: 8:00-20:00",
    whatsapp: "+34600000000",
    instagram: "@cafelaesquina",
    following: false
  },
  {
    id: 2,
    name: "Aventuras Extremas",
    username: "@aventurasextremas",
    category: "viajes",
    profileImage: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    coverImages: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    ],
    location: "Barcelona, España",
    schedule: "Lun-Dom: 9:00-18:00",
    whatsapp: "+34600000001",
    instagram: "@aventurasextremas",
    following: true
  }
];

const Directory = () => {
  const [activeCategory, setActiveCategory] = useState('gastronomia');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto">
      {/* Buscador */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar negocios..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors',
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Negocios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <div key={business.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Encabezado del negocio */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={business.profileImage}
                  alt={business.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{business.name}</h3>
                  <p className="text-sm text-gray-500">{business.username}</p>
                </div>
              </div>
              <button
                className={clsx(
                  'px-4 py-1 rounded-full text-sm font-medium transition-colors',
                  business.following
                    ? 'bg-gray-100 text-gray-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                )}
              >
                {business.following ? 'Siguiendo' : 'Seguir'}
              </button>
            </div>

            {/* Galería de imágenes */}
            <div className="grid grid-cols-2 gap-1">
              {business.coverImages.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`${business.name} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Información del negocio */}
            <div className="p-4 space-y-3">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{business.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{business.schedule}</span>
              </div>

              {/* Contacto */}
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-700"
                >
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href={`https://instagram.com/${business.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-pink-600 hover:text-pink-700"
                >
                  <Instagram className="h-5 w-5 mr-1" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directory;