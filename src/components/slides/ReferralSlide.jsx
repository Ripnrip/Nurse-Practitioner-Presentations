import React from 'react';

const ReferralSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500 mb-6">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Follow-Up Plan</h3>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-semibold">Initial Follow-Up:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Schedule follow-up appointment in 3 months</li>
                <li>Call sooner if symptoms worsen or new symptoms develop</li>
                <li>Continue current treatment plan with adjustments as discussed</li>
              </ul>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-semibold">Monitoring Parameters:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Frequency and severity of cough</li>
                <li>Changes in cough character (dry vs. productive)</li>
                <li>Response to medication adjustments</li>
                <li>Side effects from medications</li>
                <li>Impact on sleep and quality of life</li>
              </ul>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-semibold">Seasonal Considerations:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>May need more frequent follow-up during peak allergy seasons</li>
                <li>Consider seasonal adjustments to medication regimen</li>
                <li>Monitor for changes in symptoms with weather/seasonal transitions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-bold text-green-700 mb-3">Patient Self-Monitoring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-semibold text-center mb-2">Daily Tracking</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Cough frequency (using cough diary)</li>
                <li>Medication compliance</li>
                <li>Triggers that worsen symptoms</li>
                <li>Impact on activities and sleep</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-semibold text-center mb-2">Weekly Assessment</p>
              <ul className="list-disc pl-5 text-sm">
                <li>Overall trend in symptom control</li>
                <li>Response to medication changes</li>
                <li>Side effects from medications</li>
                <li>New or changing symptoms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500 h-full">
          <h3 className="text-lg font-bold text-purple-700 mb-3">Referral Criteria</h3>
          <p className="text-sm mb-4">
            Referral to a specialist can occur at any point during cough evaluation and treatment. 
            Consider the following indications for specialty referral:
          </p>
          
          <div className="space-y-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="font-semibold">Immediate Referral Indications:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Concerning findings like possible cancer on imaging</li>
                <li>Severe or sudden onset dyspnea</li>
                <li>Significant hemoptysis</li>
                <li>Rapid weight loss with persistent cough</li>
              </ul>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="font-semibold">Specialist Referrals to Consider:</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-sm font-semibold">Pulmonology:</p>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Refractory chronic cough</li>
                    <li>Abnormal PFTs</li>
                    <li>Concerning imaging findings</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold">Allergist:</p>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Suspected allergic etiology</li>
                    <li>Need for immunotherapy</li>
                    <li>Multiple drug allergies</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold">ENT:</p>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Upper airway cough syndrome</li>
                    <li>Chronic sinusitis</li>
                    <li>Post-nasal drip</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-semibold">Gastroenterology:</p>
                  <ul className="list-disc pl-5 text-xs">
                    <li>Refractory GERD</li>
                    <li>Need for pH monitoring</li>
                    <li>Suspected esophageal disorders</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-purple-50 rounded-lg">
              <p className="font-semibold">Other Specialist Considerations:</p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li>Infectious Disease: Suspected TB or other unusual infections</li>
                <li>Cardiology: If cardiac cause of cough is suspected</li>
                <li>Speech Therapy: For refractory or habit cough</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
        <p className="font-semibold">Follow-Up and Referral Note:</p>
        <p className="text-sm">
          The current plan is to follow up in 3 months with continued antihistamine therapy and optimized 
          PPI dosing. No specialist referrals are indicated at this time given the positive response to 
          antihistamine therapy. However, if symptoms recur or worsen, earlier follow-up should be scheduled 
          and appropriate specialist referrals will be considered based on the clinical presentation.
        </p>
      </div>
    </div>
  );
};

export default ReferralSlide; 