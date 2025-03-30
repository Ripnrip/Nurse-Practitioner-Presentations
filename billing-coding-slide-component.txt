import React from 'react';

const BillingCodingSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow mb-4">
          <p className="text-xl font-semibold mb-2">E&M Code:</p>
          <div className="p-3 bg-white rounded">
            <p className="font-bold text-blue-800">99213</p>
            <p>Established Patient Office Visit</p>
            <ul className="list-disc pl-6 mt-2 text-sm">
              <li>Low complexity MDM</li>
              <li>1 stable chronic illness + 1 improving condition</li>
              <li>Prescription drug management</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <p className="text-xl font-semibold mb-2">Procedure Code:</p>
          <div className="p-3 bg-white rounded">
            <p className="font-bold text-blue-800">94010</p>
            <p>Spirometry</p>
            <p className="text-sm mt-2">Including graphic record, total and timed vital capacity, expiratory flow rate measurement(s)</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow">
          <p className="text-xl font-semibold mb-2">ICD-10 Diagnosis Codes:</p>
          
          <div className="p-3 mb-2 bg-green-100 rounded border-l-4 border-green-600">
            <p className="font-bold">Primary Diagnosis:</p>
            <p className="flex justify-between">
              <span className="font-semibold">J30.2</span>
              <span>Allergic Rhinitis, Other Seasonal</span>
            </p>
          </div>
          
          <div className="p-3 mb-2 bg-white rounded">
            <p className="font-bold">Secondary Diagnosis:</p>
            <p className="flex justify-between">
              <span className="font-semibold">R05.9</span>
              <span>Cough</span>
            </p>
          </div>
          
          <div className="p-3 bg-white rounded">
            <p className="font-bold">Comorbidities:</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="p-1 bg-gray-100 rounded text-sm">
                <span className="font-semibold">K21.9</span> - GERD
              </div>
              <div className="p-1 bg-gray-100 rounded text-sm">
                <span className="font-semibold">I10</span> - Hypertension
              </div>
              <div className="p-1 bg-gray-100 rounded text-sm">
                <span className="font-semibold">I48.91</span> - Atrial Fibrillation
              </div>
              <div className="p-1 bg-gray-100 rounded text-sm">
                <span className="font-semibold">E78.5</span> - Hyperlipidemia
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
          <p className="font-semibold">Coding Notes:</p>
          <ul className="list-disc pl-6 mt-1 text-sm">
            <li>Document medical necessity for spirometry</li>
            <li>Clearly link medications to specific diagnoses</li>
            <li>Document time spent if coding based on time</li>
            <li>Include all addressed chronic conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillingCodingSlide;