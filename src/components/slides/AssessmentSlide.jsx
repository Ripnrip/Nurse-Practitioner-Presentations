import React from 'react';

const AssessmentSlide = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-3 text-center">Working Diagnoses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Seasonal Allergic Rhinitis</h4>
              <span className="text-sm font-semibold">J30.2</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Gastroesophageal Reflux Disease</h4>
              <span className="text-sm font-semibold">K21</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Chronic Cough</h4>
              <span className="text-sm font-semibold">R05.3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSlide; 