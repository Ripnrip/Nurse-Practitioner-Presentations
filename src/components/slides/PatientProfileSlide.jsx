import React from 'react';

const PatientProfileSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <p className="text-xl font-semibold mb-3">Past Medical History:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Vertigo (2023)</li>
          <li>Atrial Fibrillation (2024)</li>
          <li>Hypertension (2024)</li>
          <li>GERD (2018)</li>
          <li>Hyperlipidemia (2024)</li>
          <li>Generalized Anxiety Disorder (2019)</li>
          <li>Osteoarthritis (2021)</li>
          <li>Rotator cuff impingement, R shoulder (2019)</li>
        </ul>
        
        <p className="text-xl font-semibold mt-4">Allergies:</p>
        <p className="pl-8">Lisinopril - Cough</p>
        
        <p className="text-xl font-semibold mt-4">Social History:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Lives alone</li>
          <li>Denies tobacco, alcohol, illicit drugs</li>
          <li>No regular exercise</li>
        </ul>
        
        <p className="text-xl font-semibold mt-4">Medications:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Amlodipine 5mg daily (switched from lisinopril)</li>
          <li>Amiodarone 50mg daily</li>
          <li>Xarelto 20mg daily</li>
          <li>Protonix 20mg daily PRN</li>
          <li>Lexapro 20mg daily</li>
          <li>Tessalon Perles 100mg TID PRN (added 02/2025)</li>
        </ul>
      </div>
      
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-lg">
          <p className="text-center font-semibold text-lg mb-4">Chronic Cough Diagnostic Timeline</p>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[95px] top-0 bottom-0 w-1 bg-blue-300"></div>
            
            {/* Timeline events */}
            <div className="ml-4 space-y-6">
              {/* Event 1 */}
              <div className="flex">
                <div className="flex-shrink-0 flex flex-col items-center mr-4">
                  <div className="text-sm font-bold text-blue-600 w-20 text-right">11/2024</div>
                  <div className="h-4 w-4 rounded-full bg-blue-400 mt-1 border-2 border-white"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-3 flex-grow">
                  <p className="font-semibold">Initial Onset</p>
                  <p className="text-sm">Cough began after starting lisinopril for hypertension</p>
                  <p className="text-sm italic mt-1">Assessment: <span className="text-yellow-600">Suspected ACE-inhibitor cough</span></p>
                  <p className="text-sm font-semibold mt-1">Intervention: Switched to amlodipine</p>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="flex">
                <div className="flex-shrink-0 flex flex-col items-center mr-4">
                  <div className="text-sm font-bold text-blue-600 w-20 text-right">12/02/2024</div>
                  <div className="h-4 w-4 rounded-full bg-blue-400 mt-1 border-2 border-white"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-3 flex-grow">
                  <p className="font-semibold">Worsening Symptoms</p>
                  <p className="text-sm">Chest congestion, headache, fever, appetite loss</p>
                  <p className="text-sm italic mt-1">Assessment: <span className="text-yellow-600">Possible respiratory infection</span></p>
                  <p className="text-sm font-semibold mt-1">Interventions:</p>
                  <ul className="list-disc text-sm ml-5">
                    <li>COVID test (negative)</li>
                    <li>Chest X-ray (negative)</li>
                    <li>Augmentin</li>
                    <li>Medrol dose pack</li>
                  </ul>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="flex">
                <div className="flex-shrink-0 flex flex-col items-center mr-4">
                  <div className="text-sm font-bold text-blue-600 w-20 text-right">02/20/2025</div>
                  <div className="h-4 w-4 rounded-full bg-blue-400 mt-1 border-2 border-white"></div>
                </div>
                <div className="bg-white rounded-lg shadow p-3 flex-grow">
                  <p className="font-semibold">Persistent Cough</p>
                  <p className="text-sm">Continued cough with white/clear sputum, dyspnea on exertion</p>
                  <p className="text-sm italic mt-1">Assessment: <span className="text-yellow-600">Consider multifactorial etiology</span></p>
                  <p className="text-sm font-semibold mt-1">Intervention: Trial of Tessalon Perles</p>
                </div>
              </div>
              
              {/* Event 4 */}
              <div className="flex">
                <div className="flex-shrink-0 flex flex-col items-center mr-4">
                  <div className="text-sm font-bold text-blue-600 w-20 text-right">02/27/2025</div>
                  <div className="h-4 w-4 rounded-full bg-blue-500 mt-1 border-2 border-white"></div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow p-3 flex-grow">
                  <p className="font-semibold">Current Presentation</p>
                  <p className="text-sm">Cough persists despite medication changes</p>
                  <p className="text-sm italic mt-1">Assessment: <span className="text-blue-600">Chronic cough work-up needed</span></p>
                  <p className="text-sm font-semibold mt-1">Planned diagnostics: PFTs, CT scan, reflux evaluation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileSlide;