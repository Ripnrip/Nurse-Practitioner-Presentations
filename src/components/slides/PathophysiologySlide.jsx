import React from 'react';

const PathophysiologySlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 pr-4">
        <p className="text-xl font-semibold mb-3">Immunologic Mechanisms</p>
        
        <p className="font-semibold mt-3">Early Phase Response:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Allergen exposure → IgE-mediated mast cell activation</li>
          <li>Release of histamine, leukotrienes, prostaglandins</li>
          <li>Symptoms develop within minutes: sneezing, itching, rhinorrhea</li>
        </ul>
        
        <p className="font-semibold mt-4">Late Phase Response:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Occurs 4-8 hours after exposure</li>
          <li>Infiltration of inflammatory cells (eosinophils, basophils, T-cells)</li>
          <li>Predominant symptom: nasal congestion</li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <div className="w-full rounded-lg shadow-lg bg-white p-6">
          <div className="relative">
            {/* Allergen */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-100 rounded-full p-4 border-2 border-yellow-400">
              <div className="text-center">
                <span className="text-2xl">🌿</span>
                <p className="text-xs font-semibold mt-1">Allergen</p>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-16 w-0.5 bg-gray-400 mx-auto my-4 relative top-20">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-400"></div>
            </div>
            
            {/* IgE and Mast Cell */}
            <div className="mt-32 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <span className="text-xl">🔵</span>
                  <p className="text-xs">IgE</p>
                </div>
                <div className="text-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="text-center">
                  <span className="text-xl">🔴</span>
                  <p className="text-xs">Mast Cell</p>
                </div>
              </div>
            </div>
            
            {/* Arrow down */}
            <div className="h-16 w-0.5 bg-gray-400 mx-auto my-4">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-gray-400"></div>
            </div>
            
            {/* Mediators */}
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
              <div className="text-center">
                <p className="font-semibold text-sm">Inflammatory Mediators</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <span>💊</span>
                  <span>🧬</span>
                  <span>🔬</span>
                </div>
                <p className="text-xs mt-2">Histamine, Leukotrienes, Prostaglandins</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-sm italic text-center mt-2">Allergic Reaction Mechanism: Showing IgE-mediated mast cell activation and inflammatory cascade</p>
      </div>
    </div>
  );
};

export default PathophysiologySlide;