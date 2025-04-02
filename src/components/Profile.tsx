import React, { useState } from 'react';
import { Settings, MapPin, Grid, Calendar, Tag } from 'lucide-react';
import clsx from 'clsx';

type ProfileTab = 'posts' | 'events' | 'promotions';

const Profile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('posts');

  const profile = {
    name: "Mi Negocio",
    username: "@minegocio",
    avatar: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    location: "Madrid, España",
    posts: 24,
    followers: 1250,
    following: 485
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold">{profile.name}</h1>
                <p className="text-gray-600">{profile.username}</p>
                <div className="flex items-center text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{profile.location}</span>
                </div>
              </div>
            </div>
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <Settings className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-around mb-6">
            <div className="text-center">
              <div className="font-bold">{profile.posts}</div>
              <div className="text-gray-600 text-sm">Publicaciones</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{profile.followers}</div>
              <div className="text-gray-600 text-sm">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="font-bold">{profile.following}</div>
              <div className="text-gray-600 text-sm">Siguiendo</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('posts')}
                className={clsx(
                  'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center',
                  activeTab === 'posts'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                <Grid className="h-5 w-5 mr-2" />
                Posts
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={clsx(
                  'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center',
                  activeTab === 'events'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Eventos
              </button>
              <button
                onClick={() => setActiveTab('promotions')}
                className={clsx(
                  'py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors flex items-center',
                  activeTab === 'promotions'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                )}
              >
                <Tag className="h-5 w-5 mr-2" />
                Promos
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            <p className="text-gray-500 text-center py-8">
              No hay contenido para mostrar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;