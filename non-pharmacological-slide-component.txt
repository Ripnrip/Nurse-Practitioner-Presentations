import React from 'react';

const NonPharmacologicalSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <span className="text-green-600 text-xl">1</span>
              </div>
              <p className="font-bold text-green-800">Allergen Avoidance</p>
            </div>
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Identify potential triggers</li>
              <li>Reduce exposure to dust, pollen, mold, pet dander</li>
              <li>Keep windows closed during high pollen seasons</li>
              <li>Consider HEPA air filtration</li>
              <li>Wear mask during high-exposure activities</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <span className="text-blue-600 text-xl">2</span>
              </div>
              <p className="font-bold text-blue-800">Nasal Saline Irrigation</p>
            </div>
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Recommend daily or PRN use</li>
              <li>Large volume (>200mL) preferred</li>
              <li>Removes allergens from nasal mucosa</li>
              <li>Improves medication efficacy</li>
              <li>Reduces nasal congestion</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                <span className="text-purple-600 text-xl">3</span>
              </div>
              <p className="font-bold text-purple-800">Environmental Modifications</p>
            </div>
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Maintain adequate hydration</li>
              <li>Control humidity levels (40-50%)</li>
              <li>Wash bedding in hot water weekly</li>
              <li>Remove carpeting if possible</li>
              <li>Clean surfaces with damp cloth</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow">
          <p className="font-semibold mb-2">Environmental Control Measures for Common Allergens:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-yellow-600 text-xs">P</span>
              </div>
              <div>
                <p className="font-semibold">Pollen:</p>
                <p>Keep windows closed, use air conditioning, shower after outdoor activities</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-gray-600 text-xs">D</span>
              </div>
              <div>
                <p className="font-semibold">Dust Mites:</p>
                <p>Hypoallergenic bedding covers, reduce humidity, wash bedding regularly</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-orange-600 text-xs">P</span>
              </div>
              <div>
                <p className="font-semibold">Pet Dander:</p>
                <p>Keep pets out of bedroom, HEPA filtration, regular bathing of pets</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="text-green-600 text-xs">M</span>
              </div>
              <div>
                <p className="font-semibold">Mold:</p>
                <p>Fix water leaks promptly, keep humidity low, clean bathroom surfaces regularly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/3 p-4 flex flex-col justify-center">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <p className="font-semibold text-center mb-3">Nasal Saline Irrigation Technique</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-blue-50 rounded-lg flex items-center justify-center mb-1">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Simplified neti pot */}
                  <path d="M30,60 C30,40 70,40 70,60 L70,70 C70,75 65,80 60,80 L40,80 C35,80 30,75 30,70 Z" fill="#e5e7eb" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M60,45 L80,30 L85,35 L65,50 Z" fill="#e5e7eb" stroke="#3b82f6" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-xs text-center">Neti Pot</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-24 w-24 bg-blue-50 rounded-lg flex items-center justify-center mb-1">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  {/* Simplified squeeze bottle */}
                  <rect x="35" y="30" width="30" height="50" rx="15" fill="#e5e7eb" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M50,30 L50,20 L45,15 L55,15 L50,20" fill="#e5e7eb" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M50,20 C45,20 40,25 40,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                  <path d="M50,20 C55,20 60,25 60,30" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-xs text-center">Squeeze Bottle</p>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
            <p className="font-semibold">Recipe for Saline Solution:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>1 cup distilled or boiled water (cooled)</li>
              <li>1/2 teaspoon non-iodized salt</li>
              <li>1/4 teaspoon baking soda (optional)</li>
            </ul>
          </div>
          
          <div className="mt-3 p-2 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
            <p className="font-semibold">Important Safety Notes:</p>
            <ul className="list-disc pl-5 mt-1">
              <li>Use only distilled or boiled water</li>
              <li>Clean irrigation device after each use</li>
              <li>Do not share devices between individuals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonPharmacologicalSlide;