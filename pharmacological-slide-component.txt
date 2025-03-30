import React from 'react';

const PharmacologicalSlide = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 text-left">Therapy</th>
              <th className="py-2 px-3 text-left">Recommendation</th>
              <th className="py-2 px-3 text-left">Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t bg-blue-50">
              <td className="py-2 px-3 font-semibold">Antihistamine</td>
              <td className="py-2 px-3">
                Continue Cetirizine (Zyrtec) 10 mg daily
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Proven effective for patient</li>
                  <li>Second-generation = less sedation</li>
                  <li>Safer for older adults</li>
                </ul>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Intranasal Corticosteroid</td>
              <td className="py-2 px-3">
                Consider adding if symptoms persist<br/>
                Fluticasone propionate 50mcg/spray<br/>
                1-2 sprays/nostril daily
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>First-line therapy per guidelines</li>
                  <li>Effective for persistent symptoms</li>
                  <li>Target local inflammation</li>
                </ul>
              </td>
            </tr>
            <tr className="border-t bg-red-50">
              <td className="py-2 px-3 font-semibold">Avoid</td>
              <td className="py-2 px-3">
                First-generation antihistamines<br/>
                (e.g., diphenhydramine)
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Risk of anticholinergic effects</li>
                  <li>May cause sedation, confusion</li>
                  <li>Potentially harmful in elderly</li>
                </ul>
              </td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3 font-semibold">Chronic Medications</td>
              <td className="py-2 px-3">
                Continue all current therapies
              </td>
              <td className="py-2 px-3">
                <ul className="list-disc pl-4">
                  <li>Monitor for interactions</li>
                  <li>Ensure adequate supply</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-semibold">Medication Selection Considerations:</p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>Patient age and comorbidities</li>
            <li>Drug interactions with current medications</li>
            <li>Historical response to treatments</li>
            <li>Cost and insurance coverage</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-semibold">Second-Generation Antihistamines:</p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>Cetirizine (Zyrtec)</li>
            <li>Loratadine (Claritin)</li>
            <li>Fexofenadine (Allegra)</li>
            <li>Levocetirizine (Xyzal)</li>
            <li>Less sedating, better safety profile</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg shadow border-l-4 border-blue-500">
          <p className="font-semibold">Intranasal Corticosteroids:</p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>Fluticasone propionate (Flonase)</li>
            <li>Mometasone furoate (Nasonex)</li>
            <li>Budesonide (Rhinocort)</li>
            <li>Triamcinolone (Nasacort)</li>
            <li>Most effective for nasal symptoms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PharmacologicalSlide;