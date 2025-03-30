import React from 'react';

const PatientTimelineSlide = () => {
  return (
    <div className="space-y-6">
      <p className="text-xl font-bold text-center">Chief Complaint: "Follow up cough"</p>
      
      <div className="relative h-64 border-b-2 border-gray-400 mx-4">
        {/* Timeline */}
        <div className="absolute top-20 left-0 right-0 border-b-2 border-blue-500"></div>
        
        {/* Nov 2024 */}
        <div className="absolute left-0 top-10">
          <div className="h-4 w-4 rounded-full bg-blue-600 absolute top-10 left-0 transform -translate-x-2"></div>
          <div className="font-bold">Nov 2024</div>
          <div className="absolute top-16 left-0 w-32 text-sm">
            <p className="font-semibold">Cough onset</p>
            <p className="text-xs">(After Lisinopril → Amlodipine)</p>
          </div>
        </div>
        
        {/* Jan 30, 2025 */}
        <div className="absolute left-1/4 top-10">
          <div className="h-4 w-4 rounded-full bg-blue-600 absolute top-10 left-0 transform -translate-x-2"></div>
          <div className="font-bold">Jan 30, 2025</div>
          <div className="absolute top-16 left-0 w-32 text-sm">
            <p className="font-semibold">Fatigue, runny nose, headache, cough</p>
            <p className="text-xs text-blue-600">Rx Augmentin</p>
          </div>
        </div>
        
        {/* Feb 20, 2025 */}
        <div className="absolute left-1/2 top-10">
          <div className="h-4 w-4 rounded-full bg-blue-600 absolute top-10 left-0 transform -translate-x-2"></div>
          <div className="font-bold">Feb 20, 2025</div>
          <div className="absolute top-16 left-0 w-32 text-sm">
            <p className="font-semibold">Worsening symptoms</p>
            <p className="text-xs text-blue-600">
              Rx 2nd Augmentin<br/>
              + Medrol pack<br/>
              + CXR (negative)<br/>
              + COVID (-)
            </p>
          </div>
        </div>
        
        {/* Mar 3, 2025 */}
        <div className="absolute left-3/4 top-10">
          <div className="h-4 w-4 rounded-full bg-blue-600 absolute top-10 left-0 transform -translate-x-2"></div>
          <div className="font-bold">Mar 3, 2025</div>
          <div className="absolute top-16 left-0 w-32 text-sm">
            <p className="font-semibold">Continued cough</p>
            <p className="text-xs">(white/clear sputum)</p>
            <p className="text-xs text-blue-600">OTC Zyrtec trial advised</p>
          </div>
        </div>
        
        {/* Mar 25, 2025 */}
        <div className="absolute right-0 top-10">
          <div className="h-4 w-4 rounded-full bg-blue-600 absolute top-10 left-0 transform -translate-x-2"></div>
          <div className="font-bold">Mar 25, 2025</div>
          <div className="absolute top-16 left-0 w-32 text-sm">
            <p className="font-semibold">Significant improvement with Zyrtec</p>
            <p className="text-xs text-blue-600">Spirometry normal</p>
          </div>
        </div>
      </div>
      
      <div className="text-sm italic text-center mt-4">
        Timeline showing progression from initial symptom presentation to diagnosis
      </div>
    </div>
  );
};

export default PatientTimelineSlide;