import React from 'react';

const EpidemiologySlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 pr-4">
        <p className="text-xl font-semibold mb-3">Prevalence:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Affects ~15-30% of population</li>
          <li>~32% of adults aged 54-89 report rhinitis symptoms</li>
          <li>Peak incidence in 2nd-4th decades, gradually declining</li>
        </ul>
        
        <p className="text-xl font-semibold mt-4">Risk Factors:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Genetic predisposition (family history)</li>
          <li>Environmental allergen exposure</li>
          <li>Occupational exposures</li>
          <li>Climate and geographic factors</li>
          <li>Comorbid conditions (asthma, eczema)</li>
        </ul>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col justify-center">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <div className="text-center mb-4 font-semibold">Prevalence of Allergic Rhinitis by Age Group</div>
          <div className="h-64 w-full relative">
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-300 ml-2">
              <div className="text-xs text-center mt-1">0-20 yrs</div>
              <div className="text-xs text-center font-bold">16%</div>
            </div>
            <div className="absolute bottom-0 left-20 w-16 h-24 bg-blue-400 ml-2">
              <div className="text-xs text-center mt-1">20-40 yrs</div>
              <div className="text-xs text-center font-bold">24%</div>
            </div>
            <div className="absolute bottom-0 left-40 w-16 h-32 bg-blue-500 ml-2">
              <div className="text-xs text-center mt-1">40-60 yrs</div>
              <div className="text-xs text-center font-bold">32%</div>
            </div>
            <div className="absolute bottom-0 left-60 w-16 h-24 bg-blue-400 ml-2">
              <div className="text-xs text-center mt-1">60-80 yrs</div>
              <div className="text-xs text-center font-bold">24%</div>
            </div>
            <div className="absolute bottom-0 left-80 w-16 h-16 bg-blue-300 ml-2">
              <div className="text-xs text-center mt-1">80+ yrs</div>
              <div className="text-xs text-center font-bold">16%</div>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-px bg-black"></div>
            <div className="absolute left-0 bottom-0 h-full w-px bg-black"></div>
            <div className="absolute -left-10 top-0 text-xs">40%</div>
            <div className="absolute -left-10 top-16 text-xs">30%</div>
            <div className="absolute -left-10 top-32 text-xs">20%</div>
            <div className="absolute -left-10 top-48 text-xs">10%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpidemiologySlide;