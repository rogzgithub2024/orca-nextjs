'use client';

import Image from 'next/image';
import { useState } from 'react';
import StepIndicator from '@/components/newbiz-organic/StepIndicator';
import PropertyLocationStep from '@/components/newbiz-organic/PropertyLocationStep';
import PropertyInformationStep from '@/components/newbiz-organic/PropertyInformationStep';

export default function NewbizOrganicPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '',
    name: '',
    email: '',
    phoneNumber: '',
    rentalPropertyAddress: '',
    cityOfRentalProperty: 'Surrey',
    estimatedSquareFootage: '',
    numberOfBedrooms: '',
    whenPlanningToRent: '',
    plansWithProperty: '',
    consideringSelling: '',
    rentAmountInMind: '',
    workedWithPropertyManager: '',
    whereHeardAboutOrca: '',
    additionalInformation: '',
  });

  const steps = [
    { number: 1, title: 'Property Location' },
    { number: 2, title: 'Property Information' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDataChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PropertyLocationStep
            selectedCity={formData.city}
            onCityChange={(city: string) => handleDataChange('city', city)}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <PropertyInformationStep
            formData={formData}
            onDataChange={handleDataChange}
            onBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  const leftPageStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="relative z-10 h-full flex flex-col px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
              <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-14">
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 text-center">
                    Orca Realty Inc.
                  </h1>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-6 leading-tight mt-2 sm:mt-3 md:mt-4 text-center">
                  Free Rental Consultation
                </h2>
                <p className="r-mb-3 r-mt-3 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-2 sm:mt-3 md:mt-4 text-center">
                  Get expert advice at no cost
                </p>
              </div>
            
              <div className="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 text-gray-700 leading-relaxed flex-1 text-sm sm:text-base md:text-lg lg:text-xl">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                    Tell us about your property, and one of our Property Management
                    experts will prepare a <strong className="text-gray-900 font-bold">personalized Rental Evaluation</strong> for you
                    — completely free.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 r-mt-4">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                    Providing complete details ensures you receive the most
                    accurate advice and recommendations tailored to your property.
                  </p>
                </div>
              </div>
          </div>
        );
      case 2:
        return (
          <div className="relative z-10 h-full flex flex-col px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20 ">

            {/* Centered Content */}
            <div className="flex-1 flex flex-col items-center justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
              {/* Profile Picture - Circular */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-teal-700 overflow-hidden shadow-lg relative">
                  <Image
                    src="/orca-team-petr-vokoun-400x400-1.png"
                    alt="Petr Vokoun"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 10rem, 14rem"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center r-m-3">
                Petr Vokoun
              </h2>

              {/* First Text Block */}
              <div className="max-w-lg mx-auto px-4 mb-6 sm:mb-8 r-mb-3">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed">
                  Please share as much detail as you can about your property. The more we know, the more accurate your rental evaluation will be. Once we&apos;ve reviewed everything, a member of our team will be in touch to walk you through the next steps.
                </p>
              </div>

              {/* Second Text Block */}
              <div className="max-w-lg mx-auto px-4">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center leading-relaxed">
                  Looking forward to helping you explore the best options for your property.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8 md:py-12">
      {/* Top Accent Bar */}
      <div className="fixed top-0 left-0 right-0 bg-black h-2 z-10"></div>
      
      {/* Main Content - Centered */}
      <div className="w-full max-w-6xl mt-2">
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 flex flex-col">
          {/* Header Section with Branding - Inside the box */}
          <div className="border-b border-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-0 sm:pt-8 md:pt-12 lg:pt-16 pb-0 sm:pb-8 md:pb-12 lg:pb-16">
            <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
              <StepIndicator steps={steps} currentStep={currentStep} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row flex-1 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
              {/* Left Panel - Information */}
              <div className="r-p-3 bg-[#F3F2F3] lg:w-2/5 text-gray-900 relative overflow-hidden">
                {leftPageStep()}
                <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-black/5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-black/5 rounded-full -ml-12 sm:-ml-18 md:-ml-24 -mb-12 sm:-mb-18 md:-mb-24"></div>
                  
              </div>

              {/* Right Panel - Form */}
              <div className="r-p-3 lg:w-3/5 p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 bg-white flex flex-col lg:max-h-[650px] min-h-0">{renderStep()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

