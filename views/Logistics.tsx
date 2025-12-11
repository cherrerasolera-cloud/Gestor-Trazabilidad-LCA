import React from 'react';
import { RouteMap } from '../components/RouteMap';
import { MOCK_ROUTE_POINTS, MOCK_RECORDS } from '../constants';
import { StatusBadge } from '../components/ui/StatusBadge';
import { MapPin, Calendar, Truck } from 'lucide-react';

export const Logistics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Logística Inteligente</h1>
          <p className="text-gray-400">Optimización de rutas y gestión de recolecciones.</p>
        </div>
        <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-600 transition-colors">
          <Truck size={16} />
          Optimizar Ruta (VRP)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 space-y-4">
          <RouteMap points={MOCK_ROUTE_POINTS} />
          
          <div className="grid grid-cols-3 gap-4">
             <div className="bg-surface border border-border p-4 rounded-xl text-center">
                <div className="text-gray-400 text-xs mb-1">Distancia Total</div>
                <div className="text-xl font-mono text-white">42.5 km</div>
             </div>
             <div className="bg-surface border border-border p-4 rounded-xl text-center">
                <div className="text-gray-400 text-xs mb-1">Carga Estimada</div>
                <div className="text-xl font-mono text-white">280 kg</div>
             </div>
             <div className="bg-surface border border-border p-4 rounded-xl text-center">
                <div className="text-gray-400 text-xs mb-1">Paradas</div>
                <div className="text-xl font-mono text-white">4</div>
             </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="bg-surface border border-border rounded-xl flex flex-col h-[500px]">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Calendar size={18} />
              Próximas Recolecciones
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {MOCK_RECORDS.map((record) => (
              <div key={record.id} className="bg-background border border-border rounded-lg p-3 hover:border-gray-600 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-white text-sm">{record.generatorName}</span>
                  <StatusBadge status={record.status} />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <MapPin size={12} />
                  <span>Zona Centro</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono text-gray-400">{record.type}</span>
                  <span className="font-mono text-white font-bold">{record.amountKg} kg</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};