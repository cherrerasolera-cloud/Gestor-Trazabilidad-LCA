import React from 'react';
import { MOCK_CERTIFICATES } from '../constants';
import { FileText, Download, Share2, ShieldCheck } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Certificados Ambientales</h1>
        <p className="text-gray-400">Documentación de trazabilidad y reporte de huella de carbono verificado.</p>
      </div>

      <div className="grid gap-4">
        {MOCK_CERTIFICATES.map((cert) => (
          <div key={cert.id} className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-gray-600 transition-all group">
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-background rounded-lg border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <FileText className="text-gray-500 group-hover:text-primary transition-colors" size={32} />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-mono font-semibold text-lg">{cert.id}</h3>
                  <span className="bg-emerald-500/10 text-emerald-500 text-xs px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck size={12} /> Verificado
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-1">Emitido a: <span className="text-gray-300">{cert.recipient}</span></p>
                <div className="text-xs font-mono text-gray-500">Hash: {cert.verificationHash}</div>
              </div>
            </div>

            <div className="flex items-center gap-8 w-full md:w-auto border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-8">
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Residuo</div>
                <div className="font-mono text-white font-medium">{cert.totalVolume} kg</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">CO2e Evitado</div>
                <div className="font-mono text-emerald-400 font-bold">{cert.emissionsAvoided} kg</div>
              </div>
              
              <div className="flex gap-2">
                 <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Descargar PDF">
                    <Download size={20} />
                 </button>
                 <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors" title="Compartir">
                    <Share2 size={20} />
                 </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};