import React from 'react';
import { Heart, MessageCircle, Share2, MapPin, Clock } from 'lucide-react';

const posts = [
  {
    id: 1,
    business: "Café Artesanal La Esquina",
    username: "@cafelaesquina",
    avatar: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    caption: "¡Nuevo menú de temporada! 🍽️ Ven a probar nuestras nuevas creaciones #gastronomia #cafe",
    location: "Madrid, España",
    schedule: "Lun-Sáb: 8:00-20:00",
    likes: 234,
    comments: 45,
    following: false
  },
  {
    id: 2,
    business: "Aventuras Extremas",
    username: "@aventurasextremas",
    avatar: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    caption: "¡Nueva ruta de senderismo disponible! 🏔️ Descubre los paisajes más impresionantes #aventura #naturaleza",
    location: "Barcelona, España",
    schedule: "Lun-Dom: 9:00-18:00",
    likes: 567,
    comments: 89,
    following: true
  }
];

const Social = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Encabezado del post */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.avatar}
                    alt={post.business}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.business}</h3>
                    <p className="text-sm text-gray-500">{post.username}</p>
                  </div>
                </div>
                <button
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                    post.following
                      ? 'bg-gray-100 text-gray-600'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {post.following ? 'Siguiendo' : 'Seguir'}
                </button>
              </div>

              {/* Información adicional */}
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{post.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.schedule}</span>
                </div>
              </div>
            </div>
            
            {/* Imagen del post */}
            <div className="relative aspect-square">
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Acciones e interacciones */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-red-600 transition-colors">
                    <Heart className="h-6 w-6" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </button>
                  <button className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <span className="font-semibold">{post.likes} Me gusta</span>
              </div>

              <div className="space-y-2">
                <p>
                  <span className="font-semibold mr-2">{post.username}</span>
                  {post.caption}
                </p>
                <p className="text-gray-500 text-sm">
                  Ver los {post.comments} comentarios
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;