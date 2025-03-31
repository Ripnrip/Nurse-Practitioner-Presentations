import React from 'react';

const EducationSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 mb-6">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Treatment Education</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">About Your Cough:</span> 
              <p className="text-sm ml-2">Cough that persists for more than 8 weeks is considered chronic and often has multiple causes.</p>
            </li>
            <li>
              <span className="font-semibold">Medication Information:</span> 
              <p className="text-sm ml-2">Continue Zyrtec daily. Change Protonix (pantoprazole) to scheduled daily dosing rather than as needed.</p>
            </li>
            <li>
              <span className="font-semibold">Side Effects to Watch For:</span> 
              <p className="text-sm ml-2">Mild drowsiness with antihistamines, possible headache or stomach upset with PPI.</p>
            </li>
            <li>
              <span className="font-semibold">Expectations for Improvement:</span> 
              <p className="text-sm ml-2">Chronic cough may take several weeks to completely resolve, even with appropriate treatment.</p>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 mb-3">Self-Management Strategies</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Hydration:</span> 
              <p className="text-sm ml-2">Stay well-hydrated to help thin mucus secretions and soothe irritated airways.</p>
            </li>
            <li>
              <span className="font-semibold">Sleep Position:</span> 
              <p className="text-sm ml-2">Elevate the head of your bed with blocks or a wedge pillow to help reduce reflux at night.</p>
            </li>
            <li>
              <span className="font-semibold">Dietary Changes:</span> 
              <p className="text-sm ml-2">Avoid acidic or reflux-triggering foods especially in the evening. Wait 2-3 hours after eating before lying down.</p>
            </li>
            <li>
              <span className="font-semibold">Environmental Controls:</span> 
              <p className="text-sm ml-2">Keep windows closed and wear a mask during cleaning or outdoor activities to reduce allergen exposure.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500 mb-6">
          <h3 className="text-lg font-bold text-red-700 mb-3">When to Call the Office</h3>
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="font-semibold">Call immediately if you experience:</p>
            <ul className="list-disc pl-5 text-sm mt-1">
              <li>Severe shortness of breath or difficulty breathing</li>
              <li>Coughing up blood</li>
              <li>High fever, chills, or night sweats</li>
              <li>Significant chest pain</li>
              <li>Severe lightheadedness or dizziness</li>
            </ul>
          </div>
          
          <div className="p-3 bg-yellow-50 rounded-lg mt-4">
            <p className="font-semibold">Call during office hours if you have:</p>
            <ul className="list-disc pl-5 text-sm mt-1">
              <li>Medication side effects such as drowsiness, dizziness, or confusion</li>
              <li>No improvement in symptoms after 2 weeks</li>
              <li>Worsening of cough despite treatment</li>
              <li>New symptoms (e.g., rash, swelling, new pain)</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Preventive Measures</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold">Vaccinations:</span> 
              <p className="text-sm ml-2">Encourage staying up to date with influenza, Tdap, and pneumococcal vaccines to prevent respiratory infections.</p>
            </li>
            <li>
              <span className="font-semibold">Smoking Cessation:</span> 
              <p className="text-sm ml-2">Avoiding smoke exposure is critical for maintaining respiratory health.</p>
            </li>
            <li>
              <span className="font-semibold">Weight Management:</span> 
              <p className="text-sm ml-2">Maintaining a healthy weight can reduce GERD symptoms and improve respiratory function.</p>
            </li>
            <li>
              <span className="font-semibold">Allergen Avoidance:</span> 
              <p className="text-sm ml-2">Identify and minimize exposure to allergens that may trigger your cough.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-center text-blue-700 mb-3">Patient Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-center mb-2">Educational Materials</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>American Lung Association</li>
              <li>GERD and Cough Handout</li>
              <li>Allergy Avoidance Guide</li>
            </ul>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-center mb-2">Monitoring Tools</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Cough Diary Template</li>
              <li>Symptom Severity Scale</li>
              <li>Medication Tracking Sheet</li>
            </ul>
          </div>
          
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-center mb-2">Mobile Resources</h4>
            <ul className="list-disc pl-5 text-sm">
              <li>Medication Reminder Apps</li>
              <li>Air Quality Index Trackers</li>
              <li>Local Pollen Count Alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSlide; 