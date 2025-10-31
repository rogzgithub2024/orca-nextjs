'use client';

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
    <div className="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      <div className="px-6 bg-gray-100 shadow-md">
        <div className="w-full max-w-6xl lg:max-w-7xl mx-auto" style={{width:'1600px',margin:'0 auto',padding:'10px' }}>
          {/* Mobile/Small: scrollable with connectors */}
          <div className="flex md:hidden items-center justify-start gap-4 sm:gap-6 overflow-x-auto py-3">
            {steps.map((step, index) => {
              const isActive = step.number === currentStep;
              const isCompleted = step.number < currentStep;
              return (
                <div key={step.number} className="flex items-center flex-shrink-0 min-w-max">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`
                        w-10 h-10 rounded-full flex items-center justify-center
                        font-bold text-sm transition-all duration-300
                        ${
                          isActive
                            ? 'bg-black text-white border-2 border-black'
                            : isCompleted
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                        }
                      `}
                    >
                      {isCompleted ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className={`text-xs font-semibold text-center whitespace-nowrap ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`${step.number < currentStep ? 'bg-black' : 'bg-gray-300'} w-8 h-0.5 mx-2`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Medium and up: centered equal columns, no connectors */}
          <div className="hidden md:grid grid-cols-6 gap-8 items-center justify-items-center py-4">
            {steps.map((step) => {
              const isActive = step.number === currentStep;
              const isCompleted = step.number < currentStep;
              return (
                <div key={step.number} className="w-full flex flex-col items-center">
                  <div
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      font-bold text-base transition-all duration-300
                      ${
                        isActive
                          ? 'bg-black text-white border-2 border-black'
                          : isCompleted
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`mt-2 text-sm font-semibold text-center ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

