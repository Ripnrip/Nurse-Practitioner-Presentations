import React from 'react';

const DiseaseDefinitionSlide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Cough: A Protective Reflex</h2>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">•</span>
            </div>
            <p><span className="font-semibold">Protective mechanism</span> that helps clear airways of irritants, secretions, or foreign substances</p>
          </li>
          
          <li className="flex items-start">
            <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">•</span>
            </div>
            <p>Can be voluntary or involuntary</p>
          </li>
          
          <li className="flex items-start">
            <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">•</span>
            </div>
            <p>Common clinical symptom prompting medical evaluation</p>
          </li>
        </ul>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow">
          <p className="font-bold mb-2">Classifications by duration:</p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-24 text-right mr-4">
                <span className="font-semibold">Acute:</span>
              </div>
              <span className="bg-green-100 px-3 py-1 rounded-lg">{"<"}3 weeks</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-right mr-4">
                <span className="font-semibold">Subacute:</span>
              </div>
              <span className="bg-yellow-100 px-3 py-1 rounded-lg">3-8 weeks</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-right mr-4">
                <span className="font-semibold">Chronic:</span>
              </div>
              <span className="bg-red-100 px-3 py-1 rounded-lg">{">"}8 weeks</span>
            </div>
          </div>
        </div>
        
        <p className="mt-6"><span className="font-semibold">Note:</span> May be productive (wet) or nonproductive (dry)</p>
      </div>
      
      <div className="md:w-1/2 p-4 flex items-center justify-center">
        {/* Cough Reflex Visual */}
        <div className="relative w-[350px] h-[400px]">
          {/* Head outline */}
          <div className="absolute w-[200px] h-[280px] top-0 left-[75px] bg-blue-50 rounded-t-[100px] border-2 border-blue-300"></div>
          
          {/* Face basic features */}
          <div className="absolute w-[8px] h-[8px] top-[100px] left-[120px] bg-blue-400 rounded-full"></div>
          <div className="absolute w-[8px] h-[8px] top-[100px] left-[220px] bg-blue-400 rounded-full"></div>
          <div className="absolute w-[60px] h-[2px] top-[150px] left-[145px] bg-blue-400 rounded"></div>
          
          {/* Respiratory tract */}
          <div className="absolute w-[60px] h-[120px] top-[170px] left-[145px] bg-pink-100 rounded-lg border border-pink-300"></div>
          
          {/* Vagus nerve */}
          <div className="absolute w-[3px] h-[100px] top-[140px] left-[130px] bg-green-400 rounded">
            <div className="absolute w-[50px] h-[3px] top-[20px] left-[0px] bg-green-400 rounded"></div>
            <div className="absolute w-[60px] h-[3px] top-[40px] left-[0px] bg-green-400 rounded"></div>
          </div>
          
          {/* Brain */}
          <div className="absolute w-[100px] h-[70px] top-[40px] left-[125px] bg-purple-100 rounded-t-[50px] border border-purple-300"></div>
          
          {/* Labels */}
          <div className="absolute top-[30px] left-[230px] text-xs font-semibold">Brain<br/>(Cough Center)</div>
          <div className="absolute top-[140px] left-[70px] text-xs font-semibold">Vagus<br/>Nerve</div>
          <div className="absolute top-[190px] left-[210px] text-xs font-semibold">Respiratory<br/>Tract</div>
          <div className="absolute top-[300px] left-[120px] text-xs text-center w-[150px]">
            <span className="font-semibold">Cough Reflex Arc</span>: Stimulation of sensory receptors in respiratory tract activates the cough center
          </div>
          
          {/* Cough effect */}
          <div className="absolute top-[130px] left-[210px] text-blue-500 text-lg font-bold">
            <div className="animate-pulse">*cough*</div>
          </div>
          
          {/* Irritant */}
          <div className="absolute w-[15px] h-[15px] top-[220px] left-[167px] bg-red-300 rounded-full">
            <div className="absolute top-[-20px] left-[5px] text-xs font-semibold text-red-500">Irritant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDefinitionSlide;