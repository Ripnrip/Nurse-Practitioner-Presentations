import React from 'react';

const AssessmentSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="lg:col-span-2 bg-blue-50 p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Working Diagnoses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Seasonal Allergic Rhinitis</h4>
              <span className="text-sm text-green-700 font-semibold">J30.2</span>
            </div>
            <p className="text-sm">
              Significant improvement with antihistamine therapy strongly supports this diagnosis. Response to 
              Zyrtec suggests an allergic component to the patient's chronic cough.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Gastroesophageal Reflux Disease</h4>
              <span className="text-sm text-blue-700 font-semibold">K21</span>
            </div>
            <p className="text-sm">
              Known history of GERD (2018) with PRN use of PPI. GERD is a common cause of chronic cough 
              and may be contributing to symptoms despite PPI therapy.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
            <div className="flex justify-between items-start">
              <h4 className="font-bold mb-2">Chronic Cough</h4>
              <span className="text-sm text-yellow-700 font-semibold">R05.3</span>
            </div>
            <p className="text-sm">
              Patient presents with cough persisting more than 8 weeks. While improvement seen with 
              antihistamine suggests allergic etiology, the cough may be multifactorial.
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Differential Diagnoses Considered</h3>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold">ACE Inhibitor-Induced Cough</h4>
            <span className="text-sm font-semibold">Initially High Probability</span>
          </div>
          <p className="text-sm">
            Patient was on lisinopril for hypertension, which was discontinued. However, cough persisted 
            beyond the expected resolution period (usually 1-4 weeks after discontinuation).
          </p>
          <div className="mt-2 flex items-center">
            <div className="h-2 flex-grow rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-yellow-500" style={{ width: '40%' }}></div>
            </div>
            <span className="ml-2 text-xs">Ruled Out</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold">Asthma</h4>
            <span className="text-sm font-semibold">Moderate Probability</span>
          </div>
          <p className="text-sm">
            Chronic cough can be the primary manifestation of cough-variant asthma. However, normal 
            spirometry and absence of wheezing reduce probability.
          </p>
          <div className="mt-2 flex items-center">
            <div className="h-2 flex-grow rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-yellow-500" style={{ width: '20%' }}></div>
            </div>
            <span className="ml-2 text-xs">Unlikely</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold">Post-Infectious Cough</h4>
            <span className="text-sm font-semibold">Moderate Probability</span>
          </div>
          <p className="text-sm">
            Patient had a respiratory infection in December with fever and chest congestion. While this 
            could have led to post-infectious cough, the duration of symptoms is now beyond typical timeframe.
          </p>
          <div className="mt-2 flex items-center">
            <div className="h-2 flex-grow rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-yellow-500" style={{ width: '30%' }}></div>
            </div>
            <span className="ml-2 text-xs">Unlikely</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Diagnostic Reasoning</h3>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2">Key Supporting Evidence</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Significant improvement with antihistamine therapy (Zyrtec)</li>
            <li>Normal physical examination findings</li>
            <li>Normal spirometry results rule out obstructive lung disease</li>
            <li>Negative chest X-ray rules out pneumonia or structural abnormalities</li>
            <li>Duration of cough &gt;8 weeks classifies it as chronic</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2">Priority Assessment</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li>
              <span className="font-semibold">Upper Airway Cough Syndrome (allergic rhinitis):</span> Primary 
              diagnosis based on response to antihistamine
            </li>
            <li>
              <span className="font-semibold">GERD-Associated Cough:</span> Secondary contributing factor given 
              known history of GERD
            </li>
            <li>
              <span className="font-semibold">Monitor for recurrence of symptoms:</span> Continue to evaluate for 
              other potential etiologies if symptoms return
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSlide; 