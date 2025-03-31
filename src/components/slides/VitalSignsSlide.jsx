import React from 'react';

const VitalSignsSlide = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Vital Signs</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Height</p>
            <p className="font-bold">5FT 3IN</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Weight</p>
            <p className="font-bold">186 lbs</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">BMI</p>
            <p className="font-bold">32.94</p>
            <p className="text-xs text-red-500">Obese</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Blood Pressure</p>
            <p className="font-bold">140/84 mmHg</p>
            <p className="text-xs text-yellow-500">Stage 1 HTN</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Heart Rate</p>
            <p className="font-bold">57 /min</p>
            <p className="text-xs text-green-500">Normal</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Respiratory Rate</p>
            <p className="font-bold">19 /min</p>
            <p className="text-xs text-green-500">Normal</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Oxygen Saturation</p>
            <p className="font-bold">97 %</p>
            <p className="text-xs text-green-500">Normal</p>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs text-gray-500 mb-1">Pain Scale</p>
            <p className="font-bold">0 / 10</p>
            <p className="text-xs text-green-500">None</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Diagnostic Results</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold">S</span>
              </div>
              <p className="font-bold">Spirometry Test</p>
            </div>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-blue-100">
                  <td className="py-2 font-semibold">FEV1/FVC:</td>
                  <td className="py-2">0.80</td>
                  <td className="py-2 text-green-600">No obstruction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold">X</span>
              </div>
              <p className="font-bold">Chest X-Ray (12/02/2024)</p>
            </div>
            <p className="text-sm">Negative for pneumonia, infiltrates, or other acute processes.</p>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm font-semibold">Note on Diagnostic Studies:</p>
            <p className="text-xs">Additional diagnostic studies were not performed at this time as the patient's cough showed significant improvement with antihistamine therapy. Normal spirometry results help rule out asthma as a possible cause.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitalSignsSlide; 