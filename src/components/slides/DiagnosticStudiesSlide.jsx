import React from 'react';

const DiagnosticStudiesSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <p className="text-xl font-semibold mb-3">Current Visit:</p>
        <div className="bg-green-50 p-3 rounded-lg mb-4 border-l-4 border-green-500">
          <p className="font-bold">Spirometry: Within Normal Limits</p>
          <p className="text-sm mt-1">No evidence of obstructive or restrictive lung disease</p>
        </div>
        
        <p className="text-xl font-semibold mb-3">Previous Tests:</p>
        <div className="bg-green-50 p-3 rounded-lg mb-4 border-l-4 border-green-500">
          <p className="font-bold">COVID-19 Test (2/20/25): Negative</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <p className="font-bold">Chest X-ray (2/20/25): Negative</p>
          <p className="text-sm mt-1">No evidence of pneumonia or other pulmonary pathology</p>
        </div>
        
        <p className="text-xl font-semibold mt-4 mb-2">Assessment:</p>
        <ul className="list-disc pl-8">
          <li>No evidence of obstructive or restrictive lung disease</li>
          <li>No evidence of pneumonia or other pulmonary pathology</li>
          <li>Normal respiratory function supports non-pulmonary etiology</li>
        </ul>
      </div>
      
      <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
        <div className="bg-gray-100 p-2 rounded-lg shadow-md mb-4">
          <p className="text-center font-semibold mb-2">Normal Spirometry Results Example</p>
          <div className="bg-white p-2 rounded">
            <div className="h-48 w-full relative">
              {/* This is a simplified visualization of normal spirometry curve */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10,90 L10,10 L90,10" stroke="#444" strokeWidth="0.5" fill="none" />
                <text x="5" y="50" fontSize="3" textAnchor="middle" transform="rotate(-90, 5, 50)">Volume (L)</text>
                <text x="50" y="95" fontSize="3" textAnchor="middle">Time (seconds)</text>
                
                {/* Normal spirometry curve */}
                <path d="M10,90 C15,90 20,30 25,25 C30,22 40,20 50,20 C60,20 70,25 80,35 C85,40 90,50 90,60" stroke="#60a5fa" strokeWidth="2" fill="none" />
                
                <text x="95" y="60" fontSize="3" fill="#60a5fa">Patient's curve</text>
                <path d="M10,90 C15,90 20,40 25,35 C30,30 40,28 50,28 C60,28 70,32 80,42 C85,50 90,60 90,70" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,1" fill="none" />
                <text x="95" y="70" fontSize="3" fill="#9ca3af">Lower normal limit</text>
              </svg>
            </div>
          </div>
          <p className="text-xs text-center mt-2">Simplified representation - not actual patient data</p>
        </div>
        
        <div className="bg-gray-100 p-2 rounded-lg shadow-md">
          <p className="text-center font-semibold mb-2">Normal Chest X-ray Representation</p>
          <div className="h-48 w-full bg-gray-800 rounded flex justify-center items-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Simplified chest x-ray outline */}
              <rect x="20" y="10" width="60" height="80" rx="30" fill="none" stroke="#fff" strokeWidth="0.5" />
              <path d="M50,10 L50,90" stroke="#fff" strokeWidth="0.5" strokeDasharray="2,1" />
              <ellipse cx="50" cy="35" rx="20" ry="15" fill="none" stroke="#fff" strokeWidth="0.5" />
              <path d="M30,55 C35,65 45,75 50,75 C55,75 65,65 70,55" fill="none" stroke="#fff" strokeWidth="0.5" />
              <text x="50" y="50" fontSize="4" fill="#fff" textAnchor="middle">No abnormalities</text>
            </svg>
          </div>
          <p className="text-xs text-center mt-2">Simplified representation - not actual patient data</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticStudiesSlide;