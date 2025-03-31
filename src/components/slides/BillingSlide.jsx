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
            
            <div className="bg-white p-3 rounded">
              <p className="font-semibold">Justification:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Follow-up for established problem (chronic cough)</li>
                <li>Focused evaluation of respiratory and ENT systems</li>
                <li>Low complexity decision-making (continuing existing therapy with minor adjustments)</li>
                <li>Stable patient without high-risk factors</li>
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
              <p className="font-semibold">Justification:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Evaluation of chronic cough</li>
                <li>Rule out obstructive lung disease (asthma, COPD)</li>
                <li>Appropriate for initial pulmonary function assessment</li>
              </ul>
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
      
      <div className="md:col-span-2 bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Billing & Documentation Considerations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 p-3 rounded">
            <p className="font-semibold text-center mb-2">Diagnosis Codes</p>
            <ul className="list-disc pl-5 text-sm">
              <li>R05.3 - Chronic cough</li>
              <li>J30.2 - Other seasonal allergic rhinitis</li>
              <li>K21 - Gastroesophageal reflux disease</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded">
            <p className="font-semibold text-center mb-2">Documentation Elements</p>
            <ul className="list-disc pl-5 text-sm">
              <li>History of present illness</li>
              <li>Review of systems</li>
              <li>Physical examination findings</li>
              <li>Clinical reasoning/assessment</li>
              <li>Treatment plan with education</li>
              <li>Follow-up schedule</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded">
            <p className="font-semibold text-center mb-2">Medical Necessity</p>
            <ul className="list-disc pl-5 text-sm">
              <li>Chronic cough &gt;8 weeks duration</li>
              <li>Previous treatment trials</li>
              <li>Spirometry to evaluate persistent cough</li>
              <li>Appropriate education and follow-up</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-400 rounded">
          <p className="font-semibold">Important Note:</p>
          <p className="text-sm">
            Ensure complete documentation of medical necessity for spirometry testing. Many insurance 
            providers require clear documentation of chronic respiratory symptoms and rationale for 
            diagnostic testing. Document patient's verbal consent for procedure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillingSlide; 