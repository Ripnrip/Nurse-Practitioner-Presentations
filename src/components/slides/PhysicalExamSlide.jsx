import React from 'react';

const PhysicalExamSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold mb-3">General</h3>
          <p className="text-sm mb-2">
            Patient is alert, appear to be reported age, no signs of distress, maintains eye contact, well groomed, 
            and appear comfortable
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold mb-3">HEENT</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><span className="font-semibold">Eyes:</span> No orbital edema, sclera white, and conjunctiva pink. No discharge noted. PERRLA</li>
            <li><span className="font-semibold">Ears:</span> Canal patent, tympanic membrane pearly gray bilaterally</li>
            <li><span className="font-semibold">Nose:</span> Nasal mucosa pink, moist and patent. Septum midline. No sinus tenderness noted</li>
            <li><span className="font-semibold">Throat:</span> No erythema, exudates, or lesions noted. No tonsillar hypertrophy. No signs of postnasal drip. Mucous membranes moist</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Neurological</h3>
          <p className="text-sm">
            Alert and oriented, no weakness, dizziness, numbness, or tingling noted.
            Sensation intact. Regular gait
          </p>
        </div>
      </div>
      
      <div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold mb-3">Respiratory</h3>
          <p className="text-sm mb-2">
            Lungs clear on auscultation, no wheezes or crackles. Chest expansion symmetrical. Respirations unlabored
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-bold mb-3">Cardiovascular</h3>
          <p className="text-sm">
            Regular rate and rhythm, no murmurs or gallops. S1 and S2 distinct upon auscultation. 
            No bruits present bilaterally on carotid arteries upon auscultation. Capillary refill time less than 3 seconds. 
            Pulses 2+ bilaterally on radial, dorsalis pedis, and posterior tibial arteries
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-3">Gastrointestinal</h3>
          <p className="text-sm">
            Abdomen soft, non-tender, bowel sounds present in all quadrants
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhysicalExamSlide;