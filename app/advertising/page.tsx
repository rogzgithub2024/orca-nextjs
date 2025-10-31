'use client';

import { useState } from 'react';
import StepIndicator from '@/components/advertising/StepIndicator';
import OwnerInformationSection from '@/components/advertising/OwnerInformationSection';
import PointOfContactSection from '@/components/advertising/PointOfContactSection';
import MailingInformationSection from '@/components/advertising/MailingInformationSection';
import RentalPropertyInformationSection from '@/components/advertising/RentalPropertyInformationSection';
import OccupancyAvailabilitySection from '@/components/advertising/OccupancyAvailabilitySection';
import UtilitiesInclusionsRestrictionsSection from '@/components/advertising/UtilitiesInclusionsRestrictionsSection';
import OtherDetailsSection from '@/components/advertising/OtherDetailsSection';
import ReviewSection from '@/components/advertising/ReviewSection';

export default function AdvertisingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Owner Information
    businessLegalName: '',
    ownerEmail: '',
    phone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    residentStatus: 'Resident',
    coOwners: [] as Array<{ firstName: string; lastName: string; dateOfBirth: string }>,
    
    // Point of Contact
    pointOfContact: 'Same as Main Owner',
    otherPointOfContact: '',
    
    // Mailing Information
    unitSuite: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',

    // Step 2 - Rental Property Information & Features
    rental: {
      unitSuite: '',
      streetAddress: '',
      city: '',
      province: '',
      postalCode: '',
      neighborhood: '',
      yearBuilt: '',
      totalFloorArea: '',
      keys: '',
      bedrooms: '',
      bathrooms: '',
      den: '',
      balconyPatio: '',
      storage: '',
      fireplaceTypes: [] as string[],
      alarmCode: '',
      parking: [] as string[],
      laundry: '',
      heating: [] as string[],
    },

    // Step 3 - Occupancy & Availability
    occupancy: {
      availableAsap: '',
      renovationPlans: '',
      fixedTermOnly: '',
      boostAd: '',
      anticipatedDate: '',
      rentalTerm: '',
    },

    // Step 4 - Utilities/Inclusions/Restrictions
    utilities: {
      water: '',
      electricity: '',
      gas: '',
      heat: '',
      inclusions: [] as string[],
      furnishing: '',
      pets: '',
      propertyType: '',
    },

    // Step 5 - Other Details
    other: {
      strataCompany: '',
      strataManagerName: '',
      strataPhone: '',
      strataEmail: '',
      buildingManagerName: '',
      buildingManagerPhone: '',
      buildingManagerEmail: '',
      moveInFees: '',
      amenities: [] as string[],
      signUpFront: '',
      maintenance: [] as string[],
      sprinklersService: '',
      hasSelfContainedSuite: '',
      fuseBoxLocation: '',
      amenitiesFloor: '',
      bikeStorageLocation: '',
      garbageInfo: '',
      amenitiesNotes: '',
      virtualTour: '',
      listingUrl: '',
    },
  });

  const steps = [
    { number: 1, title: 'Homeowner Details' },
    { number: 2, title: 'Rental Property Information & Features' },
    { number: 3, title: 'Occupancy and Property Availability' },
    { number: 4, title: 'Utilities, Inclusions, Restrictions' },
    { number: 5, title: 'Other Details' },
    { number: 6, title: 'Review' },
  ];

  const handleDataChange = (path: string, value: unknown) => {
    setFormData(prev => {
      const next: typeof prev = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let obj: Record<string, unknown> = next as unknown as Record<string, unknown>;
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        obj[k] = { ...((obj[k] as Record<string, unknown>) || {}) };
        obj = obj[k] as Record<string, unknown>;
      }
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

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

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-2 sm:px-4 pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-8 md:pb-12">
      <div className="r-mt-3 w-full max-w-6xl lg:max-w-7xl">
        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={currentStep} />

        {/* Main Form Content - Centered */}
        <div className="r-mt-3 bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 " style={{ scrollbarWidth: 'thin', scrollbarColor: '#9ca3af #f3f4f6',marginLeft: '24px',marginRight: '24px', marginTop: '104px' }}>
          <div className="p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20">
            {currentStep === 1 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <OwnerInformationSection
                  formData={formData}
                  onDataChange={handleDataChange}
                />
                <PointOfContactSection
                  formData={formData}
                  onDataChange={handleDataChange}
                />
                <MailingInformationSection
                  formData={formData}
                  onDataChange={handleDataChange}
                />
              </div>
            )}
            {currentStep === 2 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <RentalPropertyInformationSection onBack={handleBack} onNext={handleNext} formData={formData} onDataChange={handleDataChange} />
              </div>
            )}
            {currentStep === 3 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <OccupancyAvailabilitySection onBack={handleBack} onNext={handleNext} formData={formData} onDataChange={handleDataChange} />
              </div>
            )}
            {currentStep === 4 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <UtilitiesInclusionsRestrictionsSection onBack={handleBack} onNext={handleNext} formData={formData} onDataChange={handleDataChange} />
              </div>
            )}
            {currentStep === 5 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <OtherDetailsSection onBack={handleBack} onNext={handleNext} formData={formData} onDataChange={handleDataChange} />
              </div>
            )}
            {currentStep === 6 && (
              <div className="r-p-3 space-y-5 sm:space-y-6 md:space-y-8">
                <ReviewSection data={formData} onBack={handleBack} onSubmit={() => { /* TODO: submit handler */ }} />
              </div>
            )}
          </div>

          {/* Navigation Button */}
          {currentStep === 1 && (
            <div className="r-p-3 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-6 sm:pb-8 md:pb-12 flex justify-end border-t border-gray-200 pt-6">
              <button
                onClick={handleNext}
                className="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Rental Property Information & Features
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

