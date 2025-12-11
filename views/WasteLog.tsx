import React, { useState } from 'react';
import { Plus, Save, AlertCircle } from 'lucide-react';
import { WasteType, Status } from '../types';

export const WasteLog: React.FC = () => {
  const [formData, setFormData] = useState({
    type: WasteType.ACU,
    amount: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registro guardado en local state (Demo)");
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Registro de Generación</h1>
        <p className="text-gray-400">Documenta la generación de ACU/FOG para iniciar la trazabilidad y cálculo LCA.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-xl p-6 space-y-6">
        
        {/* Type Selection */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-300">Tipo de Residuo</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setFormData({...formData, type: WasteType.ACU})}
              className={`p-4 rounded-lg border text-left transition-all
                ${formData.type === WasteType.ACU 
                  ? 'border-primary bg-primary/5 text-white ring-1 ring-primary' 
                  : 'border-border text-gray-400 hover:border-gray-600'
                }`}
            >
              <div className="font-semibold mb-1">Aceite de Cocina (ACU)</div>
              <div className="text-xs opacity-70">Aceite vegetal usado filtrado.</div>
            </button>
            <button
              type="button"
              onClick={() => setFormData({...formData, type: WasteType.FOG})}
              className={`p-4 rounded-lg border text-left transition-all
                ${formData.type === WasteType.FOG 
                  ? 'border-primary bg-primary/5 text-white ring-1 ring-primary' 
                  : 'border-border text-gray-400 hover:border-gray-600'
                }`}
            >
              <div className="font-semibold mb-1">Grasas (Trampa)</div>
              <div className="text-xs opacity-70">Residuos de trampa de grasa.</div>
            </button>
          </div>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Cantidad (kg)</label>
          <div className="relative">
            <input 
              type="number" 
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono"
              placeholder="0.00"
            />
            <span className="absolute right-4 top-3.5 text-gray-500 font-mono text-sm">kg</span>
          </div>
          <p className="text-xs text-emerald-500 flex items-center gap-1 mt-2">
            <Save size={12} />
            Estimación LCA: {Number(formData.amount || 0) * 2.85} kg CO2e evitados
          </p>
        </div>

        {/* Upload Proof */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Evidencia Fotográfica (Opcional)</label>
          <div className="border-2 border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors cursor-pointer">
            <Plus className="text-gray-500 mb-2" />
            <p className="text-sm text-gray-400">Arrastra fotos aquí o haz clic para subir</p>
          </div>
        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-500 text-xs bg-amber-500/10 px-3 py-2 rounded-md">
                <AlertCircle size={14} />
                <span>La información se registrará de forma inmutable.</span>
            </div>
            <button 
                type="submit"
                className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-lg font-medium transition-colors"
            >
                Registrar y Solicitar Recolección
            </button>
        </div>

      </form>
    </div>
  );
};