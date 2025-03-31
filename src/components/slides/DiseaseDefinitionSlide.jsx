import React from 'react';

const DiseaseDefinitionSlide = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
        <p className="text-lg">
          Cough is a protective reflex that helps clear the airways of irritants, secretions, or foreign
          substances. It can be voluntary or involuntary and is a common clinical symptom prompting
          medical evaluation.
        </p>
      </div>
      
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-red-500 flex-1">
          <h3 className="text-lg font-bold text-red-700 mb-2">Acute Cough</h3>
          <p>&lt;3 weeks duration</p>
          <p className="text-sm text-gray-600 mt-2">Often due to URI, acute bronchitis</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-yellow-500 flex-1">
          <h3 className="text-lg font-bold text-yellow-700 mb-2">Subacute Cough</h3>
          <p>3–8 weeks duration</p>
          <p className="text-sm text-gray-600 mt-2">Often post-infectious or early asthma</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md border-t-4 border-green-500 flex-1">
          <h3 className="text-lg font-bold text-green-700 mb-2">Chronic Cough</h3>
          <p>&gt;8 weeks duration</p>
          <p className="text-sm text-gray-600 mt-2">UACS, GERD, asthma, COPD, ACE-I</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center gap-8">
        <div className="text-center">
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
            <span className="text-4xl">💧</span>
          </div>
          <p className="font-semibold">Productive (Wet)</p>
          <p className="text-sm">Produces sputum/mucus</p>
        </div>
        
        <div className="text-center">
          <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
            <span className="text-4xl">🍃</span>
          </div>
          <p className="font-semibold">Nonproductive (Dry)</p>
          <p className="text-sm">No sputum production</p>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDefinitionSlide;