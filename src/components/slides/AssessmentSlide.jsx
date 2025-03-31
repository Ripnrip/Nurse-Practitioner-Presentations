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
            <p className="text-sm">
              Significant improvement with antihistamine therapy strongly supports this diagnosis. Response to 
              Zyrtec suggests an allergic component to the patient's chronic cough.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Gastroesophageal Reflux Disease</h4>
              <span className="text-sm font-semibold">K21</span>
            </div>
            <p className="text-sm">
              Known history of GERD (2018) with PRN use of PPI. GERD is a common cause of chronic cough 
              and may be contributing to symptoms despite PPI therapy.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Chronic Cough</h4>
              <span className="text-sm font-semibold">R05.3</span>
            </div>
            <p className="text-sm">
              Patient presents with cough persisting more than 8 weeks. While improvement seen with 
              antihistamine suggests allergic etiology, the cough may be multifactorial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSlide; 