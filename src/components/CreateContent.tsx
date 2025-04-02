import React from 'react';
import { Image, Calendar, Tag } from 'lucide-react';

const CreateContent = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Crear Contenido</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <Image className="h-6 w-6 text-blue-600 mr-3" />
              <span className="font-medium">Crear Publicación</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-purple-600 mr-3" />
              <span className="font-medium">Crear Evento</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
            <div className="flex items-center">
              <Tag className="h-6 w-6 text-green-600 mr-3" />
              <span className="font-medium">Crear Promoción</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;