import React from 'react';

const ObjectivesSlide = () => {
  return (
    <div className="flex flex-col space-y-4">
      <p className="text-xl font-semibold mb-4">By the end of this presentation, participants will be able to:</p>
      
      {/* Chalkboard-style container */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-2xl relative overflow-hidden">
        {/* Chalk dust effect */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-gray-700"></div>
        
        {/* Learning objectives with visual elements */}
        <div className="space-y-6 relative">
          {/* Objective 1 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">1</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Define the clinical presentation of acute, subacute, and chronic cough</p>
              <div className="mt-1 h-0.5 bg-blue-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 2 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">2</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Describe the pathophysiology and common etiologies associated with cough</p>
              <div className="mt-1 h-0.5 bg-green-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 3 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">3</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Identify common risk factors that contribute to the development of cough</p>
              <div className="mt-1 h-0.5 bg-yellow-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 4 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">4</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Explain evidence-based diagnostic strategies for differentiating cough etiologies in older adults</p>
              <div className="mt-1 h-0.5 bg-purple-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 5 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">5</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Apply a systematic approach to managing persistent cough when initial treatments fail</p>
              <div className="mt-1 h-0.5 bg-red-400 w-3/4 opacity-50"></div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <div className="w-6 h-6 bg-opacity-50 rounded-full flex items-center justify-center">📚</div>
          <div className="w-6 h-6 bg-opacity-50 rounded-full flex items-center justify-center">🎓</div>
        </div>
        
        {/* Chalk smudges */}
        <div className="absolute top-10 right-10 w-20 h-6 bg-white bg-opacity-5 rounded transform rotate-12"></div>
        <div className="absolute bottom-10 left-16 w-16 h-5 bg-white bg-opacity-5 rounded transform -rotate-6"></div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;