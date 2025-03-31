import React from 'react';

const BillingSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Evaluation & Management Code</h3>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">99213</h4>
            <span className="text-sm bg-blue-100 px-2 py-1 rounded">Office/Outpatient Visit, Established Patient</span>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">CPT Code Requirements:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Expanded problem focused history</li>
                <li>Expanded problem focused examination</li>
                <li>Low complexity medical decision making</li>
                <li>Typically 15 minutes face-to-face</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Procedure Code</h3>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">94010</h4>
            <span className="text-sm bg-green-100 px-2 py-1 rounded">Spirometry</span>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">Procedure Description:</p>
              <p className="text-sm mt-1">
                Spirometry, including graphic record, total and timed vital capacity, expiratory flow rate 
                measurement(s), with or without maximal voluntary ventilation
              </p>
            </div>
            
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">Results:</p>
              <p className="text-sm mt-1">
                FEV1/FVC: 0.80 - No obstruction identified
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSlide; 