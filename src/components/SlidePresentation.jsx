import React, { useState } from 'react';
import TitleSlide from './slides/TitleSlide';
import ObjectivesSlide from './slides/ObjectivesSlide';
import DiseaseDefinitionSlide from './slides/DiseaseDefinitionSlide';
import PathophysiologySlide from './slides/PathophysiologySlide';
import RiskFactorsSlide from './slides/RiskFactorsSlide';
import GoalsOfTherapySlide from './slides/GoalsOfTherapySlide';
import DiagnosticsSlide from './slides/DiagnosticsSlide';
import TreatmentGuidelinesSlide from './slides/TreatmentGuidelinesSlide';
import FollowUpSlide from './slides/FollowUpSlide';
import CaseStudySlide from './slides/CaseStudySlide';
import PatientHistorySlide from './slides/PatientHistorySlide';
import ROSSlide from './slides/ROSSlide';
import VitalSignsSlide from './slides/VitalSignsSlide';
import PhysicalExamSlide from './slides/PhysicalExamSlide';
import AssessmentSlide from './slides/AssessmentSlide';
import TreatmentPlanSlide from './slides/TreatmentPlanSlide';
import EducationSlide from './slides/EducationSlide';
import ReferralSlide from './slides/ReferralSlide';
import BillingSlide from './slides/BillingSlide';
import ReferencesSlide from './slides/ReferencesSlide';

const SlidePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const slides = [
    { title: "I. Cough Management in Primary Care", component: <TitleSlide /> },
    { title: "II. Learning Objectives", component: <ObjectivesSlide /> },
    { title: "III. Brief Definition of Cough", component: <DiseaseDefinitionSlide /> },
    { title: "IV. Pathophysiology & Epidemiology", component: <PathophysiologySlide /> },
    { title: "V. Common Risk Factors", component: <RiskFactorsSlide /> },
    { title: "VI. Goals of Therapy", component: <GoalsOfTherapySlide /> },
    { title: "VII. Recommended Diagnostics", component: <DiagnosticsSlide /> },
    { title: "VIII. Treatment Guidelines", component: <TreatmentGuidelinesSlide /> },
    { title: "IX. Follow-Up & Education Recommendations", component: <FollowUpSlide /> },
    { title: "X. Case Study", component: <CaseStudySlide /> },
    { title: "XI. Subjective: Patient History", component: <PatientHistorySlide /> },
    { title: "XII. Subjective: Review of Systems", component: <ROSSlide /> },
    { title: "XIII. Objective: Vital Signs & Diagnostics", component: <VitalSignsSlide /> },
    { title: "XIV. Objective: Physical Examination", component: <PhysicalExamSlide /> },
    { title: "XV. Assessment: Differential & Working Diagnoses", component: <AssessmentSlide /> },
    { title: "XVI. Evidence-Based Treatment Plan", component: <TreatmentPlanSlide /> },
    { title: "XVII. Patient Education", component: <EducationSlide /> },
    { title: "XVIII. Follow-Up & Referral Criteria", component: <ReferralSlide /> },
    { title: "XIX. Pertinent Billing", component: <BillingSlide /> },
    { title: "XX. References", component: <ReferencesSlide /> }
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
            <h2 className="text-lg font-semibold">Cough Management in Primary Care</h2>
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