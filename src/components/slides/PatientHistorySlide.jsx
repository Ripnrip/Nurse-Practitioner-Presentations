import React from 'react';

const PatientHistorySlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Past Medical History</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Vertigo (2023)</li>
            <li>Atrial Fibrillation (2024)</li>
            <li>Hypertension (2024)</li>
            <li>Gastroesophageal Reflux disease (2018)</li>
            <li>Hyperlipidemia (2024)</li>
            <li>Generalized anxiety disorder (2019)</li>
            <li>Osteoarthritis (2021)</li>
            <li>Rotator cuff impingement syndrome of right shoulder (2019)</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Past Surgical History</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Appendectomy</li>
            <li>Hysterectomy</li>
            <li>Right shoulder</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Allergies</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Lisinopril</span> - Cough</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Medications</h3>
          <div className="grid grid-cols-1 gap-2">
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Amlodipine</span> 5mg tab po Daily</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Meclizine HCl</span> 25 mg tablet 1 tablet as needed orally twice daily</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Xarelto</span> 20mg tablet 1 tablet with food orally once a day</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Protonix</span> 20mg tablet delayed release 1 tablet orally once a day as needed</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Fezetimibe</span> 10mg tablet 1 tablet orally bedtime</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Lexapro</span> 20mg tablet 1 tablet orally once a day</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Tramadol HCl</span> 50mg tablet 1 tablet as needed orally three times a day</p>
            </div>
            <div className="p-2 bg-white rounded">
              <p><span className="font-semibold">Amiodarone HCl</span> 100mg tablet 0.5 tablet orally once a day</p>
            </div>
            <div className="p-2 bg-yellow-50 rounded">
              <p><span className="font-semibold">Zyrtec</span> 10 tab Tablet Chewable 1 tablet Orally Once a day</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3">Social History</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Tobacco:</span> Denies</li>
                <li><span className="font-semibold">ETOH:</span> Denies</li>
                <li><span className="font-semibold">Drugs:</span> Denies any use of illicit drugs</li>
                <li><span className="font-semibold">Living:</span> Patient lives alone. Feels safe</li>
                <li><span className="font-semibold">Diet/exercise:</span> Denies exercising. Reports regular diet and eating only home made food</li>
                <li><span className="font-semibold">Sexual activity:</span> Not sexually active</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3">Immunizations</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-semibold">Covid 19 vaccine:</span> 1st dose 2020, 2nd dose 2021</li>
                <li><span className="font-semibold">Flu vaccine:</span> October 2024</li>
                <li><span className="font-semibold">Pneumococcal vaccine:</span> 01/01/2013</li>
                <li><span className="font-semibold">Tdap:</span> 2019</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistorySlide; 