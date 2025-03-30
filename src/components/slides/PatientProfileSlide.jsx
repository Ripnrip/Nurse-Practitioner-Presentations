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
        <p>No Known Allergies</p>
        
        <p className="text-xl font-semibold mt-4">Social History:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Lives alone</li>
          <li>Denies tobacco, alcohol, illicit drugs</li>
          <li>No regular exercise</li>
        </ul>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <p className="text-xl font-semibold mb-4 text-center">Medical History Timeline</p>
          
          {/* Timeline container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-blue-300"></div>
            
            {/* Timeline events */}
            <div className="space-y-8">
              {/* 2018 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2018</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow">
                  <p>GERD diagnosis</p>
                </div>
              </div>
              
              {/* 2019 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2019</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow">
                  <p>GAD diagnosis</p>
                  <p>Rotator cuff surgery</p>
                </div>
              </div>
              
              {/* 2021 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2021</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow">
                  <p>Osteoarthritis diagnosis</p>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2023</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow">
                  <p>Vertigo diagnosis</p>
                </div>
              </div>
              
              {/* 2024 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2024</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow">
                  <p>A-Fib diagnosis</p>
                  <p>HTN diagnosis</p>
                  <p>Hyperlipidemia diagnosis</p>
                </div>
              </div>
              
              {/* 2025 */}
              <div className="flex items-center">
                <div className="w-24 font-bold text-blue-800">2025</div>
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-600 z-10"></div>
                <div className="ml-4 bg-white p-2 rounded shadow-sm flex-grow border-2 border-blue-200">
                  <p>Current: Allergic Rhinitis evaluation</p>
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