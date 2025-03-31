import React from 'react';

const WorkingDiagnosisSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <div className="bg-green-50 p-4 rounded-lg shadow border-l-4 border-green-600 mb-6">
          <p className="text-xl font-bold text-green-800">PRIMARY DIAGNOSES:</p>
          <p className="text-lg font-semibold mt-2">Allergic Rhinitis, Seasonal [ICD-10: J30.2]</p>
          <p className="text-lg font-semibold">Chronic Cough [ICD-10: R05.3]</p>
          <ul className="list-disc pl-8 mt-2">
            <li>Evidence: Response to antihistamine therapy</li>
            <li>Presenting as persistent cough despite initial treatments</li>
            <li>Minimal nasal symptoms initially masking the underlying cause</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow border-l-4 border-gray-400">
          <p className="text-xl font-bold text-gray-700">DIAGNOSTIC RED HERRINGS:</p>
          <ul className="mt-2 space-y-3">
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">ACE inhibitor-induced cough [T88.7]</p>
              <p className="text-sm italic mt-1">Initial temporal relationship with lisinopril, but persistence after discontinuation disproved this etiology</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">Post-infectious cough syndrome [R05.3]</p>
              <p className="text-sm italic mt-1">Failed response to antibiotics and steroids suggested non-infectious etiology</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">GERD-related cough [K21.9]</p>
              <p className="text-sm italic mt-1">Patient on acid suppression without improvement of cough symptoms</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">Cough-variant asthma [J45.909]</p>
              <p className="text-sm italic mt-1">Normal spirometry results ruled out this diagnosis</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/3 p-4 flex flex-col justify-center">
        <div className="bg-blue-50 p-3 rounded-lg shadow">
          <p className="text-center font-semibold mb-3">Key Diagnostic Clues</p>
          <div className="flex items-center mb-3 p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <span className="text-green-600 text-lg">✓</span>
            </div>
            <div>
              <p className="font-semibold">Response to Antihistamine</p>
              <p className="text-xs">Significant improvement with Zyrtec</p>
            </div>
          </div>
          <div className="flex items-center mb-3 p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <span className="text-green-600 text-lg">✓</span>
            </div>
            <div>
              <p className="font-semibold">Normal Spirometry</p>
              <p className="text-xs">Rules out asthma and COPD</p>
            </div>
          </div>
          <div className="flex items-center p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <span className="text-green-600 text-lg">✓</span>
            </div>
            <div>
              <p className="font-semibold">Temporal Pattern</p>
              <p className="text-xs">Initial onset in fall/winter season</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-purple-50 p-3 rounded-lg shadow border-l-4 border-purple-400">
          <p className="font-semibold text-center">The "WOW" Factor</p>
          <p className="text-sm mt-2">
            This case revealed how allergic rhinitis can present primarily as cough in older adults with minimal classic symptoms, creating diagnostic challenges when initial treatments fail.
          </p>
          <p className="text-sm mt-2">
            Key learning: Systematic evaluation and therapeutic trials are essential when facing diagnostic red herrings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingDiagnosisSlide;
