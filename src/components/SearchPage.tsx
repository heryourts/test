import React, { useState } from 'react';
import { Search, MapPin, Star, Users, MessageSquare, Tag, ShoppingBag, Calendar, Percent } from 'lucide-react';
import clsx from 'clsx';

type SearchTab = 'businesses' | 'users' | 'posts' | 'promotions' | 'events' | 'hashtags' | 'products';

interface FilterOption {
  id: string;
  label: string;
}

const filters: Record<SearchTab, FilterOption[]> = {
  businesses: [
    { id: 'category', label: 'Categoría' },
    { id: 'location', label: 'Ubicación' },
    { id: 'rating', label: 'Calificación' },
    { id: 'verified', label: 'Verificados' }
  ],
  users: [
    { id: 'location', label: 'Ubicación' },
    { id: 'interests', label: 'Intereses' },
    { id: 'active', label: 'Activos' }
  ],
  posts: [
    { id: 'date', label: 'Fecha' },
    { id: 'popular', label: 'Populares' },
    { id: 'media', label: 'Tipo de medio' },
    { id: 'business', label: 'Negocio' }
  ],
  promotions: [
    { id: 'active', label: 'Activas' },
    { id: 'category', label: 'Categoría' },
    { id: 'expiring', label: 'Por vencer' }
  ],
  events: [
    { id: 'date', label: 'Fecha' },
    { id: 'category', label: 'Categoría' },
    { id: 'location', label: 'Ubicación' },
    { id: 'price', label: 'Precio' }
  ],
  hashtags: [
    { id: 'trending', label: 'Tendencias' },
    { id: 'category', label: 'Categoría' },
    { id: 'recent', label: 'Recientes' }
  ],
  products: [
    { id: 'category', label: 'Categoría' },
    { id: 'price', label: 'Precio' },
    { id: 'rating', label: 'Calificación' },
    { id: 'availability', label: 'Disponibilidad' }
  ]
};

const tabIcons = {
  businesses: ShoppingBag,
  users: Users,
  posts: MessageSquare,
  promotions: Percent,
  events: Calendar,
  hashtags: Tag,
  products: ShoppingBag
};

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState<SearchTab>('businesses');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={`Buscar ${activeTab}...`}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-lg mb-6">
        <div className="overflow-x-auto">
          <div className="flex p-2 space-x-2">
            {(Object.keys(filters) as SearchTab[]).map((tab) => {
              const Icon = tabIcons[tab];
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={clsx(
                    'flex items-center px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors',
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {filters[activeTab].map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={clsx(
                'px-3 py-1 rounded-full text-sm font-medium transition-colors',
                activeFilters.includes(filter.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center text-gray-500">
          Ingresa un término de búsqueda para ver resultados
        </div>
      </div>
    </div>
  );
};

export default SearchPage;