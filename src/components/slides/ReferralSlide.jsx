import React from 'react';

const ReferralSlide = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="p-5 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
        <h3 className="text-xl font-bold text-yellow-700 mb-3">Follow-Up and Referral</h3>
        <p className="font-semibold">Follow-Up and Referral Note:</p>
        <p className="text-sm mt-2">
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