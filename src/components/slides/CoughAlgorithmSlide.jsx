import React from 'react';

const CoughAlgorithmSlide = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Chronic Cough Management Algorithm</h3>
        
        <div className="flex justify-center overflow-auto">
          <div className="flowchart-container max-w-4xl relative p-2">
            {/* Add some global styles for arrows */}
            <style jsx>{`
              .arrow-down {
                position: absolute;
                left: 50%;
                width: 0; 
                height: 0; 
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid #666;
                transform: translateX(-50%);
              }
              .arrow-line {
                position: absolute;
                background-color: #666;
              }
              .arrow-right {
                position: absolute;
                top: 50%;
                width: 0; 
                height: 0; 
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 10px solid #666;
                transform: translateY(-50%);
              }
            `}</style>

            {/* Root node */}
            <div className="p-3 border-2 border-blue-500 rounded-lg text-center bg-blue-50 font-semibold mb-4 mx-auto" style={{width: "220px", position: "relative"}}>
              Cough ≥3 weeks
              <div className="arrow-down" style={{bottom: "-20px"}}></div>
            </div>

            {/* First level branches */}
            <div className="grid grid-cols-3 gap-4 mb-8" style={{position: "relative"}}>
              {/* Left branch connector */}
              <div className="arrow-line" style={{height: "20px", width: "1px", left: "16.7%", top: "-20px"}}></div>
              <div className="arrow-line" style={{height: "1px", width: "66.6%", left: "16.7%", top: "-20px"}}></div>
              <div className="arrow-line" style={{height: "20px", width: "1px", left: "50%", top: "-20px"}}></div>
              <div className="arrow-line" style={{height: "20px", width: "1px", left: "83.3%", top: "-20px"}}></div>

              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm">
                  <p className="font-semibold mb-2">History, physical examination suggest postnasal drip, asthma, or GERD</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
              </div>
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm">
                  <p className="font-semibold mb-2">History, physical examination do not strongly suggest cause or do suggest pulmonary parenchymal disease</p>
                </div>
              </div>
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm">
                  <ul className="list-disc pl-4">
                    <li>Purulent sputum or</li>
                    <li>Smoker or</li>
                    <li>ACE inhibitor treatment or</li>
                    <li>Immunocompromised host</li>
                  </ul>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
              </div>
            </div>

            {/* Second level */}
            <div className="grid grid-cols-3 gap-4 mb-8" style={{position: "relative"}}>
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Treat accordingly</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
              </div>
              <div className="col-span-1">
                <div className="p-2" style={{height: "1px"}}></div>
              </div>
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Evaluate and treat accordingly (eg, antibiotics; smoking cessation; stop ACE inhibitor)</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
              </div>
            </div>

            {/* Outcome branches */}
            <div className="grid grid-cols-6 gap-4 mb-12" style={{position: "relative"}}>
              <div className="col-span-1">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Cough resolved</p>
                </div>
              </div>
              
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Cough persists</p>
                </div>
                <div className="arrow-line" style={{width: "1px", height: "40px", left: "50%", bottom: "-40px"}}></div>
              </div>
              
              <div className="col-span-2">
                <div className="p-2" style={{height: "1px"}}></div>
              </div>
              
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Cough persists</p>
                </div>
                <div className="arrow-line" style={{width: "1px", height: "40px", left: "50%", bottom: "-40px"}}></div>
              </div>
              
              <div className="col-span-1">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center">
                  <p className="font-semibold">Cough resolved</p>
                </div>
              </div>

              {/* Connector for persistent coughs */}
              <div className="arrow-line" style={{width: "33.3%", height: "1px", left: "33.3%", bottom: "-20px"}}></div>
            </div>

            {/* Chest radiograph */}
            <div className="p-3 border border-gray-400 rounded-lg text-sm text-center mb-8 mx-auto relative" style={{width: "60%"}}>
              <p className="font-semibold">Chest radiograph</p>
              <div className="arrow-down" style={{bottom: "-20px"}}></div>
            </div>

            {/* Radiograph results */}
            <div className="grid grid-cols-2 gap-4 mb-8" style={{position: "relative"}}>
              {/* Connectors for the two branches */}
              <div className="arrow-line" style={{width: "50%", height: "1px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "75%", top: "-20px"}}></div>

              <div className="col-span-1 flex justify-end" style={{position: "relative"}}>
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center relative" style={{width: "60%"}}>
                  <p className="font-semibold">Normal (or old unrelated abnormality)</p>
                  <div className="arrow-down" style={{bottom: "-40px"}}></div>
                </div>
              </div>
              
              <div className="col-span-1" style={{position: "relative"}}>
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center" style={{width: "60%"}}>
                  <p className="font-semibold">Abnormal</p>
                  <div className="arrow-down" style={{bottom: "-20px"}}></div>
                </div>
              </div>
            </div>

            {/* Abnormal branch - additional steps */}
            <div className="grid grid-cols-2 gap-4" style={{position: "relative"}}>
              <div className="col-span-1"></div>
              <div className="col-span-1 relative" style={{marginBottom: "80px"}}>
                <div className="p-3 border border-gray-400 rounded-lg text-sm text-center mx-auto" style={{width: "80%"}}>
                  <p className="font-semibold">Evaluate based on the nature of the radiographic abnormality</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
                
                <div className="p-3 border border-gray-400 rounded-lg text-sm text-center mx-auto mt-8" style={{width: "60%"}}>
                  <p className="font-semibold">Treat accordingly</p>
                </div>
                <div className="arrow-down" style={{bottom: "-40px", left: "50%"}}></div>
                
                <div className="grid grid-cols-2 gap-4 mt-8" style={{position: "relative"}}>
                  <div className="p-2 border border-gray-400 rounded-lg text-sm text-center mx-auto" style={{width: "80%"}}>
                    <p className="font-semibold">Cough persists</p>
                  </div>
                  <div className="p-2 border border-gray-400 rounded-lg text-sm text-center mx-auto" style={{width: "80%"}}>
                    <p className="font-semibold">Cough resolved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Further evaluation branches */}
            <div className="grid grid-cols-1 gap-4 mb-8" style={{position: "relative"}}>
              <div className="p-3 border border-gray-400 rounded-lg text-sm mx-auto" style={{width: "80%"}}>
                <p className="font-semibold mb-2">Sequentially treat (or evaluate) for the most common causes of cough*:</p>
                <ul className="list-disc pl-4">
                  <li>Upper airway cough syndrome (allergy skin testing, sinus CT)</li>
                  <li>Asthma (PFTs)</li>
                  <li>Nonasthmatic eosinophilic bronchitis (sputum eosinophilia)</li>
                  <li>GERD (esophageal pH monitoring)</li>
                </ul>
              </div>
              <div className="arrow-down" style={{bottom: "-20px", left: "50%"}}></div>
            </div>

            <div className="p-3 border border-gray-400 rounded-lg text-sm text-center mb-8 mx-auto relative" style={{width: "60%"}}>
              <p className="font-semibold">Treat accordingly</p>
              <div className="arrow-down" style={{bottom: "-20px"}}></div>
            </div>

            {/* Final outcomes after common causes */}
            <div className="grid grid-cols-2 gap-4 mb-8" style={{position: "relative"}}>
              {/* Connector lines */}
              <div className="arrow-line" style={{width: "50%", height: "1px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "75%", top: "-20px"}}></div>
              
              <div className="col-span-1 flex justify-end">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center" style={{width: "40%"}}>
                  <p className="font-semibold">Cough resolved</p>
                </div>
              </div>
              <div className="col-span-1 relative">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center" style={{width: "40%"}}>
                  <p className="font-semibold">Cough persists</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "20%"}}></div>
              </div>
            </div>

            {/* Final evaluation */}
            <div className="p-3 border border-gray-400 rounded-lg text-sm mx-auto mb-8 relative" style={{width: "60%"}}>
              <p className="font-semibold mb-2">Evaluate for less-common conditions (eg, sputum tests, HRCT scan, esophageal pH probe monitoring, esophagoscopy, flexible bronchoscopy, cardiac studies)</p>
              <div className="arrow-down" style={{bottom: "-20px"}}></div>
            </div>

            <div className="p-3 border border-gray-400 rounded-lg text-sm text-center mb-8 mx-auto relative" style={{width: "60%"}}>
              <p className="font-semibold">Treat accordingly</p>
              <div className="arrow-down" style={{bottom: "-20px"}}></div>
            </div>

            {/* Final outcomes */}
            <div className="grid grid-cols-2 gap-4 mb-8" style={{position: "relative"}}>
              {/* Connector lines */}
              <div className="arrow-line" style={{width: "50%", height: "1px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "25%", top: "-20px"}}></div>
              <div className="arrow-line" style={{width: "1px", height: "20px", left: "75%", top: "-20px"}}></div>
              
              <div className="col-span-1 flex justify-end">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center" style={{width: "40%"}}>
                  <p className="font-semibold">Cough resolved</p>
                </div>
              </div>
              <div className="col-span-1 relative">
                <div className="p-2 border border-gray-400 rounded-lg text-sm text-center" style={{width: "40%"}}>
                  <p className="font-semibold">Cough persists</p>
                </div>
                <div className="arrow-down" style={{bottom: "-20px", left: "20%"}}></div>
              </div>
            </div>

            {/* Final note */}
            <div className="p-3 border border-gray-400 rounded-lg text-sm mx-auto" style={{width: "60%"}}>
              <p className="font-semibold text-center">Always reconsider adequacy of treatment regimens before considering cough to be psychogenic</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
          <p className="font-semibold">Key Decision Points:</p>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>Initial evaluation based on history and physical examination findings</li>
            <li>Sequential testing for common causes (UACS, asthma, GERD)</li>
            <li>Progress to less common causes only after ruling out common etiologies</li>
            <li>Consider psychogenic cough only after optimizing treatment regimens</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoughAlgorithmSlide; 