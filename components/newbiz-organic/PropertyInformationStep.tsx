'use client';

interface PropertyInformationStepProps {
  formData: {
    name: string;
    email: string;
    phoneNumber: string;
    rentalPropertyAddress: string;
    cityOfRentalProperty: string;
    estimatedSquareFootage: string;
    numberOfBedrooms: string;
    whenPlanningToRent: string;
    plansWithProperty: string;
    consideringSelling: string;
    rentAmountInMind: string;
    workedWithPropertyManager: string;
    whereHeardAboutOrca: string;
    additionalInformation: string;
  };
  onDataChange: (field: string, value: string) => void;
  onBack: () => void;
}

const cities = [
  'Surrey',
  'Burnaby',
  'Coquitlam',
  'Delta',
  'Fraser Valley',
  'Kelowna',
  'Langley',
  'Maple Ridge',
  'New Westminster',
  'North Vancouver',
  'Pitt Meadows',
  'Port Moody',
  'Richmond',
  'Vancouver',
  'West Vancouver',
  'White Rock',
  'Other City (Not listed in option)',
];

const whenPlanningToRentOptions = [
  'Immediately (within 30 days)',
  'Within the next 1-3 Months',
  'More than 3 Months from now',
  'Not sure yet/just exploring options',
];

const plansWithPropertyOptions = [
  'Rent short-term (less than 1 Year)',
  'Rent medium-term (1-5 Years)',
  'Rent long-term (5+ Years)',
  'I\'m undecided/just gathering information',
];

const consideringSellingOptions = [
  'Yes, I am considering selling now (within the next 3 months)',
  'Possibly, within the next 1-2 years',
  'No, I\'m focused on renting',
  'I\'m not sure yet. I just want information',
];

const rentAmountInMindOptions = [
  'Less than $2,000',
  '$2,000 - $2,999',
  '$3,000 - $4,999',
  '$5,000+',
  'I\'m not sure yet',
];

const workedWithPropertyManagerOptions = [
  'Yes, currently with one but looking to switch',
  'Yes, in the past',
  'No, I\'ve always managed myself',
  'No, this is my first time renting',
];

const whereHeardAboutOrcaOptions = [
  'BARK',
  'Craiglist',
  'Direct Searched Orca Website',
  'Facebook Ads',
  'Facebook Page',
  'Google Search (General Results)',
  'Orca Car',
  'Orca Yard Sign',
  'Referred By Another Landlord',
  'Referred By a Realtor',
  'Referred By an Orca Tenant',
  'Referred By a Friend',
  'YELP',
  'Other',
];

export default function PropertyInformationStep({
  formData,
  onDataChange,
  onBack,
}: PropertyInformationStepProps) {
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add API call here
  };

  return (
    <div className="flex flex-col h-full ">
      <div className="mb-4 sm:mb-6 flex-shrink-0">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Property Information Step
          </h3>
        </div>
      </div>

      <div className="r-mt-3 flex-1 space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 overflow-y-auto overflow-x-hidden pr-1 sm:pr-2 md:pr-4 lg:pr-6 min-h-0" style={{ scrollbarWidth: 'thin', scrollbarColor: '#9ca3af #f3f4f6' }}>
        {/* Name */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Name <span className="text-red-500 text-xl">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onDataChange('name', e.target.value)}
            className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            placeholder="Enter your name"
          />
        </div>

        {/* Email and Phone Number - 2 Columns */}
        <div className="r-pt-5 r-mb-5 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-6 lg:gap-3">
          {/* Email */}
          <div className="r-p-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Email <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onDataChange('email', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Number */}
          <div className="r-p-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Phone Number <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => onDataChange('phoneNumber', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
              placeholder="(000) 000-0000"
            />
          </div>
        </div>

        {/* Rental Property Address */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-3 sm:mb-4 lg:mb-5 font-medium">
            In order to provide you with a proper rental evaluation, please provide your rental property address.
          </p>
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Rental Property Address <span className="text-red-500 text-xl">*</span>
          </label>
          <textarea
            value={formData.rentalPropertyAddress}
            onChange={(e) => onDataChange('rentalPropertyAddress', e.target.value)}
            className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 resize-y min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            placeholder="Enter your rental property address"
            rows={4}
          />
        </div>

        {/* City of Rental Property Address */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Please re-confirm the City of your rental property address. <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.cityOfRentalProperty}
              onChange={(e) => onDataChange('cityOfRentalProperty', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Estimated Square Footage and Number of Bedrooms - 2 Columns */}
        <div className="r-pt-5 r-mb-5 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-6 lg:gap-3">
          {/* Estimated Square Footage */}
          <div className="r-p-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Estimated Square footage <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="number"
              value={formData.estimatedSquareFootage}
              onChange={(e) => onDataChange('estimatedSquareFootage', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
              placeholder="0"
              min="0"
            />
          </div>

          {/* Number of Bedrooms */}
          <div className="r-p-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
              Number of Bedrooms <span className="text-red-500 text-xl">*</span>
            </label>
            <input
              type="number"
              value={formData.numberOfBedrooms}
              onChange={(e) => onDataChange('numberOfBedrooms', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
              placeholder="0"
              min="0"
            />
          </div>
        </div>

        {/* When are you planning to rent out your property? */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            When are you planning to rent out your property? <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.whenPlanningToRent}
              onChange={(e) => onDataChange('whenPlanningToRent', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {whenPlanningToRentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* What are your plans with your rental property? */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            What are your plans with your rental property? <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.plansWithProperty}
              onChange={(e) => onDataChange('plansWithProperty', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {plansWithPropertyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Aside from renting, are you considering selling your property? */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Aside from renting, are you considering selling your property? <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.consideringSelling}
              onChange={(e) => onDataChange('consideringSelling', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {consideringSellingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* If you have a rent amount in mind... */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            If you have a rent amount in mind, please share it here. This helps us understand your goals before preparing your evaluation. <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.rentAmountInMind}
              onChange={(e) => onDataChange('rentAmountInMind', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {rentAmountInMindOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Have you worked with a property manager before? */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Have you worked with a property manager before? <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.workedWithPropertyManager}
              onChange={(e) => onDataChange('workedWithPropertyManager', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {workedWithPropertyManagerOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Where did you hear about Orca Realty? */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Where did you hear about Orca Realty? <span className="text-red-500 text-xl">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.whereHeardAboutOrca}
              onChange={(e) => onDataChange('whereHeardAboutOrca', e.target.value)}
              className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            >
              <option value="">-Select Option-</option>
              {whereHeardAboutOrcaOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-10 xl:pr-12 pointer-events-none">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="r-p-5 r-mb-5 bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <label className="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
            Please share additional information about your property and or anything you&apos;d like to know or want us to know.
          </label>
          <textarea
            value={formData.additionalInformation}
            onChange={(e) => onDataChange('additionalInformation', e.target.value)}
            className="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 resize-y min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
            placeholder="Enter any additional information"
            rows={5}
          />
        </div>
      </div>

      {/* Buttons - Fixed at bottom */}
      <div className="flex-shrink-0 r-mt-3 r-pt-3 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          onClick={onBack}
          className="group r-p-5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 active:scale-100 cursor-pointer"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm sm:text-base">Back</span>
        </button>
        <button
          onClick={handleSubmit}
          className="group relative r-p-5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-100 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span className="text-sm sm:text-base">Submit Request</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

