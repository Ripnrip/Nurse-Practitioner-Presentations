import React from 'react';

const ObjectivesSlide = () => {
  return (
    <div className="space-y-6">
      <p className="text-xl font-bold mb-4">At the end of this presentation, you will be able to:</p>
      
      <ul className="space-y-4 list-none">
        <li className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <span className="text-blue-800 font-bold">1</span>
          </div>
          <p className="flex-1">Define the clinical presentation of acute, subacute, and chronic cough.</p>
        </li>
        
        <li className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <span className="text-blue-800 font-bold">2</span>
          </div>
          <p className="flex-1">Describe the pathophysiology and common etiologies associated with cough.</p>
        </li>
        
        <li className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <span className="text-blue-800 font-bold">3</span>
          </div>
          <p className="flex-1">Identify common risk factors that contribute to the development of cough.</p>
        </li>
        
        <li className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <span className="text-blue-800 font-bold">4</span>
          </div>
          <p className="flex-1">Explain evidence-based diagnostic strategies and treatment approaches for different types of cough.</p>
        </li>
        
        <li className="flex items-start">
          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
            <span className="text-blue-800 font-bold">5</span>
          </div>
          <p className="flex-1">Develop an appropriate follow-up plan including patient education and prevention strategies.</p>
        </li>
      </ul>
    </div>
  );
};

export default ObjectivesSlide;