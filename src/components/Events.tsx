import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import clsx from 'clsx';

const TabType = {
  EVENTS: 'events',
  PROMOTIONS: 'promotions'
} as const;

type TabType = typeof TabType[keyof typeof TabType];

const events = [
  {
    id: 1,
    title: "Noche de Tapas",
    business: "Café Artesanal La Esquina",
    username: "@cafelaesquina",
    date: "2024-03-25",
    time: "20:00",
    description: "Una noche especial degustando las mejores tapas de la casa, acompañadas de vinos seleccionados.",
    location: "Madrid, España",
    image: "https://images.unsplash.com/photo-1534650075489-3baad0cbb072?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    businessImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
    attendees: 45
  },
  {
    id: 2,
    title: "Desfile de Moda Primavera",
    business: "Boutique Moderna",
    username: "@boutiquem",
    date: "2024-03-28",
    time: "19:00",
    description: "Presentación exclusiva de la nueva colección primavera-verano con diseños únicos y tendencias innovadoras.",
    location: "Barcelona, España",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    businessImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    attendees: 120
  }
];

const promotions = [
  {
    id: 1,
    title: "2x1 en Cafés Especiales",
    business: "Café Artesanal La Esquina",
    username: "@cafelaesquina",
    endDate: "2024-03-31",
    description: "Aprovecha nuestro 2x1 en todos los cafés especiales. ¡Válido todo el mes de marzo!",
    location: "Madrid, España",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    businessImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80"
  },
  {
    id: 2,
    title: "30% OFF en Ropa de Temporada",
    business: "Boutique Moderna",
    username: "@boutiquem",
    endDate: "2024-04-15",
    description: "Gran descuento en toda la colección de primavera. ¡No te lo pierdas!",
    location: "Barcelona, España",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    businessImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.EVENTS);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab(TabType.EVENTS)}
              className={clsx(
                'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                activeTab === TabType.EVENTS
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Eventos
            </button>
            <button
              onClick={() => setActiveTab(TabType.PROMOTIONS)}
              className={clsx(
                'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors',
                activeTab === TabType.PROMOTIONS
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              Promociones
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6">
        {activeTab === TabType.EVENTS ? (
          // Events List
          events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {/* Business Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={event.businessImage}
                    alt={event.business}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{event.business}</h3>
                    <p className="text-sm text-gray-500">{event.username}</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{event.date} - {event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{event.attendees} asistentes</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Me interesa
                </button>
              </div>
            </div>
          ))
        ) : (
          // Promotions List
          promotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                {/* Business Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={promo.businessImage}
                    alt={promo.business}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{promo.business}</h3>
                    <p className="text-sm text-gray-500">{promo.username}</p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-2">{promo.title}</h2>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Válido hasta: {promo.endDate}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{promo.location}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Me interesa la promoción
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;