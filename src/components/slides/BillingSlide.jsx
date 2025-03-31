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
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Procedure Code</h3>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">94010</h4>
            <span className="text-sm bg-green-100 px-2 py-1 rounded">Spirometry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSlide; 