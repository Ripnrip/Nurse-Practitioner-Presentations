import React from 'react';

const FollowUpSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-blue-50 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Follow-Up Recommendations</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Acute bronchitis or pneumonia:</span> Follow-up in 2–3 weeks or sooner if symptoms worsen</li>
            <li><span className="font-semibold">Chronic cough:</span> Reevaluate every 2–4 weeks during treatment trial</li>
            <li><span className="font-semibold">Repeat imaging:</span> Consider repeat chest X-ray after pneumonia recovery if concern for underlying pathology (e.g., smoker)</li>
            <li><span className="font-semibold">Treatment trials:</span> Follow up after 2-4 weeks of each sequential treatment trial for chronic cough</li>
          </ul>
          
          <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
            <h4 className="font-bold text-center mb-2">Monitoring Parameters</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm font-semibold">Symptom changes:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>Frequency</li>
                  <li>Severity</li>
                  <li>Character</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold">Other monitoring:</p>
                <ul className="list-disc pl-4 text-xs">
                  <li>Medication adherence</li>
                  <li>Side effects</li>
                  <li>Quality of life impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-green-50 p-5 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 mb-3">Patient Education</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cough may persist beyond infection and doesn't always need antibiotics</li>
            <li>Proper medication adherence is crucial for chronic conditions (e.g., asthma, GERD)</li>
            <li>Smoking cessation reduces risk of chronic cough and improves lung health</li>
            <li>Vaccinations (influenza, pneumococcal, Tdap) help prevent infectious causes of cough</li>
            <li>Avoid triggers (e.g., allergens, pollutants) and consider environmental modifications at home</li>
            <li>Explain red flag symptoms (e.g., hemoptysis, weight loss, dyspnea) that warrant immediate care</li>
          </ul>
        </div>
        
        <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
          <h4 className="font-bold mb-2">Red Flag Symptoms - When to Seek Immediate Care:</h4>
          <div className="grid grid-cols-2 gap-2">
            <ul className="list-disc pl-5 text-sm">
              <li>Severe shortness of breath</li>
              <li>Coughing up blood</li>
              <li>High fever (&gt;101°F/38.3°C)</li>
            </ul>
            <ul className="list-disc pl-5 text-sm">
              <li>Chest pain</li>
              <li>New swelling in neck or face</li>
              <li>Inability to swallow fluids</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpSlide;