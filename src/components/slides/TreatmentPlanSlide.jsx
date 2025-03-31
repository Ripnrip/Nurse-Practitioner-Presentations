import React from 'react';

const TreatmentPlanSlide = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-purple-500">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Rationale for Treatment Plan</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">Target Primary Etiology:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Allergic rhinitis - Continue antihistamine therapy given excellent response</li>
                <li>GERD - Optimize acid suppression with scheduled PPI dosing</li>
                <li>Weight management discussion - Obesity can worsen both GERD and allergic symptoms</li>
              </ul>
            </div>
            
            <div className="p-3 bg-purple-50 rounded">
              <p className="font-semibold">Evidence-Based Approach:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Second-generation antihistamines are first-line therapy for allergic rhinitis with fewer side effects 
                  than first-generation agents</li>
                <li>Lifestyle modifications are key components of GERD management in addition to PPIs</li>
                <li>Environmental controls have been shown to reduce allergic triggers and symptom burden</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-yellow-500">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">Therapeutic Goals</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-yellow-50 rounded">
              <p className="font-semibold text-center mb-2">Short-Term Goals</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Maintain symptom control with current antihistamine therapy</li>
                <li>Improve GERD symptoms with optimized PPI dosing</li>
                <li>Implement environmental control measures</li>
              </ul>
            </div>
            
            <div className="p-3 bg-yellow-50 rounded">
              <p className="font-semibold text-center mb-2">Long-Term Goals</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Complete resolution of chronic cough</li>
                <li>Weight reduction to BMI &lt;30</li>
                <li>Prevent recurrence of symptoms</li>
                <li>Maintain optimal quality of life</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 rounded">
            <p className="font-semibold text-center mb-2">Treatment Decision Point</p>
            <p className="text-sm">
              If symptoms do not continue to improve with current management, consider:
              <ol className="list-decimal pl-5 mt-1">
                <li>Adding intranasal corticosteroid (e.g., fluticasone)</li>
                <li>Consider 24-hour pH monitoring to definitively assess GERD</li>
                <li>Trial of inhaled corticosteroid to evaluate for cough-variant asthma</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlanSlide; 