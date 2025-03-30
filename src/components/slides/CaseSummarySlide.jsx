import React from 'react';

const CaseSummarySlide = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-xl font-semibold mb-4">Key Points:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Clinical Presentation</p>
          <p className="text-sm mt-1">71-year-old female with persistent cough unresponsive to antibiotics</p>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Key Diagnostic Finding</p>
          <p className="text-sm mt-1">Significant improvement after antihistamine trial</p>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Supporting Evidence</p>
          <p className="text-sm mt-1">Normal spirometry and negative CXR rule out pulmonary etiology</p>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Diagnosis</p>
          <p className="text-sm mt-1">Allergic Rhinitis based on clinical response to antihistamine</p>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Treatment Plan</p>
          <p className="text-sm mt-1">Second-generation antihistamine appropriate for age/comorbidities</p>
        </div>
        
        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="font-bold">Patient Education</p>
          <p className="text-sm mt-1">Non-pharmacological measures and follow-up planning essential</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
        <p className="font-bold">Clinical Pearl:</p>
        <p className="mt-1">Cough as presenting symptom of allergic rhinitis underscores importance of considering this diagnosis in patients with persistent cough, even with minimal nasal symptoms.</p>
      </div>
    </div>
  );
};

export default CaseSummarySlide;