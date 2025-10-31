interface Step {
  number: number;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="r-m-3 flex items-center justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-32 xl:gap-40 w-full py-0 sm:py-8 md:py-10 lg:py-14 xl:py-16">
      {steps.map((step, index) => {
        const isActive = step.number === currentStep;
        const isCompleted = step.number < currentStep;

        return (
          <div key={step.number} className={`flex items-center ${index === 0 ? 'ml-2 sm:ml-4 md:ml-12 lg:ml-16 xl:ml-20' : ''} ${index === steps.length - 1 ? 'mr-2 sm:mr-4 md:mr-12 lg:mr-16 xl:mr-20' : ''}`}>
            {/* Step Circle and Title */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4">
              <div
                className={`
                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
                  font-bold text-sm sm:text-base md:text-lg transition-all duration-300
                  ${
                    isActive
                      ? 'bg-black text-white shadow-lg scale-105 sm:scale-110'
                      : isCompleted
                      ? 'bg-gray-800 text-white shadow-md'
                      : 'bg-gray-100 border-2 border-gray-300 text-gray-400'
                  }
                `}
              >
                {isCompleted ? (
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>

              {/* Step Title */}
              <span
                className={`
                  text-xs sm:text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? 'text-gray-900'
                      : isCompleted
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }
                `}
              >
                {step.title}
              </span>
            </div>

            
          </div>
        );
      })}
    </div>
  );
}
