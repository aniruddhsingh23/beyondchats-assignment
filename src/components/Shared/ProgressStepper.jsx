export default function ProgressStepper({ steps, currentStep }) {
    return (
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center relative flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                ${index <= currentStep ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                {index + 1}
              </div>
              <span className={`mt-2 text-sm text-center ${index <= currentStep ? 'text-primary' : 'text-gray-400'}`}>
                {step}
              </span>
              {index < steps.length - 1 && (
                <div className={`absolute top-4 left-1/2 w-full h-1 transition-colors
                  ${index < currentStep ? 'bg-primary' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }