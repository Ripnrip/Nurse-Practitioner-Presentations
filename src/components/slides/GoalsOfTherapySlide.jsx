import React from 'react';

const GoalsOfTherapySlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Identify Underlying Cause</h3>
          <p className="text-center text-sm">Determine and address the root cause of the cough</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">📉</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Reduce Symptoms</h3>
          <p className="text-center text-sm">Decrease frequency and severity of coughing episodes</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">🛡️</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Prevent Complications</h3>
          <p className="text-center text-sm">Avoid aspiration pneumonia, stress incontinence, etc.</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">⬆️</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Improve Quality of Life</h3>
          <p className="text-center text-sm">Enhance sleep, reduce fatigue, improve daily functioning</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">🎓</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Patient Education</h3>
          <p className="text-center text-sm">Educate on modifiable risk factors (e.g., smoking cessation)</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg shadow-md flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <span className="text-3xl">🔄</span>
          </div>
          <h3 className="text-lg font-bold text-center mb-2">Prevent Recurrence</h3>
          <p className="text-center text-sm">Avoid chronic cough or recurring episodes</p>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-500">
        <h3 className="text-lg font-bold mb-3">Patient-Centered Approach</h3>
        <p>
          Treatment goals should be individualized based on the patient's age, underlying conditions, 
          preferences, and impact of cough on their quality of life. Regular reassessment 
          is essential to evaluate if goals are being met.
        </p>
      </div>
    </div>
  );
};

export default GoalsOfTherapySlide; 