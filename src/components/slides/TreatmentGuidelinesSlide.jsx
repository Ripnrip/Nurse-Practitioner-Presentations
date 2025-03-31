import React from 'react';

const TreatmentGuidelinesSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-red-50 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-red-700 mb-3">Acute Cough</h3>
          <p className="text-sm italic mb-2">(e.g., URI, acute bronchitis)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Supportive care: rest, fluids, cool mist humidifier</li>
            <li>Acetaminophen or NSAIDs for fever/myalgias (avoid NSAIDs in elderly if possible)</li>
            <li>Antitussives (e.g., dextromethorphan) for severe cough</li>
            <li>Guaifenesin for expectoration</li>
            <li className="font-semibold">Avoid antibiotics unless pneumonia suspected</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">Subacute Cough</h3>
          <p className="text-sm italic mb-2">(3-8 weeks duration)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Trial of inhaled ipratropium</li>
            <li>Consider inhaled corticosteroids if no response</li>
            <li className="font-semibold">Avoid antibiotics unless pertussis confirmed</li>
            <li>Continue supportive measures</li>
            <li>Rule out UACS, asthma, and GERD</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-green-700 mb-3">Chronic Cough</h3>
          <p className="text-sm italic mb-2">Stepwise approach:</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><span className="font-semibold">Treat UACS:</span> Second-generation antihistamines (loratadine, cetirizine) + intranasal steroids</li>
            <li><span className="font-semibold">If partial/no response, evaluate for asthma:</span> Inhaled corticosteroids + bronchodilators</li>
            <li><span className="font-semibold">If asthma excluded, evaluate for GERD:</span> Lifestyle changes + PPI (e.g., omeprazole)</li>
            <li>If all above ruled out, consider:
              <ul className="list-disc pl-5 mt-1">
                <li>Nonasthmatic eosinophilic bronchitis: Inhaled corticosteroids</li>
                <li>Neuropathic cough: Gabapentin or pregabalin + speech therapy</li>
                <li>Pulmonary referral if idiopathic or suspicious imaging</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center mb-3">Non-Pharmacologic Approaches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="text-2xl">🚭</span>
            </div>
            <h4 className="font-bold text-center mb-1">Smoking Cessation</h4>
            <p className="text-xs text-center">Counseling, NRT, medications</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="text-2xl">🏠</span>
            </div>
            <h4 className="font-bold text-center mb-1">Allergen Avoidance</h4>
            <p className="text-xs text-center">Dust mites, pollen, pet dander</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="text-2xl">💧</span>
            </div>
            <h4 className="font-bold text-center mb-1">Humidification</h4>
            <p className="text-xs text-center">Cool mist humidifiers, hydration</p>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <span className="text-2xl">🗣️</span>
            </div>
            <h4 className="font-bold text-center mb-1">Speech Therapy</h4>
            <p className="text-xs text-center">For refractory or neuropathic cough</p>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="font-semibold">Treatment Note:</p>
        <p className="text-sm">
          These are general guidelines. Treatment should be individualized based on patient factors, 
          suspected etiology, and response to therapy. Re-evaluation is essential for persistent symptoms.
        </p>
      </div>
    </div>
  );
};

export default TreatmentGuidelinesSlide; 