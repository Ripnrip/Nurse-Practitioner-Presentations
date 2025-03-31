import React from 'react';

const WorkingDiagnosisSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow border-l-4 border-blue-600 mb-6">
          <p className="text-xl font-bold text-blue-800">PRIMARY DIAGNOSIS:</p>
          <p className="text-lg font-semibold mt-2">Chronic Cough [ICD-10: R05.3]</p>
          <ul className="list-disc pl-8 mt-2">
            <li>Evidence: Persistent cough for &gt;8 weeks</li>
            <li>Multiple potential contributing factors identified</li>
            <li>Insufficient response to targeted therapies</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow border-l-4 border-gray-400">
          <p className="text-xl font-bold text-gray-700">POTENTIAL ETIOLOGIES:</p>
          <ul className="mt-2 space-y-3">
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">ACE inhibitor-induced cough [T88.7]</p>
              <p className="text-sm italic mt-1">Initial temporal relationship with lisinopril, but persistence after discontinuation suggests additional factors</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">GERD-related cough [K21.9]</p>
              <p className="text-sm italic mt-1">History of GERD since 2018, possible undertreatment with PRN PPI</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">Upper Airway Cough Syndrome [J31.0]</p>
              <p className="text-sm italic mt-1">Possible post-nasal drip component, needs evaluation for rhinosinusitis</p>
            </li>
            <li className="p-2 bg-yellow-50 rounded border-l-4 border-yellow-400">
              <p className="font-semibold">Cough Hypersensitivity Syndrome [R05.3]</p>
              <p className="text-sm italic mt-1">Persistent cough despite addressing identifiable causes suggests central sensitization</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="md:w-1/3 p-4 flex flex-col justify-center">
        <div className="bg-blue-50 p-3 rounded-lg shadow">
          <p className="text-center font-semibold mb-3">Key Diagnostic Considerations</p>
          <div className="flex items-center mb-3 p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 text-lg">!</span>
            </div>
            <div>
              <p className="font-semibold">Multifactorial Etiology</p>
              <p className="text-xs">Multiple contributing factors often present</p>
            </div>
          </div>
          <div className="flex items-center mb-3 p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 text-lg">!</span>
            </div>
            <div>
              <p className="font-semibold">Pending Evaluation</p>
              <p className="text-xs">PFTs, CT chest, 24-hr pH monitoring needed</p>
            </div>
          </div>
          <div className="flex items-center p-2 bg-white rounded shadow">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 text-lg">!</span>
            </div>
            <div>
              <p className="font-semibold">Refractory Nature</p>
              <p className="text-xs">Poor response to empiric treatments</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 bg-purple-50 p-3 rounded-lg shadow border-l-4 border-purple-400">
          <p className="font-semibold text-center">Diagnostic Challenges</p>
          <p className="text-sm mt-2">
            Chronic cough often involves multiple etiologies, requiring systematic evaluation of each potential cause.
          </p>
          <p className="text-sm mt-2">
            Key approach: Sequential empiric treatments with monitoring of response, followed by targeted testing for refractory cases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingDiagnosisSlide;
