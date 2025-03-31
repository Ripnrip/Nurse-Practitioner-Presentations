import React, { useState } from 'react';
import TitleSlide from './slides/TitleSlide';
import ObjectivesSlide from './slides/ObjectivesSlide';
import DiseaseDefinitionSlide from './slides/DiseaseDefinitionSlide';
import PathophysiologySlide from './slides/PathophysiologySlide';
import EpidemiologySlide from './slides/EpidemiologySlide';
import DifferentialDiagnosisSlide from './slides/DifferentialDiagnosisSlide';
import PatientTimelineSlide from './slides/PatientTimelineSlide';
import PatientProfileSlide from './slides/PatientProfileSlide';
import MedicationsSlide from './slides/MedicationsSlide';
import PhysicalExamSlide from './slides/PhysicalExamSlide';
import DiagnosticStudiesSlide from './slides/DiagnosticStudiesSlide';
import DifferentialAnalysisSlide from './slides/DifferentialAnalysisSlide';
import WorkingDiagnosisSlide from './slides/WorkingDiagnosisSlide';
import TreatmentAlgorithmSlide from './slides/TreatmentAlgorithmSlide';
import PharmacologicalSlide from './slides/PharmacologicalSlide';
import NasalSprayTechniqueSlide from './slides/NasalSprayTechniqueSlide';
import NonPharmacologicalSlide from './slides/NonPharmacologicalSlide';
import FollowUpSlide from './slides/FollowUpSlide';
import BillingCodingSlide from './slides/BillingCodingSlide';
import CaseSummarySlide from './slides/CaseSummarySlide';
import ReferencesSlide from './slides/ReferencesSlide';
import QuestionsSlide from './slides/QuestionsSlide';

const SlidePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const slides = [
    { title: "Chronic Cough Case Study in an Older Adult", component: <TitleSlide /> },
    { title: "Learning Objectives", component: <ObjectivesSlide /> },
    { title: "Chronic Cough: Disease Definition & Classification", component: <DiseaseDefinitionSlide /> },
    { title: "Pathophysiology of Chronic Cough", component: <PathophysiologySlide /> },
    { title: "Epidemiology & Risk Factors", component: <EpidemiologySlide /> },
    { title: "Differential Diagnosis Comparison", component: <DifferentialDiagnosisSlide /> },
    { title: "Patient Journey: 71-year-old Caucasian Female", component: <PatientTimelineSlide /> },
    { title: "Patient Profile", component: <PatientProfileSlide /> },
    { title: "Current Medications", component: <MedicationsSlide /> },
    { title: "Physical Examination & Vitals", component: <PhysicalExamSlide /> },
    { title: "Diagnostic Studies", component: <DiagnosticStudiesSlide /> },
    { title: "Differential Diagnosis Analysis", component: <DifferentialAnalysisSlide /> },
    { title: "Working Diagnosis", component: <WorkingDiagnosisSlide /> },
    { title: "Evidence-Based Management", component: <TreatmentAlgorithmSlide /> },
    { title: "Pharmacological Management", component: <PharmacologicalSlide /> },
    { title: "Proper Inhaler & Medication Technique", component: <NasalSprayTechniqueSlide /> },
    { title: "Non-Pharmacological Interventions", component: <NonPharmacologicalSlide /> },
    { title: "Patient Education & Follow-Up Plan", component: <FollowUpSlide /> },
    { title: "Coding & Billing", component: <BillingCodingSlide /> },
    { title: "Case Summary", component: <CaseSummarySlide /> },
    { title: "References", component: <ReferencesSlide /> },
    { title: "Questions?", component: <QuestionsSlide /> }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-blue-700 text-white flex justify-between items-center">
          <button 
            onClick={goToPrevSlide}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            Previous
          </button>
          <div className="text-center">
            <p className="text-sm">Slide {currentSlide + 1} of {slides.length}</p>
            <h2 className="text-lg font-semibold">Chronic Cough Case Study</h2>
          </div>
          <button 
            onClick={goToNextSlide}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            Next
          </button>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">{slides[currentSlide].title}</h2>
          {slides[currentSlide].component}
        </div>
      </div>
    </div>
  );
};

export default SlidePresentation; 