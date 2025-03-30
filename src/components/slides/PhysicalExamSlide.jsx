import React from 'react';

const PhysicalExamSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <p className="text-xl font-semibold mb-3 text-center">Vital Signs</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">BP</p>
              <p>140/84 mmHg</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">HR</p>
              <p>57 /min</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">RR</p>
              <p>19 /min</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">O₂ Sat</p>
              <p>97% RA</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">Temp</p>
              <p>98.6°F</p>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded shadow">
              <p className="font-bold">BMI</p>
              <p>32.94 kg/m²</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xl font-semibold mb-3">Pertinent Findings:</p>
          <ul className="list-disc pl-8 space-y-1">
            <li><span className="font-semibold">HEENT:</span> Nasal mucosa pink, moist, patent; no sinus tenderness; no postnasal drip</li>
            <li><span className="font-semibold">Respiratory:</span> Lungs clear to auscultation bilaterally; no wheezes or crackles</li>
            <li><span className="font-semibold">Cardiovascular:</span> Regular rate and rhythm; no murmurs</li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0">
            {/* Simple human body outline */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Head */}
              <circle cx="50" cy="15" r="10" fill="#f3f4f6" stroke="#000" strokeWidth="0.5" />
              {/* Neck */}
              <line x1="50" y1="25" x2="50" y2="30" stroke="#000" strokeWidth="1" />
              {/* Body */}
              <rect x="35" y="30" width="30" height="40" rx="3" fill="#f3f4f6" stroke="#000" strokeWidth="0.5" />
              {/* Arms */}
              <line x1="35" y1="35" x2="20" y2="50" stroke="#000" strokeWidth="1" />
              <line x1="65" y1="35" x2="80" y2="50" stroke="#000" strokeWidth="1" />
              {/* Legs */}
              <line x1="42" y1="70" x2="35" y2="95" stroke="#000" strokeWidth="1" />
              <line x1="58" y1="70" x2="65" y2="95" stroke="#000" strokeWidth="1" />
              
              {/* Examination points with annotations */}
              <circle cx="50" cy="15" r="3" fill="#60a5fa" className="pulse-circle" />
              <text x="65" y="15" fontSize="3">HEENT: Normal</text>
              
              <circle cx="50" cy="45" r="3" fill="#60a5fa" className="pulse-circle" />
              <text x="65" y="45" fontSize="3">Lungs: Clear</text>
              
              <circle cx="40" cy="40" r="3" fill="#60a5fa" className="pulse-circle" />
              <text x="20" y="40" fontSize="3" textAnchor="end">Heart: RRR</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalExamSlide;