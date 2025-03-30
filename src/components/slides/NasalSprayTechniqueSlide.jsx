import React from 'react';

const NasalSprayTechniqueSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <p className="text-xl font-semibold mb-4">STEP-BY-STEP INSTRUCTIONS:</p>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">1. Prepare:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Clear nasal passages (gentle blowing)</li>
            <li>Shake bottle well</li>
          </ul>
        </div>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">2. Position:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Tilt head slightly forward</li>
            <li>Aim spray away from septum toward outer wall</li>
            <li>Use opposite hand for opposite nostril</li>
          </ul>
        </div>
        
        <div className="mb-4 p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">3. Administer:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Apply gentle, consistent pressure</li>
            <li>Breathe in slowly during spray</li>
            <li>Avoid sniffing forcefully</li>
          </ul>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-bold">4. After Use:</p>
          <ul className="list-disc pl-6 mt-1">
            <li>Wait 15 minutes before blowing nose</li>
            <li>Store at room temperature</li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/2 p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Healthcare Provider Demonstration */}
          <div className="relative h-[400px] bg-blue-50 rounded-lg overflow-hidden">
            {/* Provider figure */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Lab coat */}
                <div className="w-40 h-48 bg-white rounded-t-full"></div>
                
                {/* Head */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-24 bg-[#FFE0BD] rounded-t-full"></div>
                  {/* Hair */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-[#4A4A4A] rounded-t-full"></div>
                </div>
                
                {/* Stethoscope */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-2 bg-[#2563EB] rounded-full"></div>
                </div>
                
                {/* Arms demonstrating spray technique */}
                <div className="absolute top-16 right-0">
                  {/* Arm holding spray */}
                  <div className="w-20 h-4 bg-[#FFE0BD] rounded-full transform rotate-45"></div>
                  {/* Nasal spray */}
                  <div className="absolute top-0 right-0">
                    <div className="w-6 h-12 bg-blue-500 rounded"></div>
                    <div className="w-4 h-2 bg-blue-600 rounded-t absolute -top-2 left-1"></div>
                  </div>
                </div>
                
                {/* Patient head outline */}
                <div className="absolute top-8 right-[-60px]">
                  <div className="w-24 h-32 bg-[#FFE0BD] rounded-t-full transform rotate-12">
                    {/* Nose */}
                    <div className="absolute top-16 left-8 w-8 h-10 bg-[#FFE0BD] rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Directional arrow */}
            <div className="absolute top-1/2 right-[120px] transform rotate-45">
              <div className="w-16 h-2 bg-blue-500"></div>
              <div className="w-4 h-4 border-t-2 border-r-2 border-blue-500 transform rotate-45 absolute -right-1 -top-1"></div>
            </div>
          </div>
          
          <p className="text-sm italic text-center mt-4">Healthcare provider demonstrating proper nasal spray technique</p>
          
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold">Common Mistakes to Avoid:</p>
            <ul className="list-disc pl-6 mt-1 text-sm">
              <li><span className="font-semibold">Do not</span> aim toward the nasal septum (increases risk of epistaxis)</li>
              <li><span className="font-semibold">Do not</span> tilt head backward (causes medication to run down throat)</li>
              <li><span className="font-semibold">Do not</span> sniff forcefully (reduces medication contact with nasal mucosa)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasalSprayTechniqueSlide;