import React from 'react';

const ROSSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-700 mb-3">General</h3>
        <p><span className="font-semibold">Constitutional:</span> Denies weight loss or gain, fatigue, fever, night sweats, weakness, trouble sleeping, or pain</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-700 mb-3">HEENT</h3>
        <p><span className="font-semibold">Skin:</span> Denies rashes, sores, ulcers, lumps, itching, dryness, color changes, or bruising</p>
        <p><span className="font-semibold">Head:</span> Denies headache, head injury, or neck pain</p>
        <p><span className="font-semibold">Eyes:</span> Denies vision loss, redness, blurry or double vision, flashing lights, specks</p>
        <p><span className="font-semibold">Ears:</span> Denies change in hearing, ringing in ears, earache, drainage, or dizziness</p>
        <p><span className="font-semibold">Nose:</span> Denies stuffiness, discharge, itchiness, nose bleeds, or sinus pain</p>
        <p><span className="font-semibold">Throat:</span> Denies bleeding, sore tongue, dry mouth, hoarseness, tooth ache or swollen gums</p>
        <p><span className="font-semibold">Neck:</span> Denies lumps, swollen glands, pain, or stiffness</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-700 mb-3">Cardiopulmonary</h3>
        <p className="text-blue-600 font-semibold">
          <span className="font-semibold">Respiratory:</span> Occasional coughing. Denies dyspnea, wheezing, or painful breathing
        </p>
        <p><span className="font-semibold">Cardiovascular:</span> Denies chest pain, tightness, palpitations, shortness of breath with activity, edema, or difficulty breathing lying down</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-blue-700 mb-3">Gastrointestinal</h3>
        <p><span className="font-semibold">Gastrointestinal:</span> Denies abdominal pain, nausea, vomiting, diarrhea, constipation, changes in appetite, heartburn, bloating, or changes in bowel habits, yellow discoloration, or difficulty swallowing</p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg shadow-md md:col-span-2 lg:col-span-3">
        <h3 className="text-lg font-bold text-center mb-3">Review of Systems Summary</h3>
        <div className="flex justify-center space-x-4">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="font-semibold text-center">Positive Findings</p>
            <ul className="list-disc pl-5">
              <li>Occasional coughing</li>
            </ul>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <p className="font-semibold text-center">Most Pertinent Negatives</p>
            <ul className="list-disc pl-5">
              <li>No nasal symptoms</li>
              <li>No sore throat</li>
              <li>No wheezing or dyspnea</li>
              <li>No heartburn/reflux symptoms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROSSlide; 