import React from 'react';

const DiagnosticsSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 p-5 rounded-lg shadow-md border-t-4 border-red-500">
          <h3 className="text-lg font-bold text-red-700 mb-3">Acute Cough (&lt;3 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Usually no diagnostic testing needed unless red flags present</li>
            <li>Consider COVID-19 or influenza swab if symptomatic</li>
            <li>Chest X-ray if signs of pneumonia (fever, tachycardia, focal lung findings)</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-5 rounded-lg shadow-md border-t-4 border-yellow-500">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">Subacute Cough (3-8 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Nasopharyngeal swab if pertussis suspected</li>
            <li>TB testing if high-risk populations or exposure</li>
            <li>Consider chest X-ray if not previously performed</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg shadow-md border-t-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 mb-3">Chronic Cough (&gt;8 Weeks)</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Chest radiograph (initial workup)</li>
            <li>Spirometry or PFTs to evaluate for asthma or COPD</li>
            <li>Sinus CT or nasal endoscopy for chronic rhinosinusitis</li>
            <li>Esophageal pH monitoring or barium swallow for GERD</li>
            <li>High-resolution CT if interstitial lung disease suspected</li>
            <li>Bronchoscopy or biopsy if malignancy suspected</li>
            <li>Allergen skin testing if allergic component suspected</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center mb-3">Diagnostic Decision-Making</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-bold text-center mb-2">History-Based Clues</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Duration and pattern of cough</li>
              <li>Productive vs. non-productive</li>
              <li>Associated symptoms</li>
              <li>Timing (day/night/exercise)</li>
            </ul>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-bold text-center mb-2">Red Flags for Imaging</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Hemoptysis</li>
              <li>Weight loss</li>
              <li>Smoker &gt;40 years</li>
              <li>Fever &gt;38°C</li>
              <li>SOB or oxygen desaturation</li>
            </ul>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-bold text-center mb-2">Sequential Approach</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Start with less invasive tests</li>
              <li>Proceed based on results & clinical suspicion</li>
              <li>Consider empiric treatment trials</li>
              <li>Refer for specialized testing if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsSlide; 