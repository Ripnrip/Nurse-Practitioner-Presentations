import React from 'react';

const MedicationsSlide = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 text-left">Medication</th>
              <th className="py-2 px-3 text-left">Dosage</th>
              <th className="py-2 px-3 text-left">Indication</th>
              <th className="py-2 px-3 text-left">Cough Relation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-3">Meclizine HCl</td>
              <td className="py-2 px-3">25 mg PRN BID</td>
              <td className="py-2 px-3">Vertigo</td>
              <td className="py-2 px-3">None known</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Xarelto</td>
              <td className="py-2 px-3">20 mg daily</td>
              <td className="py-2 px-3">Atrial Fibrillation</td>
              <td className="py-2 px-3">None known</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Protonix</td>
              <td className="py-2 px-3">20 mg PRN daily</td>
              <td className="py-2 px-3">GERD</td>
              <td className="py-2 px-3"><span className="text-yellow-600">Undertreated GERD may contribute to cough</span></td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Ezetimibe</td>
              <td className="py-2 px-3">10 mg QHS</td>
              <td className="py-2 px-3">Hyperlipidemia</td>
              <td className="py-2 px-3">None known</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Lexapro</td>
              <td className="py-2 px-3">20 mg daily</td>
              <td className="py-2 px-3">Anxiety</td>
              <td className="py-2 px-3">None known</td>
            </tr>
            <tr className="border-t bg-gray-50">
              <td className="py-2 px-3">Tramadol HCl</td>
              <td className="py-2 px-3">50 mg PRN TID</td>
              <td className="py-2 px-3">Pain</td>
              <td className="py-2 px-3">None known</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-3">Amiodarone HCl</td>
              <td className="py-2 px-3">100 mg 0.5 tab daily</td>
              <td className="py-2 px-3">Atrial Fibrillation</td>
              <td className="py-2 px-3"><span className="text-yellow-600">Rare pulmonary toxicity</span></td>
            </tr>
            <tr className="border-t bg-yellow-50 font-bold">
              <td className="py-2 px-3">Amlodipine</td>
              <td className="py-2 px-3">5 mg daily</td>
              <td className="py-2 px-3">Hypertension</td>
              <td className="py-2 px-3">Replaced Lisinopril (ACE-I)</td>
            </tr>
            <tr className="border-t bg-blue-50 font-bold">
              <td className="py-2 px-3">Tessalon Perles</td>
              <td className="py-2 px-3">100 mg TID PRN</td>
              <td className="py-2 px-3">Cough Suppression</td>
              <td className="py-2 px-3">Symptom management (Recently started)</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
        <p className="font-bold">Key Note:</p>
        <p>Lisinopril (ACE inhibitor) was discontinued and replaced with Amlodipine due to suspected ACE inhibitor-induced cough; however, cough has persisted for 4+ months suggesting other etiologies.</p>
      </div>
    </div>
  );
};

export default MedicationsSlide;