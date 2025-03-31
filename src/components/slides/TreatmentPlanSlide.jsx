import React from 'react';

const TreatmentPlanSlide = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Pharmacological Management</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold">Continue Current Therapy:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li><span className="font-semibold">Cetirizine (Zyrtec)</span> 10mg once daily</li>
                <li><span className="font-semibold">Amlodipine</span> 5mg daily (for hypertension)</li>
                <li><span className="font-semibold">Continued avoidance of ACE inhibitors</span></li>
              </ul>
            </div>
            
            <div className="p-3 bg-blue-50 rounded">
              <p className="font-semibold">Medication Adjustments:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li><span className="font-semibold">Pantoprazole (Protonix)</span> - Change from PRN to scheduled 
                  20mg daily, taken 30-60 minutes before breakfast</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 mb-3">Non-Pharmacological Management</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded">
              <p className="font-semibold">Elevation Measures:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Elevate the head of the bed (place 6-8 inch blocks under the legs at the head of the bed 
                  or a Styrofoam wedge under the mattress)</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 rounded">
              <p className="font-semibold">Dietary Modifications:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Avoidance of reflux-inducing foods (e.g., fatty foods, chocolate, alcohol, caffeinated beverages)</li>
                <li>Avoidance of very acidic beverages (e.g., carbonated beverages, red wine, orange juice)</li>
                <li>Avoidance of meals for two to three hours before lying down (except for medications)</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 rounded">
              <p className="font-semibold">Environmental Control:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Stay well hydrated</li>
                <li>Keep windows closed and wear a mask while cleaning or doing yard work</li>
                <li>Advise allergen avoidance (to the extent possible) - common allergens include pets, 
                  dust mites, pollen, and mold</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlanSlide; 