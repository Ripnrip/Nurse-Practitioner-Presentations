import React from 'react';

const DiseaseDefinitionSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 pr-4">
        <p className="text-xl font-semibold mb-4">Definition:</p>
        <p className="mb-3">Inflammation of the nasal mucosa triggered by IgE-mediated responses to allergens</p>
        
        <p className="text-xl font-semibold mt-4">Key Features:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Nasal congestion</li>
          <li>Clear rhinorrhea</li>
          <li>Sneezing</li>
          <li>Nasal itching</li>
          <li>Postnasal drip</li>
        </ul>
        
        <p className="text-xl font-semibold mt-4">Classification:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Seasonal (20%)</li>
          <li>Perennial (40%)</li>
          <li>Mixed features (40%)</li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <div className="w-full rounded-lg shadow-lg bg-white p-6">
          <div className="relative h-[400px]">
            {/* Head outline */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-[300px] h-[400px] bg-blue-50 rounded-t-[150px] border-2 border-blue-200">
                {/* Nasal cavity outline */}
                <div className="relative mt-[100px] mx-auto w-[160px] h-[200px] bg-pink-50 rounded-lg border-2 border-pink-200">
                  
                  {/* Nasal septum */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink-400">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs w-20 text-center">
                      <span className="font-semibold">Nasal Septum</span>
                    </div>
                  </div>
                  
                  {/* Left turbinate */}
                  <div className="absolute left-2 top-[30%] w-[60px] h-3 bg-red-200 rounded-l-full">
                    <div className="absolute -top-6 left-0 text-xs w-20">
                      <span className="font-semibold">Turbinate</span>
                    </div>
                  </div>
                  
                  {/* Right turbinate */}
                  <div className="absolute right-2 top-[60%] w-[60px] h-3 bg-red-200 rounded-r-full">
                  </div>
                  
                  {/* Paranasal sinuses */}
                  <div className="absolute -left-8 -right-8 -top-4">
                    <div className="flex justify-between">
                      <div className="w-6 h-6 bg-blue-100 rounded-full border border-blue-300"></div>
                      <div className="w-6 h-6 bg-blue-100 rounded-full border border-blue-300"></div>
                    </div>
                    <div className="text-xs text-center mt-1">
                      <span className="font-semibold">Paranasal Sinuses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm italic text-center mt-2">Nasal Anatomy Diagram: Showing the nasal septum, turbinates, and paranasal sinuses</p>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDefinitionSlide;