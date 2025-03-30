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
              <p className="text-lg font-chalk">Identify common causes of chronic cough in older adults</p>
              <div className="mt-1 h-0.5 bg-blue-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 2 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">2</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Recognize the impact of comorbidities and polypharmacy on diagnosing cough</p>
              <div className="mt-1 h-0.5 bg-green-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 3 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">3</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Discuss the diagnostic process when initial treatments fail</p>
              <div className="mt-1 h-0.5 bg-yellow-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 4 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">4</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Review evidence-based management for allergic rhinitis in older adults</p>
              <div className="mt-1 h-0.5 bg-purple-400 w-3/4 opacity-50"></div>
            </div>
          </div>

          {/* Objective 5 */}
          <div className="flex items-start space-x-4 text-white">
            <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">5</div>
            <div className="flex-grow">
              <p className="text-lg font-chalk">Develop a patient-centered care plan for allergic rhinitis</p>
              <div className="mt-1 h-0.5 bg-red-400 w-3/4 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-10 text-white text-6xl">📚</div>
        <div className="absolute bottom-4 left-4 opacity-10 text-white text-6xl">🎓</div>
        
        {/* Chalk smudges */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-gray-700 opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-4 h-16 bg-gradient-to-l from-gray-700 opacity-30"></div>
      </div>
    </div>
  );
};

export default ObjectivesSlide;