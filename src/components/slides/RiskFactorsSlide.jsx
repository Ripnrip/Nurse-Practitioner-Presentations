import React from 'react';

const RiskFactorsSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
        <h3 className="text-lg font-bold text-blue-700 mb-3">Lifestyle & Environmental Factors</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cigarette smoking</li>
          <li>Environmental or occupational exposure (dust, chemicals, pollutants)</li>
          <li>Living in congregate settings (e.g., nursing homes, prisons)</li>
          <li>Foreign travel (risk for TB)</li>
        </ul>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-lg font-bold text-green-700 mb-3">Medical Conditions</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Recent upper respiratory infection</li>
          <li>GERD</li>
          <li>Allergic rhinitis or postnasal drip (Upper Airway Cough Syndrome)</li>
          <li>Asthma or COPD</li>
          <li>Immunocompromised status (e.g., HIV)</li>
        </ul>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
        <h3 className="text-lg font-bold text-yellow-700 mb-3">Medications</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use of ACE inhibitors</li>
          <li>Beta-blockers (less common)</li>
          <li>NSAIDs (in aspirin-sensitive individuals)</li>
        </ul>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
        <h3 className="text-lg font-bold text-red-700 mb-3">Patient Factors</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Older age (due to weakened cough reflex)</li>
          <li>History of stroke</li>
          <li>Obesity (increased risk for GERD)</li>
          <li>Smoking history (even if discontinued)</li>
        </ul>
      </div>
      
      <div className="col-span-1 md:col-span-2 bg-blue-50 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center mb-2">Risk Factor Assessment</h3>
        <p className="text-center">
          Thorough risk factor assessment is essential for determining the underlying etiology of cough 
          and developing an appropriate diagnostic and treatment strategy.
        </p>
      </div>
    </div>
  );
};

export default RiskFactorsSlide; 