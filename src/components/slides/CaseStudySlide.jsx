import React from 'react';

const CaseStudySlide = () => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg shadow-md">
        <div className="flex items-center mb-2">
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold">CC</span>
          </div>
          <p className="text-lg font-bold">Chief Complaint: "follow up cough management"</p>
        </div>
        
        <p className="mt-4">
          A 71-year-old Caucasian female presents for follow-up regarding the management of a
          persistent cough. The patient reported that her cough had significantly improved after
          starting Zyrtec. Patient denies nasal congestion, rhinorrhea, sneezing, sore throat or facial pain.
        </p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500">
        <h3 className="text-lg font-bold mb-3">History of Present Illness</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300 ml-3"></div>
          
          <div className="space-y-6 ml-10 relative">
            <div className="relative">
              <div className="absolute -left-10 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold">1</span>
              </div>
              <div className="pb-2">
                <p className="font-semibold text-blue-800">November 2024: Initial Onset</p>
                <p>Patient's cough began. The patient was recently diagnosed with hypertension and prescribed lisinopril. Lisinopril was discontinued due to concern for ACE-inhibitor-induced cough and replaced with amlodipine.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold">2</span>
              </div>
              <div className="pb-2">
                <p className="font-semibold text-blue-800">December 2, 2024: Worsening Symptoms</p>
                <p>Patient continued feeling worse with chest congestion, headache, cough, no appetite, and fever. COVID test was negative. Augmentin was prescribed and a chest X-ray was ordered. The CXR was negative and she was given a medrol pak.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <div className="pb-2">
                <p className="font-semibold text-blue-800">February 20, 2025: Persistent Symptoms</p>
                <p>She continued complaining with the cough with white/clear sputum and some dyspnea on exertion. Advised her to take OTC antihistamine. Patient denied issues with GERD as on pantoprazole.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold text-blue-800">February 27, 2025: Improvement</p>
                <p>Cough much improved since starting Zyrtec. In the office a PFT Spirometry test was performed and it was normal.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
          <p className="font-semibold">Key Risk Factors Identified:</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Older age (71 years)</li>
            <li>History of ACE inhibitor use</li>
            <li>History of GERD</li>
            <li>Possible allergic component suggested by response to antihistamine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySlide; 