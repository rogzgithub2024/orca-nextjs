'use client';

interface PropertyLocationStepProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  onNext: () => void;
}

const cities = [
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
  'Port Coquitlam',
  'Port Moody',
  'Richmond',
  'Surrey',
  'Vancouver',
  'West Vancouver',
  'White Rock',
  'Other City (Not listed in option)',
];

export default function PropertyLocationStep({
  selectedCity,
  onCityChange,
  onNext,
}: PropertyLocationStepProps) {
  const handleNext = () => {
    if (selectedCity) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 sm:mb-6 md:mb-10 lg:mb-12">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Select Your City
            <span className="text-red-500 r-ml-1">*</span>
          </h3>
          
        </div>
        <p className="r-mb-3 text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">Choose the city where your property is located</p>
      </div>

      <div className="r-pb-3 flex-1 overflow-y-auto pr-1 sm:pr-2 md:pr-4 lg:pr-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-5 lg:gap-6 xl:gap-2">
          {cities.map((city) => (
            <label
              key={city}
              className={`
                group relative flex items-center cursor-pointer 
                p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg sm:rounded-xl border-2 transition-all duration-200
                ${
                  selectedCity === city
                    ? 'border-black bg-gray-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm'
                }
              `}
            >
              <div className="flex items-center w-full">
                <div className={`
                  relative r-p-5 flex items-center justify-center mr-3 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10
                  transition-all duration-200
                `}>
                  <input
                    type="radio"
                    name="city"
                    value={city}
                    checked={selectedCity === city}
                    onChange={() => onCityChange(city)}
                    className="sr-only"
                  />
                  <div className={`
                    w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-2 transition-all duration-200
                    ${
                      selectedCity === city
                        ? 'border-black bg-black'
                        : 'border-gray-300 group-hover:border-gray-500'
                    }
                  `}>
                    {selectedCity === city && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
                <span className={`
                  flex-1 font-medium transition-colors duration-200 text-sm sm:text-base md:text-lg
                  ${
                    selectedCity === city
                      ? 'text-black font-semibold'
                      : 'text-gray-700 group-hover:text-gray-900'
                  }
                `}>
                  {city}
                </span>
             
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="r-pt-3 flex justify-end mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 border-t border-gray-200">
        <button
          onClick={handleNext}
          disabled={!selectedCity}
          className={`
            group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 lg:py-4.5 rounded-xl font-semibold text-sm sm:text-base md:text-lg
            transition-all duration-300 transform
            ${
              selectedCity
                ? 'bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-100'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <span className="r-p-5 flex items-center justify-center gap-2 md:gap-3 cursor-pointer">
            Continue
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 ${selectedCity ? 'group-hover:translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

